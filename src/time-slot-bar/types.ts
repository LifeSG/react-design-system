import { ThemeStyleProps } from "../theme/types";

export type SlotStyle = "default" | "stripes";

export type Direction = "right" | "left";

export type TimeSlotBarVariant = "minified" | "default";

export interface TimeSlotBarRef {
    /** Resets the scroll position to the initialScrollTime if provided */
    resetScroll: () => void;
}

interface TimeSlotBarStyleAttributes {
    /** The type of style of the time slot. Values: "default" | "stripes"  */
    styleType?: SlotStyle | undefined;
    /** The label color */
    color?: string | undefined;
    /** The background color */
    backgroundColor: string | ((props: ThemeStyleProps) => string);
    /** The secondary background color. Used in conjunction if styleType is "stripes" */
    backgroundColor2?:
        | string
        | ((props: ThemeStyleProps) => string)
        | undefined;
}

export interface TimeSlotBarProps {
    "data-testid"?: string | undefined;
    className?: string | undefined;
    /** The display variant of the component. Values: "minified" | "default" */
    variant?: TimeSlotBarVariant;
    /** The start time of time slot bar. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    startTime: string;
    /** The end time of time slot bar. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    endTime: string;
    /** Initial scroll position in HH:mm format (e.g., "09:00" will scroll to 9am on mount) */
    initialScrollTime?: string | undefined;
    slots: TimeSlot[];
    /** Callback function when user clicks on the time slot */
    onSlotClick: (timeSlot: TimeSlot) => void;
    /** The default click behaviour when no time slot is specified for the time period */
    onClick?: () => void;
    /** The default styling attributes when no time slot is specified for the time period */
    styleAttributes?: TimeSlotBarStyleAttributes | undefined;
    /** Rounds initial scroll time to the nearest interval, e.g 6:30 will be clamped to 6:00 when interval = 60. Default is true */
    roundInitialScrollTime?: boolean | undefined;
}

export interface TimeSlot {
    id: string;
    /** The start time of time slot. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    startTime: string;
    /** The end time of time slot. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    endTime: string;
    /** The slot cell label */
    label?: string | undefined;
    /** Specifies if the slot cell is clickable */
    clickable?: boolean | undefined;
    styleAttributes: TimeSlotBarStyleAttributes;
}
