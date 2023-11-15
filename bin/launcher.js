#!/usr/bin/env node
// @ts-check
import { parseArgs } from "node:util";
import { access, writeFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { createServer } from "node:http";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { unstable_dev } from "wrangler";

const MIME_TYPES = {
  default: "application/octet-stream",
  html: "text/html; charset=UTF-8",
  css: "text/css",
  js: "application/javascript",
};

const BIN_DIR_NAME = dirname(fileURLToPath(import.meta.url));
const STATIC_PATH = BIN_DIR_NAME.endsWith("/bin") ? join(process.cwd(), "./build") : BIN_DIR_NAME;

let devWorker;
(async () => {
  const { values } = parseArgs({
    args: process.argv.slice(2),
    options: {
      "studio-port": { type: "string", default: "3000" },
      config: { short: "c", type: "string", default: "./wrangler.toml" },
      "persist-to": { type: "string", default: ".wrangler/state" },
      remote: { type: "boolean", default: false },
    },
  });

  devWorker = await unstable_dev(join(STATIC_PATH, "worker.js"), {
    ...(values["remote"] ? { local: false } : { local: true, persistTo: values["persist-to"] }),
    config: values["config"],
    experimental: { disableExperimentalWarning: true },
  });
  const bridgeOrigin = `http://${devWorker.address}:${devWorker.port}`;

  // Communicate the bridge origin to the launcher
  await writeFile(join(STATIC_PATH, "settings.json"), JSON.stringify({ bridgeOrigin }));

  createServer(async (req, res) => {
    const filePath = join(STATIC_PATH, String(req.url));

    // Path traversal prevention
    if (!filePath.startsWith(STATIC_PATH)) return res.writeHead(403).end();

    const ext = extname(filePath).substring(1).toLowerCase();

    // HTML, always serve index.html
    if (!ext || ext === "html") {
      res.writeHead(200, { "Content-Type": MIME_TYPES.html });
      return createReadStream(join(STATIC_PATH, "index.html")).pipe(res);
    }

    // JS or CSS or...
    const exists = await access(filePath)
      .then(() => true)
      .catch(() => false);

    if (!exists) return res.writeHead(404).end();

    const mimeType = MIME_TYPES[ext] ?? MIME_TYPES.default;
    res.writeHead(200, { "Content-Type": mimeType });
    return createReadStream(filePath).pipe(res);
  }).listen(values["studio-port"]);

  console.log(`GUI is running on http://127.0.0.1:${values["studio-port"]}`);
  if (values["remote"]) {
    console.log(`  with bridge(mode=remote) running on ${bridgeOrigin}`);
  } else {
    console.log(`  with bridge(mode=local) running on ${bridgeOrigin}`);
    console.log(`    persistTo: ${values["persist-to"]}`);
  }
  {
    console.log(`    config: ${values["config"]}`);
  }
})().catch(async (err) => {
  console.error(err);
  await devWorker?.stop();
  process.exit(1);
});
