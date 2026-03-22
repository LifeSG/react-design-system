export type SlotStyle = "default" | "stripes";

export type Direction = "right" | "left";

export type TimeSlotBarVariant = "minified" | "default";

interface TimeSlotBarStyleAttributes {
    /** The type of style of the time slot. Values: "default" | "stripes"  */
    styleType?: SlotStyle;
    /** The label color */
    color?: string;
    /** The background color */
    backgroundColor: string;
    /** The secondary background color. Used in conjunction if styleType is "stripes" */
    backgroundColor2?: string;
}

/**
 * Props for the TimeSlotBar component - single-day time slot display.
 *
 * Renders a horizontal bar divided into selectable time slot cells between
 * `startTime` and `endTime`. Each slot carries its own style attributes.
 *
 * @example
 * ```tsx
 * <TimeSlotBar
 *     startTime="08:00"
 *     endTime="20:00"
 *     slots={timeSlots}
 *     onSlotClick={(slot) => handleSelect(slot)}
 * />
 * ```
 * @keywords booking slot, availability bar, time block, schedule bar, hourly cells
 */
export interface TimeSlotBarProps {
    /** The test identifier for the component. */
    "data-testid"?: string;
    /** CSS class selector for the component. */
    className?: string;
    /**
     * The display variant of the component.
     *
     * @default "default"
     */
    variant?: TimeSlotBarVariant;
    /** The start time of the bar in `HH:mm` format. Minutes must be in 15-minute blocks (00, 15, 30, 45). */
    startTime: string;
    /** The end time of the bar in `HH:mm` format. Minutes must be in 15-minute blocks (00, 15, 30, 45). */
    endTime: string;
    /** The list of time slots to render within the bar. */
    slots: TimeSlot[];
    /** Called when user clicks on a time slot cell. */
    onSlotClick: (timeSlot: TimeSlot) => void;
    /** Called when the bar is clicked outside of any defined slot. */
    onClick?: () => void;
    /** Default style attributes applied to periods not covered by any slot. */
    styleAttributes?: TimeSlotBarStyleAttributes;
}

export interface TimeSlot {
    id: string;
    /** The start time of time slot. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    startTime: string;
    /** The end time of time slot. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    endTime: string;
    /** The slot cell label */
    label?: string;
    /** Specifies if the slot cell is clickable */
    clickable?: boolean;
    styleAttributes: TimeSlotBarStyleAttributes;
}
