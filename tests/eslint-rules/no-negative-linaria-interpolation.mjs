const noNegativeLinariaInterpolationRule =
    localRules.rules["no-negative-linaria-interpolation"];

ruleTester.run(
    "no-negative-linaria-interpolation",
    noNegativeLinariaInterpolationRule,
    {
        valid: [
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
