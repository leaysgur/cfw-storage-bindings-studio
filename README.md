# cfw-storage-bindings-studio

Generic GUI for storage-related bindings based on [`cfw-bindings-wrangler-bridge`](https://github.com/leaysgur/cfw-bindings-wrangler-bridge) module.

You can interact both local and remote data! 🧙

## What does it solve?

- Remotely: Cloudflare dashboard is not a good UX(sorry, IMO)
- Locally: `miniflare` persistent source, no way to easily see what's in it

This module tries to solve these both problems at once.

## Usage

0️⃣ Set up [`cfw-bindings-wrangler-bridge`](https://github.com/leaysgur/cfw-bindings-wrangler-bridge) worker process.

1️⃣ Launch GUI. That's all ✌️

```sh
npx cfw-storage-bindings-studio

# Options
# For GUI running port, default: 3000
npx cfw-storage-bindings-studio --studio-port 5173
# For bridge worker origin, default: http://127.0.0.1:8787
npx cfw-storage-bindings-studio --bridge-origin http://localhost:8686
```

## TODOs

- TBD...
