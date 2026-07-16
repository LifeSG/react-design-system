import fs from "node:fs";
import path from "node:path";

import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import wyw from "@wyw-in-js/rollup";
import postcssImports from "postcss-import";
import copy from "rollup-plugin-copy";
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
import generatePackageJson from "rollup-plugin-generate-package-json";
import { libStylePlugin } from "rollup-plugin-lib-style";
import typescript from "rollup-plugin-typescript2";

import { createFixCssImportPathsPlugin } from "./rollup/fix-css-import-paths-plugin.js";

const fixCssImportPathsPlugin = createFixCssImportPathsPlugin({
    outputDirs: ["dist", "dist/cjs"],
});
const includeWebComponents = process.env.BUILD_WEB_COMPONENTS === "true";
const includeVueComponents = process.env.BUILD_VUE_COMPONENTS === "true";
const includeNativePorts = process.env.BUILD_NATIVE_PORTS === "true";
const dirsToIgnore = new Set(["custom-types", "shared", "util", "__mocks__"]);

const srcDir = "src";
const subDirs = fs
    .readdirSync(srcDir, { withFileTypes: true })
    .filter(
        (dirent) =>
            dirent.isDirectory() &&
            fs.existsSync(path.join(srcDir, dirent.name, "index.ts")) &&
            !dirsToIgnore.has(dirent.name)
    )
    .map((dirent) => dirent.name);

const subEntries = subDirs.reduce((acc, name) => {
    acc[`${name}/index`] = path.join(srcDir, name, "index.ts");
    return acc;
}, {});

const input = {
    index: "src/index.ts",
    ...subEntries,
    ...(includeWebComponents
        ? {
              "web-components": "src/web-components.ts",
          }
        : {}),
    ...(includeVueComponents
        ? {
              "vue-components": "src/vue-components.ts",
          }
        : {}),
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

const additionalExports = {
    ...(includeWebComponents
        ? {
              "./web-components": {
                  types: "./web-components.d.ts",
                  import: "./web-components.js",
                  require: "./cjs/web-components.js",
                  default: "./web-components.js",
              },
          }
        : {}),
    ...(includeVueComponents
        ? {
              "./vue-veaury": {
                  types: "./vue-components.d.ts",
                  import: "./vue-components.js",
                  require: "./cjs/vue-components.js",
                  default: "./vue-components.js",
              },
          }
        : {}),
    ...(includeNativePorts
        ? {
              "./svelte": {
                  svelte: "./native/svelte/index.ts",
                  import: "./native/svelte/index.ts",
              },
              "./vue": {
                  import: "./native/vue/index.ts",
              },
              "./angular": {
                  import: "./native/angular/index.ts",
              },
              "./react-native": {
                  import: "./native/react-native/index.ts",
              },
              "./core/svelte": {
                  svelte: "./native/core/svelte/index.ts",
                  import: "./native/core/svelte/index.ts",
              },
              "./core/vue": {
                  import: "./native/core/vue/index.ts",
              },
              "./core/angular": {
                  import: "./native/core/angular/index.ts",
              },
              "./core/react-native": {
                  import: "./native/core/react-native/index.ts",
              },
              "./core": {
                  import: "./native/core/design-core/index.ts",
              },
              "./styles": {
                  import: "./native/styles/index.ts",
              },
              "./styles/theme/*": "./native/styles/theme/*",
              "./styles/styles.css": "./native/styles/styles.css",
          }
        : {}),
};

const basePlugins = [
    excludeDependenciesFromBundle(), // Exclude dependencies and peer dependencies from the bundle
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
                "src/native",
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
            keywords: pkg.keywords,
            homepage: pkg.homepage,
            bugs: pkg.bugs,
            license: pkg.license,
            repository: pkg.repository,
            engines: pkg.engines,
            main: "./cjs/index.js",
            module: "./index.js",
            types: "./index.d.ts",
            bin: {
                "lifesg-react-design-system": "./codemods/run-codemod.js",
            },
            exports: {
                ".": {
                    types: "./index.d.ts",
                    import: "./index.js",
                    require: "./cjs/index.js",
                    // Reference: https://nodejs.org/api/packages.html#conditional-exports
                    default: "./index.js", // For any unknown JS environment, fallback to ESM build
                },
                "./theme/styles/*.css": {
                    import: "./theme/styles/*.css",
                    require: "./theme/styles/*.css",
                },
                ...additionalExports,
                ...subExports,
            },
            dependencies: pkg.dependencies,
            peerDependencies: pkg.peerDependencies,
        }),
    }),
    // Writes dist/cjs/package.json so Node.js treats those files as CommonJS.
    generatePackageJson({
        outputFolder: "dist/cjs",
        baseContents: { type: "commonjs" },
    }),

    // =========================================================================
    // COMPONENT-SPECIFIC PLUGINS
    // =========================================================================
    image(),
    // Handles local component CSS modules (excludes node_modules).
    // Injects an import statement in the source style file and outputs CSS in the same location.
    libStylePlugin({
        exclude: ["**/node_modules/**"],
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
        include: ["node_modules/@govtechsg/sgds-web-component/themes/day.css"],
        postCssPlugins: [postcssImports()],
        customCSSInjectedPath: () => {
            return "/sgds-day.css";
        },
        customCSSPath: () => {
            return "/masthead/sgds-day.css";
        },
    }),
    libStylePlugin({
        include: [
            "node_modules/@govtechsg/sgds-web-component/themes/night.css",
        ],
        postCssPlugins: [postcssImports()],
        customCSSInjectedPath: () => {
            return "/sgds-night.css";
        },
        customCSSPath: () => {
            return "/masthead/sgds-night.css";
        },
    }),
    wyw({
        sourcemap: true,
    }),
    // Copies static assets to the build output
    copy({
        targets: [{ src: "src/theme/styles/*", dest: "dist/theme/styles" }],
    }),
    fixCssImportPathsPlugin,
];

const libraryBuildConfig = {
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
                        chunkInfo.name.replaceAll("node_modules", "external") +
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
                        chunkInfo.name.replaceAll("node_modules", "external") +
                        ".js"
                    );
                }
                return "[name].js";
            },
        },
    ],
    plugins,
};

const codemodBuildConfig = {
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
};

export default [libraryBuildConfig, codemodBuildConfig];
