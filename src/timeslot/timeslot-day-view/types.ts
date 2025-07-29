import { TimeSlotRowData } from "../types";
import { ThemeStyleProps } from "../../theme/types";

export type SlotStyle = "default" | "stripes";

interface TimeSlotStyleAttributes {
    /** The type of style of the time slot. Values: "default" | "stripes"  */
    styleType?: SlotStyle;
    /** The label color */
    color?: string;
    /** The background color */
    backgroundColor: string | ((props: ThemeStyleProps) => string);
    /** The secondary background color. Used in conjunction if styleType is "stripes" */
    backgroundColor2?: string | ((props: ThemeStyleProps) => string);
}

export interface TimeSlotDayViewProps {
    date: string;
    rowData: TimeSlotRowData[];
    loading: boolean;
    minTime: string;
    maxTime: string;
    initialScrollTime?: string;
    isMobile: boolean;
    onNextService: () => void;
    onPrevService: () => void;
    showPrevArrow: boolean;
    showNextArrow: boolean;
    onSlotClick?: ((data: any, e: React.MouseEvent) => void) | undefined;
    styleAttributes?: TimeSlotStyleAttributes;
}
