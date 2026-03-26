// AUTO-GENERATED — do not edit manually.
// Source: src/progress-indicator/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const ProgressIndicatorPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "steps",
                description: "The ordered list of step items.",
                propTypes: ["T[]"],
                mandatory: true,
            },
            {
                name: "currentIndex",
                description:
                    "The zero-based index of the currently active step.",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "fadeColor",
                description: "",
                propTypes: ["string[]"],
            },
            {
                name: "fadePosition",
                description: "",
                propTypes: ["FadePosition"],
            },
            {
                name: "displayExtractor",
                description:
                    "Function to derive the display label from a step item. Defaults to using the item directly as a string.",
                propTypes: ["((item: T) => string) | undefined"],
            },
            {
                name: "className",
                description: "CSS class selector for the component.",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "The unique id attribute of the component.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "The test identifier for the component.",
                propTypes: ["string"],
            },
        ],
    },
];
