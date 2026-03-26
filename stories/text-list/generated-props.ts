// AUTO-GENERATED — do not edit manually.
// Source: src/text-list/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const UnorderedListPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "bulletType",
                description:
                    'Values: "disc" | "circle" | "square" | "none" or custom React.ReactNode icon',
                propTypes: ["BulletType", "React.ReactNode"],
            },
            {
                name: "children",
                description: "The content of the list.",
                propTypes: ["JSX.Element", "JSX.Element[]"],
                mandatory: true,
            },
            {
                name: "bottomMargin",
                description:
                    "Specifies if the list is to have a margin below (in rem with base pixel of 16).",
                propTypes: ["number"],
            },
            {
                name: "size",
                description:
                    "Font size of the list. Inherited from the parent if not specified.",
                propTypes: ["TypographySizeType"],
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
        ],
    },
];

export const OrderedListPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "counterType",
                description:
                    'Values: "lower-alpha" | "decimal" | "lower-roman"',
                propTypes: ["CounterType"],
            },
            {
                name: "counterSeparator",
                description:
                    "The separator between the counter and the text. It can be any string value specified.",
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
                description: "The content of the list.",
                propTypes: ["JSX.Element", "JSX.Element[]"],
                mandatory: true,
            },
            {
                name: "bottomMargin",
                description:
                    "Specifies if the list is to have a margin below (in rem with base pixel of 16).",
                propTypes: ["number"],
            },
            {
                name: "size",
                description:
                    "Font size of the list. Inherited from the parent if not specified.",
                propTypes: ["TypographySizeType"],
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
        ],
    },
];
