// AUTO-GENERATED — do not edit manually.
// Source: src/timeline/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const TimelinePropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "items",
                description: "The items to be displayed.",
                propTypes: ["TimelineItemProps[]"],
                mandatory: true,
            },
            {
                name: "title",
                description: "The text title of the Timeline.",
                propTypes: ["string"],
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
                name: "startCol",
                description:
                    "The column at which the items should start at (useful if component is wrapped in a CSS grid div).",
                propTypes: ["number"],
            },
            {
                name: "colSpan",
                description:
                    "The number of columns that the component should span (useful if component is wrapped in a CSS grid div).",
                propTypes: ["number"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "data-base-indicator-testid",
                description: "Test identifier for the component's indicators.",
                propTypes: ["string"],
            },
            {
                name: "headingLevel",
                description:
                    "Specify a custom heading level to match the component's position in the page.",
                propTypes: ["number"],
            },
            {
                name: "counterOffset",
                description:
                    "The offset for the numeric indicators. If offset = 2, the start of the timeline will be index + 1 + offset = 3.",
                propTypes: ["number"],
                defaultValue: "0",
            },
        ],
    },
];

export const TimelineItemPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "title",
                description: "The title of the item.",
                propTypes: ["string", "JSX.Element"],
                mandatory: true,
            },
            {
                name: "content",
                description:
                    "The content of the item. Formatting within the content is to be handled by the consumer.",
                propTypes: ["string", "JSX.Element"],
                mandatory: true,
            },
            {
                name: "statuses",
                description:
                    "The status pills to be rendered. Note that only a maximum of 2 pills will be rendered.",
                propTypes: ["PillProps[]"],
            },
            {
                name: "variant",
                description:
                    'The style variant of the item indicator. The first item defaults to "current", subsequent items default to "upcoming-active".',
                propTypes: ["Variant"],
            },
        ],
    },
];
