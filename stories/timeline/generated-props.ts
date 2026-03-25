// AUTO-GENERATED — do not edit manually.
// Source: src/timeline/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

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
