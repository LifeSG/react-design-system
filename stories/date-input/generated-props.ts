// AUTO-GENERATED — do not edit manually.
// Source: src/date-input/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const DateInputPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "className",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "dropdownRootNode",
                description:
                    "The root element that contains the dropdown element. Defaults to the document body. If the parent that contains the trigger element has a higher z-index than the dropdown, the dropdown may not be visible. Specify the parent element here instead",
                propTypes: ["RefObject<HTMLElement>"],
            },
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "readOnly",
                description: "",
                propTypes: ["boolean"],
            },
            {
                name: "hideInputKeyboard",
                description: "",
                propTypes: ["boolean"],
            },
            {
                name: "value",
                description:
                    'The value of the date input in "YYYY-MM-DD" or "YYYY-M-D" string format.',
                propTypes: ["string"],
            },
            {
                name: "error",
                description: "",
                propTypes: ["boolean"],
            },
            {
                name: "disabled",
                description: "",
                propTypes: ["boolean"],
            },
            {
                name: "withButton",
                description:
                    'Specifies if the "Done" and "Cancel" action buttons should be rendered. Is restricted to `true` on mobile viewports',
                propTypes: ["boolean"],
            },
            {
                name: "zIndex",
                description: "The z-index of the calendar dropdown",
                propTypes: ["number"],
            },
            {
                name: "onChange",
                description:
                    'Function that returns when a valid selection is made. Returns the start date in "YYYY-MM-DD" string format.',
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
            {
                name: "onYearMonthDisplayChange",
                description:
                    "Called when there is a change in the current visible month and year",
                propTypes: ["((value: YearMonthDisplay) => void) | undefined"],
            },
            {
                name: "minDate",
                description:
                    "The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.",
                propTypes: ["date picker with ca"],
            },
            {
                name: "maxDate",
                description:
                    "The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.",
                propTypes: ['lled via a `"YYYY-M'],
            },
            {
                name: "disabledDates",
                description:
                    'Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`',
                propTypes: ["ocus/blur callbacks."],
            },
            {
                name: "allowDisabledSelection",
                description:
                    "Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable",
                propTypes: ["```\n * @keywords da"],
            },
            {
                name: "showActiveMonthDaysOnly",
                description:
                    "Specifies if the calendar should display only dates for the selected month",
                propTypes: ["lendarProps {\n    //"],
            },
        ],
    },
];
