// AUTO-GENERATED — do not edit manually.
// Source: src/tab/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const TabPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "children",
                description:
                    "The tab contents. The tab order is determined by the specification of the child items.",
                propTypes: ["JSX.Element", "JSX.Element[]"],
                mandatory: true,
            },
            {
                name: "initialActive",
                description:
                    "Specify the initial tab index that is to be displayed",
                propTypes: ["number"],
            },
            {
                name: "currentActive",
                description:
                    "Specify the current tab index that is to be displayed. By specifying this prop, the tab rendering will be manually controlled by you",
                propTypes: ["number"],
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
                name: "onTabClick",
                description: "Called when a tab item selector is clicked.",
                propTypes: [
                    "((title: string, index: number) => void) | undefined",
                ],
            },
            {
                name: "fullWidthIndicatorLine",
                description:
                    "Extends the bottom border to the full width of the container.",
                propTypes: ["boolean"],
            },
            {
                name: "fadeColor",
                description:
                    "The color of the fade effect when the tab is too long.",
                propTypes: ["string[]", "FadeColorSet"],
            },
        ],
    },
];

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
