import type { PopoverTriggerType } from "../popover";

/**
 * Visual state of a schedule time slot.
 *
 * - `"booked"` — the slot has confirmed bookings.
 * - `"available"` — the slot is open for booking.
 * - `"blocked"` — the slot is unavailable.
 * - `"pending"` — the slot is under review or awaiting confirmation.
 */
export type ScheduleCellType = "booked" | "available" | "blocked" | "pending";

/**
 * The active layout for the schedule.
 */
export type ScheduleView = "day" | "week";

/**
 * A single entity displayed as a column or carousel item.
 */
export interface ScheduleEntityProps {
    /** Unique identifier. */
    id: string;
    /** Display name shown in the column header. */
    name: string;
    /** All time slots belonging to this service across all dates. */
    slots: ScheduleSlotProps[];
}

/**
 * Configuration for a popover attached to a schedule slot.
 */
export interface SchedulePopoverProps {
    /** Interaction type that opens the popover. */
    trigger: PopoverTriggerType;
    /** The popover body. */
    content: string | JSX.Element | (() => React.ReactNode);
    /**
     * Open and close delay in milliseconds.
     */
    delay?: { open?: number; close?: number } | undefined;
    /** Distance in pixels between the slot element and the popover. */
    offset?: number | undefined;
}

/**
 * Props for the `Schedule` component.
 */
export interface ScheduleProps {
    id?: string | undefined;
    className?: string | undefined;
    "data-testid"?: string | undefined;
    /**
     * The layout view.
     *
     * @default "day"
     *
     * @remarks `"week"` is automatically overridden to `"day"`
     * on small screens.
     */
    view?: ScheduleView | undefined;
    /**
     * The currently displayed date in `YYYY-MM-DD` format.
     * Slots are filtered to match this date in the day view.
     */
    date: string;
    /**
     * Message shown inside the empty-state illustration when `serviceData` is
     * empty.
     */
    emptyContentMessage?: string | undefined;
    /**
     * Array of service entities to render. Each entity maps to a column in the
     * week view, or to a carousel item in the day view.
     */
    serviceData: ScheduleEntityProps[];
    /**
     * When `true` the schedule renders a loading animation in place of slot
     * content.
     *
     * @default false
     */
    loading?: boolean | undefined;
    /**
     * Earliest time shown on the time axis, in `HH:mm` format.
     *
     * @default "00:00"
     */
    minTime?: string | undefined;
    /**
     * Latest time shown on the time axis, in `HH:mm` format.
     *
     * @default "23:59"
     */
    maxTime?: string | undefined;
    /**
     * Time the schedule scrolls to on first render, in `HH:mm` format.
     *
     * @remarks Falls back to `minTime` when not provided.
     */
    initialScrollTime?: string | undefined;
    /** Earliest selectable date in the calendar picker, in `YYYY-MM-DD` format. */
    minDate?: string | undefined;
    /** Latest selectable date in the calendar picker, in `YYYY-MM-DD` format. */
    maxDate?: string | undefined;
    /**
     * Called when the user navigates to the previous day.
     *
     * @param currentDate The date that was active before the navigation, in `YYYY-MM-DD` format.
     */
    onPreviousDayClick: (currentDate: string) => void;
    /**
     * Called when the user navigates to the next day.
     *
     * @param currentDate The date that was active before the navigation, in `YYYY-MM-DD` format.
     */
    onNextDayClick: (currentDate: string) => void;
    /**
     * Called when the user picks a date from the calendar popover.
     *
     * @param currentDate The selected date in `YYYY-MM-DD` format.
     */
    onCalendarDateSelect: (currentDate: string) => void;
    /** Called when the user clicks the "Today" button in the header. */
    onTodayClick: () => void;
    /**
     * Called when the user clicks a cell without any time slots in the day view.
     *
     * @param slot Details about the clicked empty slot.
     */
    onEmptySlotClick?: ((slot: ScheduleEmptySlotProps) => void) | undefined;
    /**
     * When provided, a popover is attached to each empty slot in the day view
     * instead of calling `onEmptySlotClick` directly.
     */
    emptySlotPopover?:
        | ((slot: ScheduleEmptySlotProps) => SchedulePopoverProps)
        | undefined;
    /** Message displayed inside blocked slots. */
    blockedMessage?: string | undefined;
    /**
     * Called in the week view when the user clicks a cell that contains hidden
     * overflow slots.
     *
     * @param hiddenServices Names of the services whose slots are hidden in the
     * clicked cell.
     */
    onClickHiddenSlots?: ((hiddenServices: string[]) => void) | undefined;
}

/**
 * A single bookable time slot within a `ScheduleEntityProps`.
 */
export interface ScheduleSlotProps {
    /** Unique identifier for the slot. */
    id: string;
    /** Slot start time in `HH:mm` format. */
    startTime: string;
    /** Slot end time in `HH:mm` format. */
    endTime: string;
    /** Visual state of the slot. */
    status: ScheduleCellType;
    /** Total number of bookable places in this slot. */
    capacity?: number | undefined;
    /** Date this slot belongs to in `YYYY-MM-DD` format. */
    date: string | undefined;
    /** Number of confirmed bookings already made for this slot. */
    booked?: number | undefined;
    /** Attaches a popover to this slot with custom configuration. */
    customPopover?: SchedulePopoverProps | undefined;
    /**
     * Called when the user clicks this slot.
     *
     * @param data The full slot data at the time of the click.
     * @param e The originating mouse event.
     */
    onClick?:
        | ((data: ScheduleSlotProps, e: React.MouseEvent) => void)
        | undefined;
}

/**
 * Describes an empty time slot passed to `onEmptySlotClick` and the
 * `emptySlotPopover`.
 */
export interface ScheduleEmptySlotProps {
    /** Slot start time in `HH:mm` format. */
    startTime: string;
    /** Slot end time in `HH:mm` format. */
    endTime: string;
    /** Name of the service this empty slot belongs to. */
    name: string;
}
