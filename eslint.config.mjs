import { defineConfig } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default defineConfig([
    {
        extends: fixupConfigRules(
            compat.extends(
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:react/recommended",
                "prettier",
                "plugin:mdx/recommended",
                "plugin:react-hooks/recommended",
                "plugin:storybook/recommended"
            )
        ),

        plugins: {
            react: fixupPluginRules(react),
            "@typescript-eslint": fixupPluginRules(typescriptEslint),
        },

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

            "mdx/code-blocks": true,
        },

        rules: {
            indent: "off",
            "no-empty": "off",
            "no-console": "off",
            "no-debugger": "off",
            curly: "off",
            "max-len": "off",
            semi: ["error", "always"],

            "space-before-function-paren": [
                "warn",
                {
                    anonymous: "always",
                    named: "never",
                    asyncArrow: "always",
                },
            ],

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

            "@typescript-eslint/member-ordering": "off",

            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/no-empty-interface": "off",

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

            "react/react-in-jsx-scope": "off",

            "react/no-unknown-property": [
                "error",
                {
                    ignore: ["inert"],
                },
            ],

            "react-hooks/exhaustive-deps": [
                "warn",
                {
                    additionalHooks: "useIsomorphicLayoutEffect",
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
        files: ["src/v2_*/**/*.{ts,tsx}"],

        rules: {
            "@typescript-eslint/naming-convention": "off",
        },
    },
]);
