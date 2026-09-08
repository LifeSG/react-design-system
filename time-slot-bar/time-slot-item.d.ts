import { type MouseEvent } from "react";
import type { TimeSlotBarVariant } from "./types";
interface TimeSlotItemProps {
    children: React.ReactNode;
    color?: string;
    dataTestId?: string;
    onClick?: (() => void) | ((evt: MouseEvent<HTMLElement>) => void);
    slotOffset: number;
    slotWidth: number;
    variant: TimeSlotBarVariant;
}
declare const TimeSlotItem: ({ children, color, dataTestId, onClick, slotOffset, slotWidth, variant, }: TimeSlotItemProps) => import("react/jsx-runtime").JSX.Element;
export default TimeSlotItem;
