import type { RefObject } from "react";

import type { PopoverV2TriggerProps } from "../../popover-v2";
import { PopoverTrigger } from "../../popover-v2";
import type { TimeTablePopoverProps } from "../types";

interface ConditionalCellWrapperProps {
    containerRef: RefObject<HTMLDivElement>;
    children: JSX.Element;
    customPopover?: TimeTablePopoverProps | undefined;
}

export const WithOptionalPopover = ({
    containerRef,
    children,
    customPopover,
}: ConditionalCellWrapperProps) => {
    if (!customPopover) {
        return children;
    }

    const popoverTriggerProps: PopoverV2TriggerProps = {
        position: "bottom-start",
        rootNode: containerRef,
        customOffset: customPopover.offset,
        children: children,
        trigger: customPopover.trigger,
        delay: customPopover.delay,
        popoverContent: customPopover.content,
    };

    return <PopoverTrigger {...popoverTriggerProps} />;
};
