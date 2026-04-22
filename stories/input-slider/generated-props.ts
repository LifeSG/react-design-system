// AUTO-GENERATED — do not edit manually.
// Source: src/input-slider/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const InputSliderPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "value",
                description: "The current selected value.",
                propTypes: ["number"],
            },
            {
                name: "ariaLabel",
                description: "The accessible label for the slider thumb.",
                propTypes: ["string"],
            },
            {
                name: "onChange",
                description:
                    "Called on every value change while the thumb is being dragged.",
                propTypes: ["((value: number) => void) | undefined"],
            },
            {
                name: "onChangeEnd",
                description:
                    "Called once when the thumb is released after dragging completes.",
                propTypes: ["((value: number) => void) | undefined"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["thumb range slider"],
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["Slider min={0} max="],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["words knob, scrubbe"],
            },
            {
                name: "min",
                description: "The minimum value of the slider range.",
                propTypes: ["rt interface InputS"],
            },
            {
                name: "max",
                description: "The maximum value of the slider range.",
                propTypes: ["nt selected value."],
            },
            {
                name: "step",
                description: "The interval between the prev and next value",
                propTypes: ["ned;\n    /**\n     *"],
            },
            {
                name: "disabled",
                description: "Disables user interaction with the component.",
                propTypes: ["ned\n     */\n    aria"],
            },
            {
                name: "readOnly",
                description:
                    "Makes the component read-only, preventing user input.",
                propTypes: ["thumb is being drag"],
            },
            {
                name: "colors",
                description:
                    "Customise the color of each track segment. Expected length is (number of values + 1)",
                propTypes: ["", "undefined;\n    /**\n     * Called once"],
            },
            {
                name: "showSliderLabels",
                description:
                    "Whether to show labels below each thumb on the slider track.",
                propTypes: ["ric value.\n     */"],
            },
            {
                name: "sliderLabelPrefix",
                description: "Prefix string prepended to each slider label.",
                propTypes: [""],
            },
            {
                name: "sliderLabelSuffix",
                description: "Suffix string appended to each slider label.",
                propTypes: [""],
            },
            {
                name: "showIndicatorLabel",
                description:
                    "Whether to show a floating label above the active thumb indicating its current value.",
                propTypes: [""],
            },
            {
                name: "indicatorLabelPrefix",
                description: "Prefix string prepended to the indicator label.",
                propTypes: [""],
            },
            {
                name: "indicatorLabelSuffix",
                description: "Suffix string appended to the indicator label.",
                propTypes: [""],
            },
            {
                name: "renderSliderLabel",
                description: "Custom render function for slider track labels.",
                propTypes: [""],
            },
        ],
    },
];
