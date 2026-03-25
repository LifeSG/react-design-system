// AUTO-GENERATED — do not edit manually.
// Source: src/histogram-slider/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

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
