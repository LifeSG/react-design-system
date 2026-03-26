// AUTO-GENERATED — do not edit manually.
// Source: src/unit-number/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const UnitNumberInputPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "className",
                description:
                    "Additional CSS class names applied to the root element.",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "Unique HTML identifier for the root element.",
                propTypes: ["string"],
            },
            {
                name: "style",
                description: "Inline styles applied to the root element.",
                propTypes: ["React.CSSProperties"],
            },
            {
                name: "tabIndex",
                description:
                    "Tab order of the element in sequential keyboard navigation.",
                propTypes: ["number"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "readOnly",
                description:
                    "When `true`, the input is read-only and cannot be changed by the user.",
                propTypes: ["boolean"],
            },
            {
                name: "placeholder",
                description:
                    "Placeholder text displayed in the unit field when empty.",
                propTypes: ["string"],
            },
            {
                name: "role",
                description: "ARIA role applied to the root element.",
                propTypes: ["React.AriaRole"],
            },
            {
                name: "value",
                description:
                    'Controlled composite value of the unit number (e.g. `"12-34"`).',
                propTypes: ["string"],
            },
            {
                name: "name",
                description:
                    "Name attribute used when the input is part of a form.",
                propTypes: ["string"],
            },
            {
                name: "error",
                description:
                    "Applies error styling to indicate an invalid value.",
                propTypes: ["boolean"],
            },
            {
                name: "disabled",
                description:
                    "When `true`, the input is disabled and cannot be interacted with.",
                propTypes: ["boolean"],
            },
            {
                name: "autoComplete",
                description: "HTML autocomplete hint for the browser.",
                propTypes: ["string"],
            },
            {
                name: "onChange",
                description:
                    'Called when the composite value changes. Returns the combined value string (e.g. `"12-34"`).',
                propTypes: ["((value: string) => void) | undefined"],
            },
            {
                name: "onChangeRaw",
                description:
                    "Function that returns the raw values in the UnitNumberInput on change in an array format as such [floor, unit]",
                propTypes: ["((value: string[]) => void) | undefined"],
            },
            {
                name: "onBlur",
                description:
                    'Called when the field loses focus. Returns the combined value string (e.g. `"12-34"`).',
                propTypes: ["((value: string) => void) | undefined"],
            },
            {
                name: "onBlurRaw",
                description:
                    "Function that returns the raw values in the UnitNumberInput on blur in an array format as such [floor, unit]",
                propTypes: ["((value: string[]) => void) | undefined"],
            },
        ],
    },
];
