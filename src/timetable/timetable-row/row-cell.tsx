import dayjs from "dayjs";
import React, { MutableRefObject } from "react";
import { PopoverTrigger, PopoverV2TriggerProps } from "../../popover-v2";
import { DateHelper } from "../../util";
import { ROW_CELL_GAP, ROW_INTERVAL } from "../const";
import { InternalTimeTableRowCellData, RowBarColors } from "../internal-types";
import {
    Block,
    BlockContainer,
    BlockDescription,
    BlockTitle,
    Gap,
    Wrapper,
} from "./row-cell.style";

interface RowCellProps extends InternalTimeTableRowCellData {
    containerRef: MutableRefObject<HTMLDivElement>;
    intervalWidth: number;
    rowBarColor: RowBarColors;
}

const Component = ({
    id,
    startTime,
    endTime,
    title,
    subtitle,
    status,
    intervalWidth,
    rowBarColor,
    containerRef,
    customPopover,
    roundedStartTime = startTime,
    roundedEndTime = endTime,
    onClick,
}: RowCellProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const isOnTheHour = dayjs(roundedEndTime, "HH:mm").get("minutes") === 0;
    const numberOfIntervals =
        DateHelper.getTimeDiffInMinutes(roundedStartTime, roundedEndTime) /
        ROW_INTERVAL;
    const totalCellWidth = numberOfIntervals * intervalWidth;
    const adjustedCellWidth = totalCellWidth - ROW_CELL_GAP;
    const isClickable =
        !!onClick || (customPopover && customPopover.trigger === "click");

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleCellClick = (event: React.MouseEvent) => {
        if (onClick) {
            onClick(
                {
                    id,
                    startTime,
                    endTime,
                    status,
                    title,
                    subtitle,
                    customPopover,
                },
                event
            );
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const ConditionalCellWrapper = ({
        wrapper,
        children,
    }: {
        wrapper: (child: JSX.Element) => JSX.Element;
        children: JSX.Element;
    }) => {
        if (!customPopover) {
            return children;
        }

        return wrapper(children);
    };

    const buildPopoverTrigger = (child: JSX.Element) => {
        const popoverTriggerProps: PopoverV2TriggerProps = {
            position: "bottom-start",
            rootNode: containerRef,
            customOffset: customPopover.offset,
            children: child,
            trigger: customPopover.trigger,
            delay: customPopover.delay,
            popoverContent: customPopover.content,
        };

        return (
            <PopoverTrigger {...popoverTriggerProps}>{child}</PopoverTrigger>
        );
    };

    return (
        <ConditionalCellWrapper
            wrapper={(child: JSX.Element) => buildPopoverTrigger(child)}
        >
            <BlockContainer
                key={`block-container-key`}
                data-testid={`block-container`}
                $isOnTheHour={isOnTheHour}
            >
                <Wrapper>
                    <Block
                        $width={adjustedCellWidth}
                        $status={status}
                        $mainColor={rowBarColor.mainColor}
                        $altColor={rowBarColor.alternateColor}
                        $isClickable={isClickable}
                        onClick={handleCellClick}
                    >
                        {title && (
                            <BlockTitle weight={"semibold"}>{title}</BlockTitle>
                        )}
                        {subtitle && (
                            <BlockDescription weight={"bold"}>
                                {subtitle}
                            </BlockDescription>
                        )}
                    </Block>
                    {<Gap />}
                </Wrapper>
            </BlockContainer>
        </ConditionalCellWrapper>
    );
};

export const RowCell = React.memo(Component);
