// AUTO-GENERATED — do not edit manually.
// Source: src/time-slot-bar-week/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const TimeSlotBarWeekPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "className",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "id",
                description: "",
                propTypes: ["string"],
            },
            {
                name: "slots",
                description: "Time slots to render",
                propTypes: ["{ [date: string]: TimeSlot[] }"],
                mandatory: true,
            },
            {
                name: "startTime",
                description:
                    "The start time of the time slot cells in HH:mm format",
                propTypes: ["string"],
            },
            {
                name: "endTime",
                description:
                    "The end time of the time slot cells in HH:mm format",
                propTypes: ["string"],
            },
            {
                name: "value",
                description:
                    "The value of the selected date in YYYY-MM-DD format",
                propTypes: ["string"],
            },
            {
                name: "interval",
                description: "Number of minutes each cell should represent",
                propTypes: ["number"],
            },
            {
                name: "variant",
                description:
                    "Variant for the timeslot cells that will be rendered",
                propTypes: ["TimeSlotCellsVariant"],
            },
            {
                name: "maxVisibleCellHeight",
                description:
                    "Maximum height (px) of the entire timeslot component before it becomes truncated",
                propTypes: ["number"],
            },
            {
                name: "showNavigationHeader",
                description:
                    "Specifies if the month/year dropdown and navigation arrows should be displayed.",
                propTypes: ["boolean"],
            },
            {
                name: "enableSelection",
                description: "Specifies if date can be selected",
                propTypes: ["boolean"],
            },
            {
                name: "currentCalendarDate",
                description:
                    "The initial date to be visible in the week view in YYYY-DD-MM format",
                propTypes: ["string"],
            },
            {
                name: "onSlotClick",
                description: "Called when user clicks on a time slot",
                propTypes: [
                    "((date: string, timeSlot: TimeSlot) => void) | undefined",
                ],
            },
            {
                name: "onChange",
                description: "Called when user clicks on a date",
                propTypes: ["((value: string) => void) | undefined"],
            },
            {
                name: "onWeekDisplayChange",
                description: "Called when the current visible week changes",
                propTypes: [
                    "((value: YearMonthWeekDisplay) => void) | undefined",
                ],
            },
            {
                name: "minDate",
                description:
                    "The minimum date that can be selected (inclusive) in 'YYYY-MM-DD' format.",
                propTypes: ["* Props for the T"],
            },
            {
                name: "maxDate",
                description:
                    "The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.",
                propTypes: ["` columns and an op"],
            },
            {
                name: "disabledDates",
                description:
                    'Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`',
                propTypes: ["*\n * @example\n * ``"],
            },
            {
                name: "allowDisabledSelection",
                description:
                    "Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable",
                propTypes: ["elect(date, slot)}"],
            },
            {
                name: "showActiveMonthDaysOnly",
                description:
                    "Specifies if the calendar should display only dates for the selected month",
                propTypes: ["interface TimeSlotB"],
            },
        ],
    },
];
