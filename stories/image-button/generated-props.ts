// AUTO-GENERATED — do not edit manually.
// Source: src/image-button/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const ImageButtonPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "data-testid",
                description: "The test identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "imgSrc",
                description:
                    "The URL of the image to render inside the button.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "selected",
                description: "Shows the selected highlight state when `true`.",
                propTypes: ["boolean"],
            },
            {
                name: "error",
                description: "Shows the error border state when `true`.",
                propTypes: ["boolean"],
            },
            {
                name: "focusableWhenDisabled",
                description: "",
                propTypes: ["boolean"],
            },
        ],
    },
];
