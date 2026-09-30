import type { TimeSlotBarVariant } from "./types";
interface TimeSlotDividerProps {
    variant: TimeSlotBarVariant;
    left?: number;
    dataTestId?: string;
}
declare const TimeSlotDivider: ({ variant, left, dataTestId, }: TimeSlotDividerProps) => import("react/jsx-runtime").JSX.Element;
export default TimeSlotDivider;
