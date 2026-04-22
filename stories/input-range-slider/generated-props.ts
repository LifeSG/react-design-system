// AUTO-GENERATED — do not edit manually.
// Source: src/input-range-slider/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const InputRangeSliderPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "value",
                description: "The controlled value(s) of the slider thumbs.",
                propTypes: ["number[]"],
            },
            {
                name: "numOfThumbs",
                description: "The number of thumb controls",
                propTypes: ["number"],
            },
            {
                name: "minRange",
                description: "The minimum difference between values",
                propTypes: ["number"],
            },
            {
                name: "ariaLabels",
                description:
                    "Accessible labels for each thumb, one per thumb in order.",
                propTypes: ["string[]"],
            },
            {
                name: "ariaDescriptions",
                description:
                    "Accessible descriptions for each thumb, one per thumb in order.",
                propTypes: ["string[]"],
            },
            {
                name: "aria-invalid",
                description: "",
                propTypes: ["boolean"],
            },
            {
                name: "aria-labelledby",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "aria-describedby",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "onChange",
                description: "Called on every selection change",
                propTypes: ["((value: number[]) => void) | undefined"],
            },
            {
                name: "onChangeEnd",
                description:
                    "Called when a thumb is released after selection is complete",
                propTypes: ["((value: number[]) => void) | undefined"],
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
                name: "min",
                description: "The minimum value of the slider range.",
                propTypes: ["number"],
            },
            {
                name: "max",
                description: "The maximum value of the slider range.",
                propTypes: ["number"],
            },
            {
                name: "step",
                description: "The interval between the prev and next value",
                propTypes: ["number"],
            },
            {
                name: "disabled",
                description: "Disables user interaction with the component.",
                propTypes: ["boolean"],
            },
            {
                name: "readOnly",
                description:
                    "Makes the component read-only, preventing user input.",
                propTypes: ["boolean"],
            },
            {
                name: "colors",
                description:
                    "Customise the color of each track segment. Expected length is (number of values + 1)",
                propTypes: ["(CustomColor | undefined)[]"],
            },
            {
                name: "showSliderLabels",
                description:
                    "Whether to show labels below each thumb on the slider track.",
                propTypes: ["boolean"],
            },
            {
                name: "sliderLabelPrefix",
                description: "Prefix string prepended to each slider label.",
                propTypes: ["string"],
            },
            {
                name: "sliderLabelSuffix",
                description: "Suffix string appended to each slider label.",
                propTypes: ["string"],
            },
            {
                name: "showIndicatorLabel",
                description:
                    "Whether to show a floating label above the active thumb indicating its current value.",
                propTypes: ["boolean"],
            },
            {
                name: "indicatorLabelPrefix",
                description: "Prefix string prepended to the indicator label.",
                propTypes: ["string"],
            },
            {
                name: "indicatorLabelSuffix",
                description: "Suffix string appended to the indicator label.",
                propTypes: ["string"],
            },
            {
                name: "renderSliderLabel",
                description: "Custom render function for slider track labels.",
                propTypes: ["((value: number) => React.ReactNode) | undefined"],
            },
        ],
    },
];
