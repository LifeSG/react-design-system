// AUTO-GENERATED — do not edit manually.
// Source: src/typography/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const TypographyPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "weight",
                description: "The font weight",
                propTypes: ["TypographyWeight"],
            },
            {
                name: "inline",
                description: "Specifies if text is displayed inline",
                propTypes: ["boolean"],
            },
            {
                name: "paragraph",
                description: "Specifies if text has a bottom margin",
                propTypes: ["boolean"],
            },
            {
                name: "maxLines",
                description:
                    "Specify the number of lines visible, the additional lines will be truncated",
                propTypes: ["number"],
            },
        ],
    },
];

export const TypographyLinkPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "weight",
                description: "The font weight",
                propTypes: ["TypographyWeight"],
            },
            {
                name: "external",
                description:
                    "Displays indicator to signal that link leads to an external site",
                propTypes: ["boolean"],
            },
            {
                name: "underlineStyle",
                description:
                    "Toggle text decoration for hyperlinks, underline by default",
                propTypes: ["TypographyUnderlineStyle"],
            },
        ],
    },
];
