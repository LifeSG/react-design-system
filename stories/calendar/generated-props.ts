// AUTO-GENERATED — do not edit manually.
// Source: src/calendar/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const CalendarSinglePropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "variant",
                description: "Specifies the calendar selection mode.",
                propTypes: ['"single"'],
                defaultValue: '"single"',
            },
            {
                name: "value",
                description: "Selected date in `YYYY-MM-DD` format",
                propTypes: ["string"],
            },
            {
                name: "onChange",
                description:
                    "Called when the selected date changes. Returns the selected date in `YYYY-MM-DD` format",
                propTypes: ["((value: string) => void) | undefined"],
            },
            {
                name: "onSelect",
                description:
                    "Called when the selected date changes. Returns the selected date in `YYYY-MM-DD` format",
                propTypes: ["((value: string) => void) | undefined"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "styleType",
                description:
                    "Specifies if the component should have a border around it. Values `no-border` | `bordered`",
                propTypes: ['"no-border"', '"bordered"'],
            },
            {
                name: "onHover",
                description:
                    "Called when day cell is hovered, returns value in `YYYY-MM-DD`",
                propTypes: ["((value: string) => void) | undefined"],
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
                propTypes: ["interface Calendar"],
            },
            {
                name: "maxDate",
                description:
                    "The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.",
                propTypes: ["ndefined;\n    /** T"],
            },
            {
                name: "disabledDates",
                description:
                    'Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`',
                propTypes: ["ntifier for the compo"],
            },
            {
                name: "allowDisabledSelection",
                description:
                    "Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable",
                propTypes: ['styleType?: "no-bor'],
            },
            {
                name: "showActiveMonthDaysOnly",
                description:
                    "Specifies if the calendar should display only dates for the selected month",
                propTypes: [": ((value: string) ="],
            },
        ],
    },
];

export const CalendarMultiPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "variant",
                description: "Specifies the calendar selection mode.",
                propTypes: ['"multi"'],
                mandatory: true,
            },
            {
                name: "values",
                description: "Selected dates in `YYYY-MM-DD` format",
                propTypes: ["string[]"],
            },
            {
                name: "minSelectable",
                description: "Minimum number of dates that must be selected",
                propTypes: ["number"],
            },
            {
                name: "maxSelectable",
                description: "Maximum number of dates that can be selected",
                propTypes: ["number"],
            },
            {
                name: "onChange",
                description:
                    "Called when the selection changes. Returns all selected dates in `YYYY-MM-DD` format",
                propTypes: ["((values: string[]) => void) | undefined"],
            },
            {
                name: "className",
                description: "CSS class name for custom styling.",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for automated testing.",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
            },
            {
                name: "styleType",
                description:
                    "Specifies if the component should have a border around it. Values `no-border` | `bordered`",
                propTypes: ['"no-border"', '"bordered"'],
            },
            {
                name: "onHover",
                description:
                    "Called when day cell is hovered, returns value in `YYYY-MM-DD`",
                propTypes: ["((value: string) => void) | undefined"],
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
                propTypes: ["interface Calendar"],
            },
            {
                name: "maxDate",
                description:
                    "The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.",
                propTypes: ["ndefined;\n    /** T"],
            },
            {
                name: "disabledDates",
                description:
                    'Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`',
                propTypes: ["ntifier for the compo"],
            },
            {
                name: "allowDisabledSelection",
                description:
                    "Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable",
                propTypes: ['styleType?: "no-bor'],
            },
            {
                name: "showActiveMonthDaysOnly",
                description:
                    "Specifies if the calendar should display only dates for the selected month",
                propTypes: [": ((value: string) ="],
            },
        ],
    },
];
