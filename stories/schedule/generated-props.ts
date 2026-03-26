// AUTO-GENERATED — do not edit manually.
// Source: src/schedule/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

export const SchedulePropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description: "Unique identifier for the component.",
                propTypes: ["string"],
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
                name: "view",
                description: "The view mode for the schedule component.",
                propTypes: ["ScheduleView"],
                defaultValue: '"day"',
            },
            {
                name: "date",
                description: "The current displayed date in YYYY-MM-DD format.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "emptyContentMessage",
                description:
                    "The message to render when there is no content (i.e. when `serviceData=[]`).",
                propTypes: ["string"],
            },
            {
                name: "serviceData",
                description:
                    "The data used to render each service with their time slots.",
                propTypes: ["ScheduleEntityProps[]"],
                mandatory: true,
            },
            {
                name: "loading",
                description:
                    "The loading toggle to render the loading animation.",
                propTypes: ["boolean"],
                defaultValue: "false",
            },
            {
                name: "minTime",
                description: "The start time of this schedule in HH:mm format.",
                propTypes: ["string"],
                defaultValue: '"00:00"',
            },
            {
                name: "maxTime",
                description: "The end time of this schedule in HH:mm format.",
                propTypes: ["string"],
                defaultValue: '"23:59"',
            },
            {
                name: "initialScrollTime",
                description:
                    "The initial scroll position time in HH:mm format. Defaults to minTime if not provided.",
                propTypes: ["string"],
            },
            {
                name: "minDate",
                description:
                    "The minimum date allowed for navigation in YYYY-MM-DD format (inclusive).",
                propTypes: ["string"],
            },
            {
                name: "maxDate",
                description:
                    "The maximum date allowed for navigation in YYYY-MM-DD format (inclusive).",
                propTypes: ["string"],
            },
            {
                name: "onPreviousDayClick",
                description:
                    "The callback function to trigger when the left arrow has been clicked on the date navigator component.",
                propTypes: ["(currentDate: string) => void"],
                mandatory: true,
            },
            {
                name: "onNextDayClick",
                description:
                    "The callback function to trigger when the right arrow has been clicked on the date navigator component.",
                propTypes: ["(currentDate: string) => void"],
                mandatory: true,
            },
            {
                name: "onCalendarDateSelect",
                description:
                    "The callback function to trigger when a calendar date has been picked in the dropdown calendar.",
                propTypes: ["(currentDate: string) => void"],
                mandatory: true,
            },
            {
                name: "onTodayClick",
                description:
                    "The callback function to trigger when the today button is clicked.",
                propTypes: ["() => void"],
                mandatory: true,
            },
            {
                name: "onEmptySlotClick",
                description:
                    "The callback function to trigger when an empty slot has been clicked.",
                propTypes: [
                    "((slot: ScheduleEmptySlotProps) => void) | undefined",
                ],
            },
            {
                name: "emptySlotPopover",
                description:
                    "Provides a custom popover configuration for a given empty slot.",
                propTypes: [
                    "",
                    "((slot: ScheduleEmptySlotProps) => SchedulePopoverProps)\n        | undefined",
                ],
            },
            {
                name: "blockedMessage",
                description:
                    'Custom message to display for blocked slots instead of the default "Unavailable" text.',
                propTypes: ["string"],
                defaultValue: '"Unavailable"',
            },
            {
                name: "onClickHiddenSlots",
                description:
                    "The callback function to trigger when hidden slots button is clicked in week view. Provides the list of hidden service names for the clicked interval.",
                propTypes: ["((hiddenServices: string[]) => void) | undefined"],
            },
        ],
    },
];

export const ScheduleEntityPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description: "The identifier for this service entity.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "name",
                description: "The name of the service or resource.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "slots",
                description:
                    "The array of time slots for this service. Each slot represents a bookable time period with its availability status.",
                propTypes: ["ScheduleSlotProps[]"],
                mandatory: true,
            },
        ],
    },
];

export const SchedulePopoverPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "trigger",
                description: "The interaction to trigger the popover.",
                propTypes: ["PopoverV2TriggerType"],
                mandatory: true,
            },
            {
                name: "content",
                description: "The content to be rendered within the popover.",
                propTypes: ["string", "JSX.Element", "(() => React.ReactNode)"],
                mandatory: true,
            },
            {
                name: "delay",
                description:
                    "The delay for the popover to appear upon hover in milliseconds. Note: only applies for `hover` trigger type.",
                propTypes: ["{ open?: number; close?: number }"],
            },
            {
                name: "offset",
                description:
                    "How much offset (in px) to apply for the popover.",
                propTypes: ["number"],
            },
        ],
    },
];

export const ScheduleSlotPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "id",
                description:
                    "The identifier for this cell. Useful for the `onClick` callback since `ScheduleSlotProps` is passed to it.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "startTime",
                description: "The starting time of this cell in HH:mm format.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "endTime",
                description: "The ending time of this cell in HH:mm format.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "status",
                description:
                    "The status of this cell, which determines the style it will be rendered in.",
                propTypes: ["ScheduleCellType"],
                mandatory: true,
            },
            {
                name: "capacity",
                description: "The maximum capacity for this timeslot.",
                propTypes: ["number"],
            },
            {
                name: "date",
                description: "The date for this timeslot in YYYY-MM-DD format.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "booked",
                description:
                    "The number of current bookings for this timeslot.",
                propTypes: ["number"],
            },
            {
                name: "customPopover",
                description:
                    "The props for rendering any custom popover for the cell. Warning: ensure there is no conflict when handling `onClick` and a popover with `trigger=click`.",
                propTypes: ["SchedulePopoverProps"],
            },
            {
                name: "onClick",
                description:
                    "The callback function to trigger when a cell has been clicked.",
                propTypes: [
                    "",
                    "((data: ScheduleSlotProps, e: React.MouseEvent) => void)\n        | undefined",
                ],
            },
        ],
    },
];

export const ScheduleEmptySlotPropsData: ApiTableSectionProps[] = [
    {
        attributes: [
            {
                name: "startTime",
                description:
                    "The starting time of the empty slot in HH:mm format.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "endTime",
                description:
                    "The ending time of the empty slot in HH:mm format.",
                propTypes: ["string"],
                mandatory: true,
            },
            {
                name: "name",
                description:
                    "The name of the service associated with this empty slot.",
                propTypes: ["string"],
                mandatory: true,
            },
        ],
    },
];
