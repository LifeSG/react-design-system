import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import { readFileSync } from "fs-extra";
import { globSync } from "glob";
import path from "path";
import copy from "rollup-plugin-copy";
import generatePackageJson from "rollup-plugin-generate-package-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import { fileURLToPath } from "url";
import pkg from "./package.json";
import { getFolders, injectCss } from "./scripts/build-util";
import linaria from "@wyw-in-js/rollup";
import cssOnly from "rollup-plugin-css-only";
import importCss from "rollup-plugin-import-css";
import keepCssImports from "rollup-plugin-keep-css-imports";
import styler from "rollup-plugin-styler";
import postcssProcessor from "postcss";
import postcssImports from "postcss-import";
import { libStylePlugin } from "rollup-plugin-lib-style";

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
    // postcss({
    //     plugins: [require("postcss-import")],
    //     extract: "styles.css",
    //     // inject: injectCss,
    // }),
    // cssOnly({
    //     // output: "styles.css",
    // }),
    // importCss({ preserveImports: true }),
    // keepCssImports({ includeRegexp: /\.css$/ }),
    // keepCssImports({
    //     outputPath: (assetId) => {
    //         // Generate a custom output path based on the input assetId

    //         // Make the assetId path relative to the current working directory (CWD)
    //         const relativePath = path.relative(process.cwd(), assetId);

    //         if (relativePath.includes("node_modules")) {
    //             // Bundle the css from node_modules
    //             let filename = relativePath.replace("node_modules/", "");
    //             return path.join(process.cwd(), `dist/externals/${filename}`);
    //         }

    //         // Replace 'src' with 'styles' in the relativePath
    //         const newPath = relativePath.replace("src", "styles");
    //         return newPath;
    //     },
    //     postProcessor: () => postcssProcessor([postcssImports()]),
    // }),
    // styler({
    //     mode: "emit",
    //     plugins: [require("postcss-import")],
    // }),
    // keepCssImports(),
    // styler({
    //     mode: "extract",
    // }),
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
    // libStylePlugin({
    //     include: ["node_modules/@govtechsg/sgds-web-component/**/*.css"],
    //     postCssPlugins: [postcssImports()],
    // }),
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
        // input: "src/index.ts",
        output: [
            {
                dir: "dist",
                format: "esm",
                sourcemap: true,
                exports: "named",
                interop: "compat",
                // preserveModules: true,
                // preserveModulesRoot: "src",
                // chunkFileNames: "chunks/[name].[hash].js",
                assetFileNames: "[name].[hash][extname]",
            },
            {
                dir: "dist/cjs",
                format: "cjs",
                sourcemap: true,
                exports: "named",
                interop: "compat",
                // preserveModules: true,
                // preserveModulesRoot: "src",
                // chunkFileNames: "chunks/[name].[hash].js",
                assetFileNames: "[name].[hash][extname]",
            },
        ],
        plugins: [
            ...plugins,
            generatePackageJson({
                baseContents: newPackageData,
            }),
        ],
        // external: ["react", "react-dom", "styled-components", /.css$/],
        external: ["react", "react-dom", "styled-components"],
    },
    // ...folderBuildConfigs,
    // ...codemodBuildConfigs,
];
