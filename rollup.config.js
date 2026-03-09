import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import wyw from "@wyw-in-js/rollup";
import copy from "rollup-plugin-copy";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import { libStylePlugin } from "rollup-plugin-lib-style";

export const plugins = [
    peerDepsExternal(), // Add the externals for me. [react, react-dom, styled-components]
    nodeResolve({ browser: true }), // Locates modules in the project's node_modules directory
    commonjs(), // converts CommonJS to ES6 modules
    wyw({
        include: ["src/**/*.{ts,tsx,js,jsx}"],
        exclude: [
            "**/*.test.*",
            "**/*.spec.*",
            "**/*.stories.*",
            "**/__mocks__/**",
            "codemods/**",
        ],
        sourceMap: true,
        babelOptions: {
            presets: ["@wyw-in-js/babel-preset"],
        },
    }),
    typescript({
        useTsconfigDeclarationDir: true,
        tsconfig: "tsconfig.json",
        tsconfigOverride: {
            // Override base tsconfig.json during build
            exclude: [
                "tests",
                "**/stories/**",
                "**/__mocks__/**",
                "**/custom-types/css.d.ts",
                "**/custom-types/jpg.d.ts",
                "**/custom-types/mdx.d.ts",
                "**/custom-types/svg.d.ts",
                "codemods",
            ],
        },
    }),
    image(),
    json(),
    terser(), // Helps remove comments, whitespace or logging codes
    libStylePlugin(),
];

const codemodBuildConfigs = [
    {
        input: `codemods/run-codemod.ts`,
        output: {
            banner: "#!/usr/bin/env node",
            file: `dist/codemods/run-codemod.js`,
            sourcemap: true,
            exports: "named",
            format: "cjs",
        },
        plugins: [
            peerDepsExternal(), // Exclude peer deps
            nodeResolve(), // Locates modules in the project's node_modules directory
            commonjs(), // Converts CommonJS to ES6 modules
            typescript({
                useTsconfigDeclarationDir: true,
                tsconfig: "tsconfig.json",
                tsconfigOverride: {
                    exclude: [
                        "tests",
                        "**/stories/**",
                        "**/__mocks__/**",
                        "**/custom-types/**",
                        "src/**",
                    ],
                },
            }),
            json(),
            copy({
                targets: [{ src: "codemods/**/*", dest: "dist/codemods" }],
            }),
        ],
    },
];

export default [
    {
        input: "src/index.ts",
        output: [
            {
                dir: "dist",
                format: "esm",
                sourcemap: true,
                exports: "named",
                interop: "compat",
                preserveModules: true,
                preserveModulesRoot: "src",
            },
            {
                dir: "dist/cjs",
                format: "cjs",
                sourcemap: true,
                exports: "named",
                interop: "compat",
                preserveModules: true,
                preserveModulesRoot: "src",
            },
        ],
        plugins: [
            ...plugins,
            copy({
                targets: [
                    { src: "src/theme/styles/*", dest: "dist/theme/styles" },
                ],
            }),
        ],
        external: ["react", "react-dom", "styled-components"],
    },
    ...codemodBuildConfigs,
];
