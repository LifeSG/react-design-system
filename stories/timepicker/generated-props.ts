// AUTO-GENERATED — do not edit manually.
// Source: src/timepicker/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const TimepickerPropsData: ApiTableSectionProps[] = [
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
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "value",
                description:
                    'The value of the time input in a string based format 24 hour uses "hh:mm" e.g. `"13:00"` 12 hour uses "hh:mmA" e.g. `"01:00PM"`',
                propTypes: ["string"],
            },
            {
                name: "placeholder",
                description:
                    "Placeholder text displayed when no value is selected.",
                propTypes: ["string"],
            },
            {
                name: "format",
                description:
                    "The time input format in `12hr` or `24hr`. Defaults to `24hr`",
                propTypes: ["TimepickerFormat"],
            },
            {
                name: "disabled",
                description:
                    "When `true`, the picker is disabled and cannot be interacted with.",
                propTypes: ["boolean"],
            },
            {
                name: "readOnly",
                description:
                    "When `true`, the picker is read-only and cannot be changed by the user.",
                propTypes: ["boolean"],
            },
            {
                name: "error",
                description:
                    "Applies error styling to indicate an invalid value.",
                propTypes: ["boolean"],
            },
            {
                name: "alignment",
                description:
                    "Alignment of the time selection dropdown relative to the input field.",
                propTypes: ["DropdownAlignmentType"],
            },
            {
                name: "dropdownZIndex",
                description: "CSS z-index applied to the dropdown overlay.",
                propTypes: ["number"],
            },
            {
                name: "dropdownRootNode",
                description:
                    "The root element that contains the dropdown element. Defaults to the document body. Specify when a parent container has a higher z-index and would obscure the dropdown.",
                propTypes: ["RefObject<HTMLElement>"],
            },
            {
                name: "onChange",
                description:
                    'Called when the user makes a selection and clicks on the "Confirm" button in the time selection box. Returns a string based format. 24 hour returns "hh:mm" e.g. `"13:00"` 12 hour returns "hh:mmA" e.g. `"01:00PM"`',
                propTypes: ["((value: string) => void) | undefined"],
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
