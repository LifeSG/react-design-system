// AUTO-GENERATED — do not edit manually.
// Source: src/histogram-slider/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const HistogramSliderPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
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
                name: "bins",
                description:
                    "Array of histogram bins defining the bar heights and their lower boundary values.",
                propTypes: ["HistogramBinProps[]"],
                mandatory: true,
            },
            {
                name: "interval",
                description:
                    "The width of each bin (the numeric distance between adjacent `minValue` boundaries).",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "disabled",
                description:
                    "Disables interaction with the slider when `true`.",
                propTypes: ["boolean"],
            },
            {
                name: "readOnly",
                description:
                    "Renders the slider in a non-interactive read-only state.",
                propTypes: ["boolean"],
            },
            {
                name: "value",
                description: "The selected range in the format `[start, end]`.",
                propTypes: ["[number, number]"],
            },
            {
                name: "showRangeLabels",
                description:
                    "Shows numeric range labels below the slider thumbs.",
                propTypes: ["boolean"],
            },
            {
                name: "rangeLabelPrefix",
                description: "Text prepended to each range label value.",
                propTypes: ["string"],
            },
            {
                name: "rangeLabelSuffix",
                description: "Text appended to each range label value.",
                propTypes: ["string"],
            },
            {
                name: "ariaLabels",
                description:
                    "Accessible labels for the two slider thumbs in the format `[startLabel, endLabel]`.",
                propTypes: ["[string, string]"],
            },
            {
                name: "aria-labelledby",
                description:
                    "ID of an external element that labels the slider (WAI-ARIA).",
                propTypes: ["string"],
            },
            {
                name: "aria-describedby",
                description:
                    "ID of an external element that describes the slider (WAI-ARIA).",
                propTypes: ["string"],
            },
            {
                name: "renderRangeLabel",
                description:
                    "Custom renderer for range label text. Receives the numeric value and returns a React node.",
                propTypes: ["((value: number) => React.ReactNode) | undefined"],
            },
            {
                name: "onChange",
                description:
                    "Called on every selection change. Returns the updated range as `[start, end]`.",
                propTypes: ["((value: [number, number]) => void) | undefined"],
            },
            {
                name: "onChangeEnd",
                description:
                    "Called when a thumb is released after selection is complete. Returns the final range as `[start, end]`.",
                propTypes: ["((value: [number, number]) => void) | undefined"],
            },
            {
                name: "renderEmptyView",
                description:
                    "Custom renderer for the empty/zero-data state of the histogram.",
                propTypes: ["(() => React.ReactNode) | undefined"],
            },
        ],
    },
];

export const HistogramBinPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "count",
                description:
                    "The number of data points that fall within this bin.",
                propTypes: ["number"],
                mandatory: true,
            },
            {
                name: "minValue",
                description: "The lower boundary value of this bin.",
                propTypes: ["number"],
                mandatory: true,
            },
        ],
    },
];
