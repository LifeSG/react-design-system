import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import localRules from "../../eslint-local-rules/index.mjs";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        files: ["src/**/*.{js,jsx,ts,tsx}"],
        plugins: {
            local: localRules,
        },
        rules: {
            "local/import-path-preferences": "warn",
            "no-restricted-syntax": [
                "error",
                {
                    selector: "JSXAttribute[name.name='style']",
                    message:
                        "Inline styles are not allowed in e2e/nextjs-app. Use CSS modules instead.",
                },
            ],
        },
    },
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
]);

export default eslintConfig;
