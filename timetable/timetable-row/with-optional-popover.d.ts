import { RefObject } from "react";
import { TimeTablePopoverProps } from "../types";
interface ConditionalCellWrapperProps {
    containerRef: RefObject<HTMLDivElement>;
    children: JSX.Element;
    customPopover?: TimeTablePopoverProps | undefined;
}
export declare const WithOptionalPopover: ({ containerRef, children, customPopover, }: ConditionalCellWrapperProps) => JSX.Element;
export {};
