import type { RefObject } from "react";
import type { TimeTablePopoverProps } from "../types";
interface ConditionalCellWrapperProps {
    containerRef: RefObject<HTMLDivElement>;
    children: JSX.Element;
    customPopover?: TimeTablePopoverProps | undefined;
}
export declare const WithOptionalPopover: ({ containerRef, children, customPopover, }: ConditionalCellWrapperProps) => JSX.Element;
export {};
