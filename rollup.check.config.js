import { plugins } from "./rollup.config";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                dir: "dist",
                format: "esm",
                sourcemap: true,
                exports: "named",
                chunkFileNames: "chunks/[name].[hash].js",
            },
            {
                dir: "dist/cjs",
                format: "cjs",
                sourcemap: true,
                exports: "named",
                chunkFileNames: "chunks/[name].[hash].js",
            },
        ],
        plugins,
        external: ["react", "react-dom", "styled-components"],
    },
];
