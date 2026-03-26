// AUTO-GENERATED — do not edit manually.
// Source: src/timetable/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const TimeTablePropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description: "Unique identifier for the timetable",
                propTypes: ["string"],
            },
            {
                name: "className",
                description: "Additional CSS class name",
                propTypes: ["string"],
            },
            {
                name: "data-testid",
                description: "Test identifier for testing purposes",
                propTypes: ["string"],
            },
            {
                name: "date",
                description: "The date to display in the timetable",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "emptyContentMessage",
                description: "Message to display when there is no content",
                propTypes: ["string"],
            },
            {
                name: "rowData",
                description: "Array of row data to display in the timetable",
                propTypes: ["TimeTableRowData[]"],
                mandatory: true,
            },
            {
                name: "loading",
                description: "Whether the timetable is in a loading state",
                propTypes: ["boolean"],
            },
            {
                name: "minTime",
                description:
                    "The minimum time of the timetable. Format in HH:mm",
                propTypes: ["string"],
            },
            {
                name: "maxTime",
                description:
                    "The maximum time of the timetable. Format in HH:mm",
                propTypes: ["string"],
            },
            {
                name: "initialScrollTime",
                description:
                    'Initial scroll position in HH:mm format (e.g., "09:00" will scroll to 9am on mount)',
                propTypes: ["string"],
            },
            {
                name: "minDate",
                description: "The minimum selectable date",
                propTypes: ["string"],
            },
            {
                name: "maxDate",
                description: "The maximum selectable date",
                propTypes: ["string"],
            },
            {
                name: "totalRecords",
                description: "Total number of records for pagination",
                propTypes: ["number"],
            },
            {
                name: "showCurrentDateAsToday",
                description: 'Whether to display the current date as "Today"',
                propTypes: ["boolean"],
            },
            {
                name: "showDateAsShortForm",
                description: "Whether to display the date in short form",
                propTypes: ["boolean"],
            },
            {
                name: "roundInitialScrollTime",
                description:
                    "Rounds initial scroll time to the nearest interval, e.g 6:30 will be clamped to 6:00 when interval = 60. Default is true",
                propTypes: ["boolean"],
            },
            {
                name: "onRefresh",
                description:
                    "Callback function when the refresh button is clicked",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onPage",
                description: "Callback function for pagination",
                propTypes: ["(() => void) | undefined"],
            },
            {
                name: "onPreviousDayClick",
                description:
                    "Callback function when the previous day button is clicked",
                propTypes: ["(currentDate: string) => void"],
                mandatory: true,
            },
            {
                name: "onNextDayClick",
                description:
                    "Callback function when the next day button is clicked",
                propTypes: ["(currentDate: string) => void"],
                mandatory: true,
            },
            {
                name: "onCalendarDateSelect",
                description:
                    "Callback function when a date is selected from the calendar",
                propTypes: ["((currentDate: string) => void) | undefined"],
            },
        ],
    },
];

export const TimeTablePopoverPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "trigger",
                description: "The trigger type for showing the popover",
                propTypes: ["PopoverV2TriggerType"],
                mandatory: true,
            },
            {
                name: "content",
                description: "The content to display in the popover",
                propTypes: ["string", "JSX.Element", "(() => React.ReactNode)"],
                mandatory: true,
            },
            {
                name: "delay",
                description:
                    "Delay in milliseconds before opening/closing the popover",
                propTypes: [
                    "",
                    "{ open?: number | undefined; close?: number | undefined }",
                ],
            },
            {
                name: "offset",
                description:
                    "Offset distance of the popover from the trigger element",
                propTypes: ["number"],
            },
        ],
    },
];
