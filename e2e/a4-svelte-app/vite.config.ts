import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
    base: "/a4-svelte/",
    plugins: [svelte()],
});
