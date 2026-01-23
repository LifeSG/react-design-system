import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import linaria from "@wyw-in-js/rollup";
import { readFileSync } from "fs-extra";
import { globSync } from "glob";
import path from "path";
import postcssImports from "postcss-import";
import copy from "rollup-plugin-copy";
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
import generatePackageJson from "rollup-plugin-generate-package-json";
import { libStylePlugin } from "rollup-plugin-lib-style";
import typescript from "rollup-plugin-typescript2";
import { fileURLToPath } from "url";
import { getFolders } from "./scripts/build-util";

const folders = getFolders("./src");

const basePlugins = [
    excludeDependenciesFromBundle(), // Add the externals for me. [react, react-dom, styled-components]
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
                "codemods",
            ],
        },
    }),
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
            ...basePlugins,
            image(),
            json(),
            terser(), // Helps remove comments, whitespace or logging codes
            copy({
                targets: [{ src: "codemods/**/*", dest: "dist/codemods" }],
            }),
        ],
    },
];

const packagePath = process.cwd();
const packageData = readFileSync(
    path.resolve(packagePath, "./package.json"),
    "utf8"
);
const { ...packageOthers } = JSON.parse(packageData);

export default [
    {
        input: Object.fromEntries(
            globSync("src/**/index.{tsx,ts}").map((file) => [
                // This removes `src/` as well as the file extension from each
                // file, so e.g. src/nested/foo.js becomes nested/foo
                path.relative(
                    "src",
                    file.slice(0, file.length - path.extname(file).length)
                ),
                // This expands the relative paths to absolute paths, so e.g.
                // src/nested/foo becomes /project/src/nested/foo.js
                fileURLToPath(new URL(file, import.meta.url)),
            ])
        ),
        output: [
            {
                dir: "dist",
                format: "esm",
                sourcemap: true,
                exports: "named",
                interop: "compat",
                preserveModules: true,
                preserveModulesRoot: "src",
                chunkFileNames: "chunks/[name].[hash].js",
                entryFileNames: (chunkInfo) => {
                    if (chunkInfo.name.includes("node_modules")) {
                        return (
                            chunkInfo.name.replace("node_modules", "external") +
                            ".js"
                        );
                    }

                    return "[name].js";
                },
            },
            {
                dir: "dist/cjs",
                format: "cjs",
                sourcemap: true,
                exports: "named",
                interop: "compat",
                chunkFileNames: "chunks/[name].[hash].js",
                preserveModules: true,
                preserveModulesRoot: "src",
                entryFileNames: (chunkInfo) => {
                    if (chunkInfo.name.includes("node_modules")) {
                        return (
                            chunkInfo.name.replace("node_modules", "external") +
                            ".js"
                        );
                    }

                    return "[name].js";
                },
            },
        ],
        plugins: [
            ...basePlugins,
            linaria.default({
                sourceMap: true,
            }),
            libStylePlugin({
                exclude: ["**/node_modules/**"],
                customCSSInjectedPath: (id) => {
                    const filename = path.basename(id);
                    return "/" + filename;
                },
                customCSSPath: (id) => {
                    const relative = path.relative(process.cwd(), id);
                    const outputPath = relative.replace("src/", "");
                    return "/" + outputPath;
                },
                scopedName: "[local]",
            }),
            libStylePlugin({
                include: [
                    "node_modules/@govtechsg/sgds-web-component/**/*.css",
                ],
                postCssPlugins: [postcssImports()],
                customCSSInjectedPath: () => {
                    return "/sgds.css";
                },
                customCSSPath: () => {
                    return "/masthead/sgds.css";
                },
            }),
            image(),
            json(),
            terser(), // Helps remove comments, whitespace or logging codes
            generatePackageJson({
                baseContents: {
                    ...packageOthers,
                    private: false,
                    typings: "./index.d.ts",
                    module: "./index.js",
                    main: "./index.js",
                    exports: {
                        ".": {
                            import: "./index.js",
                            require: `./cjs/index.js`,
                            default: "./index.js",
                        },
                        ...Object.fromEntries(
                            folders.map((folder) => [
                                `./${folder}`,
                                {
                                    import: `./${folder}/index.js`,
                                    require: `./cjs/${folder}/index.js`,
                                    default: `./${folder}/index.js`,
                                },
                            ])
                        ),
                    },
                },
            }),
        ],
        external: ["react", "react-dom", "styled-components"],
    },
    ...codemodBuildConfigs,
];
