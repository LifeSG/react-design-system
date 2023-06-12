import pkg from "./package.json";
import { plugins } from "./rollup.config";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: pkg.module,
                format: "esm",
                sourcemap: true,
                exports: "named",
            },
            {
                file: pkg.main,
                format: "cjs",
                sourcemap: true,
                exports: "named",
            },
        ],
        plugins,
        external: ["react", "react-dom", "styled-components"],
    },
];
