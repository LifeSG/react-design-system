import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import localRules from "../../eslint-local-rules/import-path-preferences.mjs";

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
