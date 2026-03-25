// AUTO-GENERATED — do not edit manually.
// Source: src/masked-input/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const MaskAttributePropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "maskRange",
                description:
                    "Index range [start, end] of characters to mask. Takes precedence over `unmaskRange` when both are set.",
                propTypes: ["number[]"],
            },
            {
                name: "unmaskRange",
                description:
                    "Index range [start, end] of characters to leave unmasked.",
                propTypes: ["number[]"],
            },
            {
                name: "maskRegex",
                description:
                    "Regular expression used to determine which characters to mask.",
                propTypes: ["RegExp"],
            },
            {
                name: "maskTransformer",
                description:
                    "Custom function to transform and produce the displayed masked string.",
                propTypes: ["((value: string) => string) | undefined"],
            },
            {
                name: "maskChar",
                description: "Character substituted for each masked character.",
                propTypes: ["string"],
                defaultValue: '"•"',
            },
        ],
    },
];
