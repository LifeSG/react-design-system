export type SlotStyle = "default" | "stripes";

export type Direction = "right" | "left";

interface TimeSlotBarStyleAttributes {
    color: string;
    styleType?: SlotStyle;
    secondaryColor?: string;
}

export interface TimeSlotBarProps {
    "data-testid"?: string;
    className?: string;
    /** The start time of time slot bar. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    startTime: string;
    /** The end time of time slot bar. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    endTime: string;
    slots: TimeSlot[];
    /** The callback function when user clicks on the time slot */
    onSlotClick: (timeSlot: TimeSlot) => void;
    /** The default on click behaviour when no time slot is specified for the time period */
    onClick?: () => void;
    /** The default styling attributes when no time slot is specified for the time period */
    styleAttributes?: TimeSlotBarStyleAttributes;
}

export interface TimeSlot {
    id: string;
    /** The start time of time slot. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    startTime: string;
    /** The end time of time slot. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    endTime: string;
    /** The text inside slot cell. */
    text?: string;
    clickable?: boolean;
    styleAttributes: TimeSlotBarStyleAttributes;
}
