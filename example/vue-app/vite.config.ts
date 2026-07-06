import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // Tell Vue to treat any tag starting with "lifesg-" as a custom element
                    isCustomElement: (tag) => tag.startsWith("lifesg-"),
                },
            },
        }),
    ],
});
