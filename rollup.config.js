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
import generatePackageJson from "rollup-plugin-generate-package-json";
import { libStylePlugin } from "rollup-plugin-lib-style";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import { fileURLToPath } from "url";
import { getFolders } from "./scripts/build-util";

const folders = getFolders("./src");

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
                "codemods",
            ],
        },
    }),
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
    }),
    libStylePlugin({
        include: ["node_modules/@govtechsg/sgds-web-component/**/*.css"],
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
                        "codemods",
                    ],
                },
            }),
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
const newPackageData = {
    ...packageOthers,
    private: false,
    typings: "./index.d.ts",
    main: "./cjs/index.js",
    module: "./index.js",
    exports: {
        ".": {
            import: "./index.js",
            require: "./cjs/index.js",
        },
        "./styles.css": "./styles.css",
        ...Object.fromEntries(
            folders.map((folder) => [
                `./${folder}`,
                {
                    import: `./${folder}/index.js`,
                    require: `./cjs/${folder}/index.js`,
                },
            ])
        ),
    },
};

export default [
    {
        input: Object.fromEntries(
            globSync("src/**/*.{tsx,ts}", {
                ignore: ["src/**/types.ts"],
            }).map((file) => [
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
                chunkFileNames: "chunks/[name].[hash].js",
                assetFileNames: "[name].[hash][extname]",
            },
            {
                dir: "dist/cjs",
                format: "cjs",
                sourcemap: true,
                exports: "named",
                interop: "compat",
                chunkFileNames: "chunks/[name].[hash].js",
                assetFileNames: "[name].[hash][extname]",
            },
        ],
        plugins: [
            ...plugins,
            generatePackageJson({
                baseContents: newPackageData,
            }),
        ],
        external: ["react", "react-dom", "styled-components"],
    },
    ...codemodBuildConfigs,
];
