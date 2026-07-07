import type { PopoverTriggerProps } from "../../popover";
import { PopoverTrigger } from "../../popover";
import type { TimeTablePopoverProps } from "../types";

interface ConditionalCellWrapperProps {
    children: JSX.Element;
    customPopover?: TimeTablePopoverProps | undefined;
}

export const WithOptionalPopover = ({
    children,
    customPopover,
}: ConditionalCellWrapperProps) => {
    if (!customPopover) {
        return children;
    }

    const popoverTriggerProps: PopoverTriggerProps = {
        position: "bottom-start",
        customOffset: customPopover.offset,
        children: children,
        trigger: customPopover.trigger,
        delay: customPopover.delay,
        popoverContent: customPopover.content,
    };

    return <PopoverTrigger {...popoverTriggerProps} />;
};
