export type SlotStyle = "default" | "stripes";

export type Direction = "right" | "left";

export interface TimeSlotBarProps {
    "data-testid"?: string;
    /** The start time of time slot bar. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    startTime: string;
    /** The end time of time slot bar. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    endTime: string;
    slots: TimeSlot[];
    onClickSlot: (timeSlot: TimeSlot) => void;
    defaultTimeSlot?: DefaultTimeSlot;
}

interface BaseTimeSlot {
    color: string;
    styleType?: SlotStyle;
    secondaryColor?: string;
}

export interface DefaultTimeSlot extends BaseTimeSlot {
    onClick?: () => void;
}

export interface TimeSlot extends BaseTimeSlot {
    id: string;
    /** The start time of time slot. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    startTime: string;
    /** The end time of time slot. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    endTime: string;
    /** The text inside slot cell. */
    text?: string;
    clickable?: boolean;
}
