import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import copy from "rollup-plugin-copy";
import generatePackageJson from "rollup-plugin-generate-package-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import { getFolders } from "./scripts/build-util";

export const plugins = [
    peerDepsExternal(), // Add the externals for me. [react, react-dom, styled-components]
    nodeResolve({ browser: true }), // Locates modules in the project's node_modules directory
    commonjs(), // converts CommonJS to ES6 modules
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
            ],
        },
    }),
    postcss({
        extract: true,
        modules: false,
        plugins: [require("postcss-import")],
    }),
    image(),
    json(),
    terser(), // Helps remove comments, whitespace or logging codes
];

const subfolderPlugins = (folderName) => [
    ...plugins,
    generatePackageJson({
        baseContents: {
            name: `${pkg.name}/${folderName}`,
            private: true,
            main: "../cjs/index.js", // point to cjs format entry point
            module: "./index.js", // point to esm format entry point of indiv components
            types: "./index.d.ts", // point to esm format entry point of indiv components
        },
    }),
];

const folderBuildConfigs = getFolders("./src").map((folder) => {
    return {
        input: `src/${folder}/index.ts`,
        output: {
            dir: `dist/${folder}`,
            sourcemap: true,
            exports: "named",
            format: "esm",
            chunkFileNames: "chunks/[name].[hash].js",
        },
        plugins: subfolderPlugins(folder),
        external: ["react", "react-dom", "styled-components"],
    };
});

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
            ...plugins,
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
                chunkFileNames: "chunks/[name].[hash].js",
            },
            {
                dir: "dist/cjs",
                format: "cjs",
                sourcemap: true,
                exports: "named",
                interop: "compat",
                chunkFileNames: "chunks/[name].[hash].js",
            },
        ],
        plugins,
        external: ["react", "react-dom", "styled-components"],
    },
    ...folderBuildConfigs,
    ...codemodBuildConfigs,
];
