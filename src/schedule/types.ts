import { PopoverV2TriggerType } from "../popover-v2";

export type ScheduleCellType = "booked" | "available" | "blocked" | "pending";

export type ScheduleView = "day" | "week";

/**
 * Represents a service or resource entity with its associated time slots.
 *
 * @keywords schedule, entity, service, resource, slots
 */
export interface ScheduleEntityProps {
    /** The identifier for this service entity. */
    id: string;
    /** The name of the service or resource. */
    name: string;
    /** The array of time slots for this service. Each slot represents a bookable time period with its availability status. */
    slots: ScheduleSlotProps[];
}

/**
 * Configuration for a custom popover to be rendered on a schedule cell.
 *
 * @keywords schedule, popover, slot, hover, click
 */
export interface SchedulePopoverProps {
    /** The interaction to trigger the popover. */
    trigger: PopoverV2TriggerType;
    /** The content to be rendered within the popover. */
    content: string | JSX.Element | (() => React.ReactNode);
    /** The delay for the popover to appear upon hover in milliseconds. Note: only applies for `hover` trigger type. */
    delay?: { open?: number; close?: number } | undefined;
    /** How much offset (in px) to apply for the popover. */
    offset?: number | undefined;
}

/**
 * A comprehensive calendar component that supports day and week views with time
 * slots for appointment scheduling and resource management.
 *
 * @keywords schedule, calendar, slots, booking, day, week
 */
export interface ScheduleProps {
    /** Unique identifier for the component. */
    id?: string | undefined;
    /** CSS class name for custom styling. */
    className?: string | undefined;
    /** Test identifier for automated testing. */
    "data-testid"?: string | undefined;
    /** The view mode for the schedule component. @default "day" */
    view?: ScheduleView | undefined;
    /** The current displayed date in YYYY-MM-DD format. */
    date: string;
    /** The message to render when there is no content (i.e. when `serviceData=[]`). */
    emptyContentMessage?: string | undefined;
    /** The data used to render each service with their time slots. */
    serviceData: ScheduleEntityProps[];
    /** The loading toggle to render the loading animation. @default false */
    loading?: boolean | undefined;
    /** The start time of this schedule in HH:mm format. @default "00:00" */
    minTime?: string | undefined;
    /** The end time of this schedule in HH:mm format. @default "23:59" */
    maxTime?: string | undefined;
    /** The initial scroll position time in HH:mm format. Defaults to minTime if not provided. */
    initialScrollTime?: string | undefined;
    /** The minimum date allowed for navigation in YYYY-MM-DD format (inclusive). */
    minDate?: string | undefined;
    /** The maximum date allowed for navigation in YYYY-MM-DD format (inclusive). */
    maxDate?: string | undefined;
    /** The callback function to trigger when the left arrow has been clicked on the date navigator component. */
    onPreviousDayClick: (currentDate: string) => void;
    /** The callback function to trigger when the right arrow has been clicked on the date navigator component. */
    onNextDayClick: (currentDate: string) => void;
    /** The callback function to trigger when a calendar date has been picked in the dropdown calendar. */
    onCalendarDateSelect: (currentDate: string) => void;
    /** The callback function to trigger when the today button is clicked. */
    onTodayClick: () => void;
    /** The callback function to trigger when an empty slot has been clicked. */
    onEmptySlotClick?: ((slot: ScheduleEmptySlotProps) => void) | undefined;
    /** Provides a custom popover configuration for a given empty slot. */
    emptySlotPopover?:
        | ((slot: ScheduleEmptySlotProps) => SchedulePopoverProps)
        | undefined;
    /** Custom message to display for blocked slots instead of the default "Unavailable" text. @default "Unavailable" */
    blockedMessage?: string | undefined;
    /** The callback function to trigger when hidden slots button is clicked in week view. Provides the list of hidden service names for the clicked interval. */
    onClickHiddenSlots?: ((hiddenServices: string[]) => void) | undefined;
}

/**
 * Represents an individual time slot within a schedule entity.
 *
 * @keywords schedule, slot, time, booking, status, capacity
 */
export interface ScheduleSlotProps {
    /** The identifier for this cell. Useful for the `onClick` callback since `ScheduleSlotProps` is passed to it. */
    id: string;
    /** The starting time of this cell in HH:mm format. */
    startTime: string;
    /** The ending time of this cell in HH:mm format. */
    endTime: string;
    /** The status of this cell, which determines the style it will be rendered in. */
    status: ScheduleCellType;
    /** The maximum capacity for this timeslot. */
    capacity?: number | undefined;
    /** The date for this timeslot in YYYY-MM-DD format. */
    date: string | undefined;
    /** The number of current bookings for this timeslot. */
    booked?: number | undefined;
    /** The props for rendering any custom popover for the cell. Warning: ensure there is no conflict when handling `onClick` and a popover with `trigger=click`. */
    customPopover?: SchedulePopoverProps | undefined;
    /** The callback function to trigger when a cell has been clicked. */
    onClick?:
        | ((data: ScheduleSlotProps, e: React.MouseEvent) => void)
        | undefined;
}

/**
 * Represents an empty (unoccupied) time slot in the schedule.
 *
 * @keywords schedule, empty slot, time, availability
 */
export interface ScheduleEmptySlotProps {
    /** The starting time of the empty slot in HH:mm format. */
    startTime: string;
    /** The ending time of the empty slot in HH:mm format. */
    endTime: string;
    /** The name of the service associated with this empty slot. */
    name: string;
}
