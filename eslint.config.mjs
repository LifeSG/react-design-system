import { defineConfig } from "eslint/config";
import reactPlugin from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import reactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";

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
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
            },

            parser: tsParser,
            ecmaVersion: 11,
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    modules: true,
                    jsx: true,
                },
            },
        },

        settings: {
            react: {
                version: "detect",
            },
        },

        rules: {
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
        },
    },
    {
        files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
        plugins: {
            react: reactPlugin,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    modules: true,
                    jsx: true,
                },
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
        files: ["**/*.ts", "**/*.tsx"],
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
            "@typescript-eslint": typescriptEslint,
        },
        rules: {
            ...typescriptEslint.configs["eslint-recommended"].rules,
            ...typescriptEslint.configs.recommended.rules,
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
        },
    },
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        plugins: { "react-hooks": reactHooks },

        rules: {
            "react-hooks/exhaustive-deps": [
                "warn",
                {
                    additionalHooks: "useIsomorphicLayoutEffect",
                },
            ],
        },
    },
    {
        files: ["**/*.spec.{js,jsx,ts,tsx}", "**/*.test.{js,jsx,ts,tsx}"],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
    {
        files: ["src/v2_*/**/*.{ts,tsx}"],
        rules: {
            "@typescript-eslint/naming-convention": "off",
        },
    },
]);
