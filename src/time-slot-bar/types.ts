import type { SlotStyle } from "../shared/time-slot/types";

/**
 * Visual density variant for `TimeSlotBar`.
 *
 * - `"default"` — full-height bar; slots show labels and are clickable.
 * - `"minified"` — compact bar; slot labels and click interactions are disabled.
 */
export type TimeSlotBarVariant = "minified" | "default";

export type { SlotStyle } from "../shared/time-slot/types";

/**
 * Imperative handle returned by `TimeSlotBar` via `ref`.
 *
 */
export interface TimeSlotBarRef {
    /**
     * Scrolls the bar back to `initialScrollTime`,
     * or to the start if `initialScrollTime` is not set.
     */
    resetScroll: () => void;
}

/**
 * Visual styling attributes applied to an individual time slot or the bar background.
 */
interface TimeSlotBarStyleAttributes {
    /*
     * Visual style for the slot fill.*
     *
     * @default "default"
     */
    styleType?: SlotStyle | undefined;
    /** Text color for the slot label. */
    color?: string | undefined;
    /** Primary fill color of the slot. */
    backgroundColor: string;
    /**
     * Secondary fill color used for the alternating stripe.
     *
     * @remarks Only applies when `styleType` is `"stripes"`.
     */
    backgroundColor2?: string | undefined;
    /** Primary fill color of the slot on hover. */
    hoverBackgroundColor?: string | undefined;
    /**
     * Secondary fill color on hover when `styleType` is `"stripes"`.
     *
     * @remarks Only applies when `styleType` is `"stripes"`.
     */
    hoverBackgroundColor2?: string | undefined;
}

/**
 * Props for `TimeSlotBar` component.
 */
export interface TimeSlotBarProps {
    "data-testid"?: string | undefined;
    className?: string | undefined;
    /**
     * Visual density of the bar.
     *
     * @default "default"
     */
    variant?: TimeSlotBarVariant;
    /**
     * Start of the visible time range in `HH:mm` format.
     *
     * @remarks Minutes must be one of `00`, `15`, `30`, or `45`.
     */
    startTime: string;
    /**
     * End of the visible time range in `HH:mm` format.
     *
     * @remarks Minutes must be one of `00`, `15`, `30`, or `45`.
     */
    endTime: string;
    /**
     * Time position the bar scrolls to on mount, in `HH:mm` format.
     *
     * When `roundInitialScrollTime` is `true`, the value is
     * rounded down to the nearest 30-minute interval before scrolling.
     */
    initialScrollTime?: string | undefined;
    /**
     * The individual time slots shown within the configured time range.
     *
     * @remarks Slots outside the `startTime`–`endTime` range are clipped.
     */
    slots: TimeSlot[];
    /**
     * Called when the user clicks a slot cell.
     *
     * @param timeSlot The clicked `TimeSlot` object.
     */
    onSlotClick: (timeSlot: TimeSlot) => void;
    /**
     * Called when the user clicks an empty slot.
     *
     * @remarks Only active in the `"default"` variant.
     */
    onClick?: () => void;
    /**
     * Styling applied to the bar background region not covered by any slot.
     * Required to make the background region visible or interactive.
     */
    styleAttributes?: TimeSlotBarStyleAttributes | undefined;
    /**
     * When `true`, `initialScrollTime` is rounded down to the nearest
     * 30-minute interval before the bar scrolls to it.
     *
     * @default true
     */
    roundInitialScrollTime?: boolean | undefined;
}

/**
 * A single bookable or occupied slot rendered within a `TimeSlotBar`.
 *
 */
export interface TimeSlot {
    /** Unique identifier for this slot. */
    id: string;
    /**
     * Start boundary of the slot in `HH:mm` format.
     *
     * @remarks Minutes must be one of `00`, `15`, `30`, or `45`.
     */
    startTime: string;
    /**
     * End boundary of the slot in `HH:mm` format.
     *
     * @remarks Minutes must be one of `00`, `15`, `30`, or `45`.
     */
    endTime: string;
    /**
     * Text rendered inside the slot cell.
     * Replaced with `"..."` when the cell is too narrow to display the full label.
     *
     * @remarks Only displayed in the `"default"` variant.
     */
    label?: string | undefined;
    /**
     * Whether the slot responds to clicks.
     *
     * @remarks Only active in the `"default"` variant.
     *
     * @default true
     */
    clickable?: boolean | undefined;
    /** Visual styling for the slot. */
    styleAttributes: TimeSlotBarStyleAttributes;
    /**
     * Accessible label for this slot.
     */
    ariaLabel?: string | undefined;
}
