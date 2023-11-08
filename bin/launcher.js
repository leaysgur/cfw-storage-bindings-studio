#!/usr/bin/env node
// @ts-check
import { parseArgs } from "node:util";
import { access, writeFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { createServer } from "node:http";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const MIME_TYPES = {
  default: "application/octet-stream",
  html: "text/html; charset=UTF-8",
  css: "text/css",
  js: "application/javascript",
};

const BIN_DIR_NAME = dirname(fileURLToPath(import.meta.url));
const STATIC_PATH = BIN_DIR_NAME.endsWith("/bin") ? join(process.cwd(), "./build") : BIN_DIR_NAME;

(async () => {
  const { values } = parseArgs({
    args: process.argv.slice(2),
    options: {
      "bridge-origin": {
        type: "string",
        default: "http://127.0.0.1:8787",
      },
      "studio-port": { type: "string", default: "3000" },
    },
  });

  // Communicate the bridge origin to the launcher
  await writeFile(
    join(STATIC_PATH, "settings.json"),
    JSON.stringify({ bridgeOrigin: values["bridge-origin"] }),
  );

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

  console.log(`Server running on http://127.0.0.1:${values["studio-port"]}`);
  console.log(`  with bridge running on ${values["bridge-origin"]}`);
})();
