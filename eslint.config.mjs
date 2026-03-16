import js from "@eslint/js";
import pluginTypescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import pluginImport from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import storybook from "eslint-plugin-storybook";
import globals from "globals";

import localRules from "./eslint-local-rules/import-path-preferences.mjs";

const sourceFileGlobs = ["**/*.{js,jsx,mjs,cjs,ts,tsx}"];
const reactSourceFileGlobs = ["**/*.{js,jsx,ts,tsx}"];
const tsFileGlobs = ["**/*.{ts,tsx}"];
const testFileGlobs = [
    "**/*.spec.{js,jsx,ts,tsx}",
    "**/*.test.{js,jsx,ts,tsx}",
];

const baseEcmaFeatures = {
    modules: true,
    jsx: true,
};

const baseLanguageOptions = {
    globals: {
        ...globals.node,
        ...globals.browser,
    },
    parser: tsParser,
    ecmaVersion: 11,
    sourceType: "module",
    parserOptions: {
        ecmaFeatures: baseEcmaFeatures,
    },
};

const sharedJsRules = {
    indent: "off",
    "no-empty": "off",
    "no-console": "off",
    "no-debugger": "off",
    curly: "off",
    "max-len": "off",
    semi: ["error", "always"],
    "no-trailing-spaces": "off",
    "max-classes-per-file": "off",
    "no-multiple-empty-lines": "off",
    "linebreak-style": ["error", "unix"],
    "sort-imports": [
        "warn",
        {
            ignoreDeclarationSort: true,
        },
    ],
};

const sharedTsRules = {
    ...pluginTypescriptEslint.configs["eslint-recommended"].rules,
    ...pluginTypescriptEslint.configs.recommended.rules,
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-empty-object-type": [
        "error",
        {
            allowInterfaces: "always",
        },
    ],
    "@typescript-eslint/naming-convention": [
        "error",
        {
            selector: ["interface", "class"],
            format: ["PascalCase"],
        },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
        "warn",
        {
            accessibility: "explicit",
        },
    ],
    "@typescript-eslint/no-unused-vars": [
        "error",
        {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
        },
    ],
};

export default defineConfig([
    {
        ignores: [
            "**/node_modules/**",
            "**/dist/**",
            "**/.storybook/**",
            "**/e2e/**",
            "playwright.config.ts",
        ],
    },
    js.configs.recommended,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat["jsx-runtime"],
    eslintConfigPrettier,
    storybook.configs["flat/recommended"],
    {
        languageOptions: baseLanguageOptions,
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: sharedJsRules,
    },
    {
        plugins: {
            import: pluginImport,
            "simple-import-sort": pluginSimpleImportSort,
        },
        rules: {
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "import/first": "error",
            "import/newline-after-import": "error",
            "import/no-duplicates": "error",
        },
    },
    {
        files: sourceFileGlobs,
        plugins: {
            react: reactPlugin,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: baseEcmaFeatures,
            },
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            "react/no-unknown-property": [
                "error",
                {
                    ignore: ["inert"],
                },
            ],
        },
    },
    {
        files: tsFileGlobs,
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: "./tsconfig.json",
            },
            globals: {
                React: "readonly",
                JSX: "readonly",
            },
        },
        plugins: {
            "@typescript-eslint": pluginTypescriptEslint,
        },
        rules: sharedTsRules,
    },
    {
        files: reactSourceFileGlobs,
        plugins: { "react-hooks": reactHooks, local: localRules },
        rules: {
            "local/import-path-preferences": "warn",
            "react-hooks/exhaustive-deps": [
                "warn",
                {
                    additionalHooks: "useIsomorphicLayoutEffect",
                },
            ],
        },
    },
    {
        files: testFileGlobs,
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
    {
        files: ["src/v2_*/**/*.{ts,tsx}", "src/v3_*/**/*.{ts,tsx}"],
        rules: {
            "@typescript-eslint/naming-convention": "off",
        },
    },
]);
