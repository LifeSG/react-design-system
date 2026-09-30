import { TimeTablePopoverProps } from "../types";
interface ConditionalCellWrapperProps {
    children: JSX.Element;
    customPopover?: TimeTablePopoverProps | undefined;
}
export declare const WithOptionalPopover: ({ children, customPopover, }: ConditionalCellWrapperProps) => JSX.Element;
export {};
