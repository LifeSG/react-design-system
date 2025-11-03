import { ThemeStyleProps } from "../theme/types";
export type SlotStyle = "default" | "stripes";
export type Direction = "right" | "left";
export type TimeSlotBarVariant = "minified" | "default";
interface TimeSlotBarStyleAttributes {
    /** The type of style of the time slot. Values: "default" | "stripes"  */
    styleType?: SlotStyle;
    /** The label color */
    color?: string;
    /** The background color */
    backgroundColor: string | ((props: ThemeStyleProps) => string);
    /** The secondary background color. Used in conjunction if styleType is "stripes" */
    backgroundColor2?: string | ((props: ThemeStyleProps) => string);
}
export interface TimeSlotBarProps {
    "data-testid"?: string;
    className?: string;
    /** The display variant of the component. Values: "minified" | "default" */
    variant?: TimeSlotBarVariant;
    /** The start time of time slot bar. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    startTime: string;
    /** The end time of time slot bar. Format in HH:mm. Note: Minutes can be 00, 15, 30, 45 */
    endTime: string;
    slots: TimeSlot[];
    /** Callback function when user clicks on the time slot */
    onSlotClick: (timeSlot: TimeSlot) => void;
    /** The default click behaviour when no time slot is specified for the time period */
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
    /** The slot cell label */
    label?: string;
    /** Specifies if the slot cell is clickable */
    clickable?: boolean;
    styleAttributes: TimeSlotBarStyleAttributes;
}
export {};
