// AUTO-GENERATED — do not edit manually.
// Source: src/tab/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const TabItemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "title",
                description: "The tab selector label.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "children",
                description: "The content of the Tab.Item.",
                propTypes: ["JSX.Element", "JSX.Element[]"],
                mandatory: true,
            },
            {
                name: "titleAddon",
                description:
                    "Custom addon content displayed next to the tab title",
                propTypes: ["TitleAddonProps"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
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
                name: "width",
                description: "The tab selector width.",
                propTypes: ["string"],
            },
        ],
    },
];

export const TitleAddonPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "content",
                description: "addon content",
                propTypes: ["JSX.Element"],
                mandatory: true,
            },
            {
                name: "position",
                description:
                    'position of the addon content, defaults to "right"',
                propTypes: ['"left"', '"right"'],
            },
        ],
    },
];
