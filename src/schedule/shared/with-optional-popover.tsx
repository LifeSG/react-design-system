import type { RefObject } from "react";

import type { PopoverTriggerProps } from "../../popover";
import { PopoverTrigger } from "../../popover";
import type { SchedulePopoverProps } from "../types";
import * as styles from "./with-optional-popover.styles";

interface ConditionalCellWrapperProps {
    containerRef: RefObject<HTMLDivElement>;
    children: JSX.Element;
    customPopover?: SchedulePopoverProps;
}

export const WithOptionalPopover = ({
    containerRef,
    children,
    customPopover,
}: ConditionalCellWrapperProps) => {
    if (!customPopover) {
        return children;
    }

    const popoverTriggerProps: PopoverTriggerProps = {
        position: "bottom-start",
        rootNode: containerRef,
        customOffset: customPopover.offset,
        children: children,
        trigger: customPopover.trigger,
        delay: customPopover.delay,
        popoverContent: customPopover.content,
    };

    return (
        <PopoverTrigger
            className={styles.popoverTrigger}
            zIndex={2}
            {...popoverTriggerProps}
        />
    );
};
