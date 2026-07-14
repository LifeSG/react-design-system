import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
    if (mode === "lib") {
        return {
            plugins: [vue()],
            build: {
                lib: {
                    entry: resolve(__dirname, "src/components/index.ts"),
                    formats: ["es"],
                    fileName: "index",
                },
                rollupOptions: {
                    external: ["vue", "dayjs", "@lifesg/flagship-styles"],
                },
            },
        };
    }

    return {
        plugins: [vue()],
        server: {
            port: 5181,
            host: "127.0.0.1",
        },
    };
});
