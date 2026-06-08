import type { RefObject } from "react";
import styled from "styled-components";

import type { PopoverTriggerProps } from "../../popover";
import { PopoverTrigger } from "../../popover";
import type { SchedulePopoverProps } from "../types";

interface ConditionalCellWrapperProps {
    containerRef: RefObject<HTMLDivElement>;
    children: JSX.Element;
    customPopover?: SchedulePopoverProps | undefined;
}

const StyledPopoverTrigger = styled(PopoverTrigger)`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

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

    return <StyledPopoverTrigger zIndex={2} {...popoverTriggerProps} />;
};
