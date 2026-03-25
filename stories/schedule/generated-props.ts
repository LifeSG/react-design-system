// AUTO-GENERATED — do not edit manually.
// Source: src/schedule/types.ts
// Regenerate: npm run props:generate

import { ApiTableSectionProps } from "stories/storybook-common";

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
