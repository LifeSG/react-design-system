// AUTO-GENERATED — do not edit manually.
// Source: src/input/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const InputPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "spacing",
                description:
                    "Sets the number of characters before a space is inserted automatically. Only applies to inputs of type `tel`.",
                propTypes: ["number"],
            },
            {
                name: "error",
                description:
                    "Applies error styling to indicate an invalid value.",
                propTypes: ["boolean"],
            },
            {
                name: "allowClear",
                description:
                    "Shows a clear (×) button inside the field when the field has a value.",
                propTypes: ["boolean"],
            },
            {
                name: "onClear",
                description: "Called when the clear button is clicked.",
                propTypes: ["() => void | undefined"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "styleType",
                description: "Visual style variant for the field border.",
                propTypes: ["InputStyleType"],
                defaultValue: '"bordered"',
            },
        ],
    },
];
