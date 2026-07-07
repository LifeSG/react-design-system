import tsParser from "@typescript-eslint/parser";
import { RuleTester } from "eslint";

import localRules from "../../eslint-local-rules/index.mjs";

const rule = localRules.rules["style-namespace-import"];

const ruleTester = new RuleTester({
    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",
    },
});

ruleTester.run("style-namespace-import", rule, {
    valid: [
        {
            name: "namespace import from .style path",
            code: 'import * as styles from "./button.style";',
        },
        {
            name: "namespace import from .styles path",
            code: 'import * as styles from "./button.styles";',
        },
        {
            name: "side-effect style import is allowed",
            code: 'import "./button.styles";',
        },
        {
            name: "non-style import can use named import",
            code: 'import { Button } from "./button";',
        },
        {
            name: "type namespace import from .styles path",
            code: 'import type * as styles from "./button.styles";',
        },
        {
            name: "type named import from .styles path is ignored",
            code: 'import type { MainStyleProps } from "./button.styles";',
        },
        {
            name: "parent-dir style import is ignored",
            code: 'import { Main } from "../button.styles";',
        },
        {
            name: "nested style import is ignored",
            code: 'import { Main } from "./styles/button.styles";',
        },
        {
            name: "named import from .style path is ignored",
            code: 'import { Main } from "./button.style";',
        },
    ],
    invalid: [
        {
            name: "default import from .styles path is rejected",
            code: 'import styles from "./button.styles";',
            output: 'import * as styles from "./button.styles";',
            errors: [{ messageId: "namespaceStyleImport" }],
        },
        {
            name: "default + namespace import is reduced to namespace only",
            code: 'import buttonStyle, * as styles from "./button.styles";',
            output: 'import * as styles from "./button.styles";',
            errors: [{ messageId: "namespaceStyleImport" }],
        },
    ],
});
