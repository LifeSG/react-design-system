// AUTO-GENERATED — do not edit manually.
// Source: src/link-list/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const LinkListPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "items",
                description: "The items to be displayed.",
                propTypes: [""],
                mandatory: true,
            },
            {
                name: "style",
                description:
                    'Specifies the text size style of the items. Values: "default" | "small"',
                propTypes: [""],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: [""],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: [""],
            },
            {
                name: "onItemClick",
                description: "Captures item clicks on a component level",
                propTypes: [""],
            },
            {
                name: "customLabels",
                description:
                    "Specifies custom labels for expand/collapse buttons.",
                propTypes: [""],
            },
            {
                name: "loadMode",
                description: "The loading mode for the data.",
                propTypes: [""],
                defaultValue: '"eager"',
            },
        ],
    },
];
