import tsParser from "@typescript-eslint/parser";
import { RuleTester } from "eslint";

import localRules from "../../eslint-local-rules/import-path-preferences.mjs";

const rule = localRules.rules["import-path-preferences"];
const styleNamespaceImportRule = localRules.rules["style-namespace-import"];

const ruleTester = new RuleTester({
    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",
    },
});

ruleTester.run("import-path-preferences", rule, {
    valid: [
        {
            name: "stories can import from src alias",
            filename: "/repo/stories/accordion/accordion.stories.tsx",
            code: 'import { Accordion } from "src/accordion";',
        },
        {
            name: "stories can import from stories/storybook-common alias",
            filename: "/repo/stories/shared/props-table.tsx",
            code: 'import { ApiTable } from "stories/storybook-common/api-table";',
        },
        {
            name: "tests can import from src alias",
            filename: "/repo/tests/accordion/accordion.spec.tsx",
            code: 'import { Accordion } from "src/accordion";',
        },
        {
            name: "src files can use relative imports",
            filename: "/repo/src/popover/popover.tsx",
            code: 'import { Card } from "../card";',
        },
        {
            name: "nextjs app can import from package alias",
            filename:
                "/repo/e2e/nextjs-app/src/app/components/example/basic.e2e.tsx",
            code: 'import { Example } from "@lifesg/react-design-system/example";',
        },
        {
            name: "external package imports are untouched",
            filename: "/repo/src/button/button.tsx",
            code: 'import React from "react";',
        },
    ],
    invalid: [
        {
            name: "stories relative src path is fixed to src alias",
            filename: "/repo/stories/accordion/accordion.stories.tsx",
            code: 'import { Accordion } from "../../src/accordion";',
            output: 'import { Accordion } from "src/accordion";',
            errors: [{ messageId: "storiesSrc" }],
        },
        {
            name: "stories bare relative src infers component path",
            filename: "/repo/stories/accordion/accordion.stories.tsx",
            code: 'import { Accordion } from "../../src";',
            output: 'import { Accordion } from "src/accordion";',
            errors: [{ messageId: "storiesSrc" }],
        },
        {
            name: "stories bare relative src falls back to src when ambiguous",
            filename: "/repo/stories/unknown/unknown.stories.tsx",
            code: 'import { DefinitelyMissingComponent } from "../../src";',
            output: 'import { DefinitelyMissingComponent } from "src";',
            errors: [{ messageId: "storiesSrc" }],
        },
        {
            name: "stories relative storybook-common path is fixed",
            filename: "/repo/stories/badge/props-table.tsx",
            code: 'import { ApiTable } from "../storybook-common/api-table";',
            output: 'import { ApiTable } from "stories/storybook-common/api-table";',
            errors: [{ messageId: "storiesStorybookCommon" }],
        },
        {
            name: "tests relative src path is fixed to src alias",
            filename: "/repo/tests/tag/tag.spec.tsx",
            code: 'import { Tag } from "../../src/tag";',
            output: 'import { Tag } from "src/tag";',
            errors: [{ messageId: "testsSrc" }],
        },
        {
            name: "src alias path is fixed to relative import",
            filename: "/repo/src/popover/popover.tsx",
            code: 'import { Card } from "src/card";',
            output: 'import { Card } from "../card";',
            errors: [{ messageId: "srcRelative" }],
        },
        {
            name: "nextjs relative src path is fixed to package import",
            filename:
                "/repo/e2e/nextjs-app/src/app/components/example/basic.e2e.tsx",
            code: 'import { Example } from "../../../src/example";',
            output: 'import { Example } from "@lifesg/react-design-system/example";',
            errors: [{ messageId: "nextjsPackage" }],
        },
        {
            name: "nextjs bare relative src is fixed to package root import",
            filename:
                "/repo/e2e/nextjs-app/src/app/components/example/basic.e2e.tsx",
            code: 'import * as DesignSystem from "../../../src";',
            output: 'import * as DesignSystem from "@lifesg/react-design-system";',
            errors: [{ messageId: "nextjsPackage" }],
        },
    ],
});

ruleTester.run("style-namespace-import", styleNamespaceImportRule, {
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
