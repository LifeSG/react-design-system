import { RefObject } from "react";
import styled from "styled-components";
import { PopoverTrigger, PopoverV2TriggerProps } from "../../popover-v2";
import { SchedulePopoverProps } from "../types";

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

    const popoverTriggerProps: PopoverV2TriggerProps = {
        position: "bottom-start",
        rootNode: containerRef,
        customOffset: customPopover.offset,
        children: children,
        trigger: customPopover.trigger,
        delay: customPopover.delay,
        popoverContent: customPopover.content,
    };

    return <StyledPopoverTrigger zIndex={10} {...popoverTriggerProps} />;
};
