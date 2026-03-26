// AUTO-GENERATED — do not edit manually.
// Source: src/v2_text/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const V2_TextPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "weight",
                description: "",
                propTypes: ["V2_TextWeight"],
            },
            {
                name: "inline",
                description: "",
                propTypes: ["boolean"],
            },
            {
                name: "paragraph",
                description: "This is applicable only to non-headers",
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

export const V2_TextLinkPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "weight",
                description: "",
                propTypes: ["V2_TextWeight"],
            },
            {
                name: "external",
                description: "Specifying this will add the external indicator",
                propTypes: ["boolean"],
            },
        ],
    },
];
