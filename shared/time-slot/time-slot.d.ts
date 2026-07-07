import type { ReactNode } from "react";
import type { SlotStyle } from "./types";
export interface TimeSlotProps {
    "data-testid"?: string | undefined;
    bgColor: string;
    bgColor2?: string | undefined;
    children?: ReactNode;
    className?: string | undefined;
    clickable?: boolean | undefined;
    fill?: "default" | "top" | "bottom" | undefined;
    hoverBgColor?: string | undefined;
    hoverBgColor2?: string | undefined;
    nonClickableCursor?: "default" | "not-allowed" | undefined;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    styleType: SlotStyle;
    tabIndex?: number | undefined;
}
export declare const TimeSlot: (props: TimeSlotProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null;
