import type { RefObject } from "react";
import type { SchedulePopoverProps } from "../types";
interface ConditionalCellWrapperProps {
    containerRef: RefObject<HTMLDivElement>;
    children: JSX.Element;
    customPopover?: SchedulePopoverProps | undefined;
}
export declare const WithOptionalPopover: ({ containerRef, children, customPopover, }: ConditionalCellWrapperProps) => JSX.Element;
export {};
