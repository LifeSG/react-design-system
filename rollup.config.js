import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import wyw from "@wyw-in-js/rollup";
import fs from "fs";
import path from "path";
import postcssImports from "postcss-import";
import copy from "rollup-plugin-copy";
import generatePackageJson from "rollup-plugin-generate-package-json";
import { libStylePlugin } from "rollup-plugin-lib-style";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

const dirsToIgnore = ["custom-types", "shared", "util", "v2_spec", "__mocks__"];

const srcDir = "src";
const subDirs = fs
    .readdirSync(srcDir, { withFileTypes: true })
    .filter(
        (dirent) =>
            dirent.isDirectory() &&
            fs.existsSync(path.join(srcDir, dirent.name, "index.ts")) &&
            !dirsToIgnore.includes(dirent.name)
    )
    .map((dirent) => dirent.name);

const subEntries = subDirs.reduce((acc, name) => {
    acc[`${name}/index`] = path.join(srcDir, name, "index.ts");
    return acc;
}, {});

const input = {
    index: "src/index.ts",
    ...subEntries,
};

const subExports = subDirs.reduce((acc, name) => {
    acc[`./${name}`] = {
        types: `./${name}/index.d.ts`,
        import: `./${name}/index.js`,
        require: `./cjs/${name}/index.js`,
        // Reference: https://nodejs.org/api/packages.html#conditional-exports
        default: `./${name}/index.js`, // For any unknown JS environment, fallback to ESM build
    };
    return acc;
}, {});

const basePlugins = [
    peerDepsExternal(), // Add the externals for me. [react, react-dom, styled-components]
    nodeResolve({ browser: true }), // Locates modules in the project's node_modules directory
    commonjs(), // converts CommonJS to ES6 modules
    json(), // converts JSON files to ES6 modules
];

const plugins = [
    ...basePlugins,
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
    terser(), // Helps remove comments, whitespace or logging codes
    generatePackageJson({
        outputFolder: "dist",
        baseContents: (pkg) => ({
            name: pkg.name,
            version: pkg.version,
            description: pkg.description,
            type: "module",
            main: "./cjs/index.js",
            module: "./index.js",
            types: "./index.d.ts",
            exports: {
                ".": {
                    types: "./index.d.ts",
                    import: "./index.js",
                    require: "./cjs/index.js",
                    // Reference: https://nodejs.org/api/packages.html#conditional-exports
                    default: "./index.js", // For any unknown JS environment, fallback to ESM build
                },
                ...subExports,
            },
            peerDependencies: pkg.peerDependencies,
        }),
    }),

    // =========================================================================
    // COMPONENT-SPECIFIC PLUGINS
    // =========================================================================
    image(),
    // Handles local component CSS modules (excludes node_modules).
    // Ensures custom CSS is injected and output paths are mapped for local components.
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
    // Handles external SGDS web component CSS from node_modules.
    // Ensures SGDS styles are bundled and output to a fixed path for masthead usage.
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
    wyw({
        sourcemap: true,
    }),
    // Copies static assets to the build output
    copy({
        targets: [{ src: "src/theme/styles/*", dest: "dist/theme/styles" }],
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
            copy({
                targets: [{ src: "codemods/**/*", dest: "dist/codemods" }],
            }),
        ],
    },
];

export default [
    {
        input,
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
        plugins,
        external: ["react", "react-dom", "styled-components"],
    },
    ...codemodBuildConfigs,
];
