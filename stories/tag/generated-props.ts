// AUTO-GENERATED — do not edit manually.
// Source: src/tag/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const TagPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "type",
                description: "The display style of the Tag.",
                propTypes: ["TagType"],
                mandatory: true,
            },
            {
                name: "colorType",
                description: "The color style of the Tag.",
                propTypes: ["TagColorType"],
                defaultValue: '"black"',
            },
            {
                name: "icon",
                description: "A component to be displayed as the icon.",
                propTypes: ["JSX.Element"],
            },
            {
                name: "iconPosition",
                description:
                    "The position of the icon relative to the label text.",
                propTypes: ['"left"', '"right"'],
                defaultValue: '"left"',
            },
            {
                name: "interactive",
                description: "Specifies if the tag is interactive.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
        ],
    },
];
