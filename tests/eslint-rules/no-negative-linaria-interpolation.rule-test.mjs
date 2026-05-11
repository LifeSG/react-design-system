import tsParser from "@typescript-eslint/parser";
import { RuleTester } from "eslint";

import localRules from "../../eslint-local-rules/index.mjs";

const noNegativeLinariaInterpolationRule =
    localRules.rules["no-negative-linaria-interpolation"];

const ruleTester = new RuleTester({
    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",
    },
});

ruleTester.run(
    "no-negative-linaria-interpolation",
    noNegativeLinariaInterpolationRule,
    {
        valid: [
            {
                name: "negative value allowed",
                filename: "/repo/src/button/button.styles.ts",
                code: `import { css } from "@linaria/core";

export const box = css\`
    padding: -8px;
\`;
`,
            },
            {
                name: "positive interpolation is allowed",
                filename: "/repo/src/button/button.styles.ts",
                code: `import { css } from "@linaria/core";

const spacing = "8px";

export const box = css\`
    padding: \${spacing};
\`;
`,
            },
            {
                name: "calc negative interpolation is allowed",
                filename: "/repo/src/button/button.styles.ts",
                code: `import { css } from "@linaria/core";

const spacing = "8px";

export const box = css\`
    margin-left: calc(\${spacing} * -1);
\`;
`,
            },
            {
                name: "subtraction interpolation in calc is allowed",
                filename: "/repo/src/button/button.styles.ts",
                code: `import { css } from "@linaria/core";

const spacing = "8px";

export const box = css\`
    max-width: calc(100% - \${spacing});
\`;
`,
            },
            {
                name: "multiple chained subtractions in calc are allowed",
                filename: "/repo/src/button/button.styles.ts",
                code: `import { css } from "@linaria/core";

const a = "8px";
const b = "4px";

export const box = css\`
    max-width: calc(100% - \${a} - \${b});
\`;
`,
            },
            {
                name: "non-css tagged template is ignored",
                filename: "/repo/src/button/button.styles.ts",
                code: `const spacing = "8px";

const html = String.raw\`
    margin-left: -\${spacing};
\`;
`,
            },
        ],
        invalid: [
            {
                name: "negative interpolation is rewritten to calc",
                filename: "/repo/src/button/button.styles.ts",
                code: `import { css } from "@linaria/core";

const spacing = "8px";

export const box = css\`
    margin-left: -\${spacing};
\`;
`,
                output: `import { css } from "@linaria/core";

const spacing = "8px";

export const box = css\`
    margin-left: calc(\${spacing} * -1);
\`;
`,
                errors: [{ messageId: "negativeLinariaInterpolation" }],
            },
            {
                name: "negative interpolation with spacing is rewritten to calc",
                filename: "/repo/src/button/button.styles.ts",
                code: `import { css } from "@linaria/core";

const spacing = "8px";

export const box = css\`
    margin-left: -  \${spacing};
\`;
`,
                output: `import { css } from "@linaria/core";

const spacing = "8px";

export const box = css\`
    margin-left: calc(\${spacing} * -1);
\`;
`,
                errors: [{ messageId: "negativeLinariaInterpolation" }],
            },
        ],
    }
);
