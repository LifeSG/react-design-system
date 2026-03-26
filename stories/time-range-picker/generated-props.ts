// AUTO-GENERATED — do not edit manually.
// Source: src/time-range-picker/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const TimeRangePickerPropsData: ApiTableSectionProps[] = [
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
                name: "aria-labelledby",
                description:
                    "References the id of the element that labels this picker.",
                propTypes: ["string"],
            },
            {
                name: "aria-describedby",
                description:
                    "References the id of the element that describes this picker.",
                propTypes: ["string"],
            },
            {
                name: "aria-invalid",
                description:
                    "Indicates whether the picker's current value is invalid.",
                propTypes: ["boolean"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "value",
                description:
                    'An object with `start` and `end` values as an empty string or a string based format. 24 hour uses "hh:mm" e.g. `{ start: "13:00", end: "14:00" }` 12 hour uses "hh:mmA" e.g. `{ start: "01:00PM", end: "02:00PM" }` Note: combobox variant uses "h:mma" instead.',
                propTypes: ["TimeRangePickerValue"],
            },
            {
                name: "format",
                description:
                    "The time input format in `12hr` or `24hr`. Defaults to `24hr`",
                propTypes: ["TimeRangePickerFormat"],
            },
            {
                name: "disabled",
                description:
                    "When `true`, all inputs are disabled and cannot be interacted with.",
                propTypes: ["boolean"],
            },
            {
                name: "readOnly",
                description:
                    "When `true`, all inputs are read-only and cannot be changed by the user.",
                propTypes: ["boolean"],
            },
            {
                name: "error",
                description:
                    "Applies error styling to indicate an invalid value.",
                propTypes: ["boolean"],
            },
            {
                name: "variant",
                description: "Specifies the variant for the time range picker",
                propTypes: ["TimeRangePickerVariant"],
            },
            {
                name: "interval",
                description:
                    "Specifies the interval (minutes) between each dropdown option",
                propTypes: ["number"],
            },
            {
                name: "startLimit",
                description:
                    "Specifies the starting time for the dropdown options",
                propTypes: ["string"],
            },
            {
                name: "endLimit",
                description:
                    "Specifies the ending time for the dropdown options",
                propTypes: ["string"],
            },
            {
                name: "alignment",
                description:
                    "Specifies the alignment of the dropdown to the left or right of the reference element",
                propTypes: ["DropdownAlignmentType"],
            },
            {
                name: "dropdownZIndex",
                description: "Specifies the z-index of the dropdown element",
                propTypes: ["number"],
            },
            {
                name: "dropdownRootNode",
                description:
                    "Use this when the parent container has a higher z-index and the dropdown would otherwise be hidden.",
                propTypes: ["RefObject<HTMLElement>"],
            },
            {
                name: "onChange",
                description:
                    'Called when a selection is made. Returns an object with `start` and `end` values as an empty string or a string based format. 24 hour returns "hh:mm" e.g. `{ start: "13:00", end: "14:00" }` 12 hour returns "hh:mmA" e.g. `{ start: "01:00PM", end: "02:00PM" }`',
                propTypes: [
                    "((value: TimeRangePickerValue) => void) | undefined",
                ],
            },
            {
                name: "onFocus",
                description: "Called when the field is focused",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onBlur",
                description: "Called when a defocus is made on the field",
                propTypes: ["(() => void) | undefined"],
            },
        ],
    },
];
