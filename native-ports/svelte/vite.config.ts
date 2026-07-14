import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [svelte()],
    root: resolve(__dirname, "demo"),
    resolve: {
        alias: {
            "@lib": resolve(__dirname, "src"),
        },
    },
});
