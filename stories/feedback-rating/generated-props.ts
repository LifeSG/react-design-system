// AUTO-GENERATED — do not edit manually.
// Source: src/feedback-rating/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const FeedbackRatingPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "imgSrc",
                description:
                    "The `src` of the banner image displayed above the rating stars. Pass an empty string to hide the default banner.",
                propTypes: ["string"],
                defaultValue: "Default banner image",
            },
            {
                name: "description",
                description:
                    "The prompt text displayed above the star buttons.",
                propTypes: ["string"],
                defaultValue: '"Rate your experience"',
            },
            {
                name: "buttonLabel",
                description: "The label text for the submit button.",
                propTypes: ["string"],
                defaultValue: '"Submit"',
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
            {
                name: "rating",
                description: "The currently selected rating value (1–5).",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "onRatingChange",
                description:
                    "Called when the user clicks a star to change the rating.",
                propTypes: ["(value: number) => void"],
                mandatory: true,
            },
            {
                name: "onSubmit",
                description: "Called when the user clicks the submit button.",
                propTypes: ["() => void"],
                mandatory: true,
            },
        ],
    },
];
