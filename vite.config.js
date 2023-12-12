import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  esbuild: {
    // Need to make `constructor.name` works for bridge modules
    keepNames: true,
  },
  optimizeDeps: {
    exclude: ["codemirror", "@codemirror/*"],
  },
});
