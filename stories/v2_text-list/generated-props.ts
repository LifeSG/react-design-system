// AUTO-GENERATED — do not edit manually.
// Source: src/v2_text-list/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const V2_UnorderedListPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "bulletType",
                description: 'Values: "disc" | "circle" | "square" | "none"',
                propTypes: ["V2_BulletType"],
            },
            {
                name: "children",
                description: "",
                propTypes: ["JSX.Element", "JSX.Element[]"],
                mandatory: true,
            },
            {
                name: "bottomMargin",
                description: "",
                propTypes: ["number"],
            },
            {
                name: "size",
                description: "",
                propTypes: ["V2_TextSizeType"],
            },
        ],
    },
];

export const V2_OrderedListPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "counterType",
                description:
                    'Values: "lower-alpha" | "decimal" | "lower-roman"',
                propTypes: ["V2_CounterType"],
            },
            {
                name: "counterSeparator",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "reversed",
                description: "Specifies if the list counter decrements",
                propTypes: ["boolean"],
            },
            {
                name: "start",
                description: "The value to start the list count from",
                propTypes: ["number"],
            },
            {
                name: "children",
                description: "",
                propTypes: ["JSX.Element", "JSX.Element[]"],
                mandatory: true,
            },
            {
                name: "bottomMargin",
                description: "",
                propTypes: ["number"],
            },
            {
                name: "size",
                description: "",
                propTypes: ["V2_TextSizeType"],
            },
        ],
    },
];
