// AUTO-GENERATED — do not edit manually.
// Source: src/time-slot-week-view/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const TimeSlotWeekViewPropsData: ApiTableSectionProps[] = [
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
                name: "value",
                description:
                    "The value of the selected date in YYYY-MM-DD format",
                propTypes: ["string"],
            },
            {
                name: "slots",
                description: "Time slots to render",
                propTypes: ["{ [date: string]: TimeSlot[] }"],
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
                propTypes: ["vailability grid."],
            },
            {
                name: "maxDate",
                description:
                    "The maximum date that can be selected (inclusive) in 'YYYY-MM-DD' format.",
                propTypes: ["slots are optional"],
            },
            {
                name: "disabledDates",
                description:
                    'Dates to disable in `YYYY-MM-DD` format. Example: `["2023-04-30"]`',
                propTypes: ["``tsx\n * <TimeSlotWee"],
            },
            {
                name: "allowDisabledSelection",
                description:
                    "Specifies if dates normally disabled by `minDate`, `maxDate` and `disabledDates` are still selectable",
                propTypes: ["weekly calendar, av"],
            },
            {
                name: "showActiveMonthDaysOnly",
                description:
                    "Specifies if the calendar should display only dates for the selected month",
                propTypes: ["CalendarProps {"],
            },
        ],
    },
];
