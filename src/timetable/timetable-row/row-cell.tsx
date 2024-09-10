import dayjs from "dayjs";
import React, { MutableRefObject } from "react";
import { PopoverTrigger, PopoverV2TriggerProps } from "../../popover-v2";
import { DateHelper } from "../../util";
import {
    Block,
    BlockContainer,
    BlockDescription,
    BlockTitle,
    Gap,
    Wrapper,
} from "./row-cell.style";
import { ROW_CELL_GAP, ROW_INTERVAL, RowCellData } from "../types";

interface RowCellProps extends RowCellData {
    containerRef: MutableRefObject<HTMLDivElement>;
    intervalWidth: number;
    rowBarColor: string;
    blockedCellHoverContent?: string | JSX.Element | undefined;
    onEmptyCellClick?: (
        id: string,
        intervalStart: string,
        intervalEnd: string,
        e: React.MouseEvent
    ) => void;
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
    blockedCellHoverContent,
    filledBlockClickContent,
    onEmptyCellClick,
}: RowCellProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const isOnTheHour = dayjs(endTime, "HH:mm").get("minutes") === 0;
    const isNotAvailable = status !== "default";
    const numberOfIntervals =
        DateHelper.getTimeDiffInMinutes(startTime, endTime) / ROW_INTERVAL;
    const totalCellWidth = numberOfIntervals * intervalWidth;
    const adjustedCellWidth = isNotAvailable
        ? totalCellWidth - ROW_CELL_GAP
        : totalCellWidth;
    const contentMap = {
        filled: filledBlockClickContent,
        blocked: blockedCellHoverContent,
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    // NOTE - Only handling empty cell clicks for now,
    const handleCellClick = (e: React.MouseEvent) => {
        switch (status) {
            case "filled": {
                break;
            }
            case "blocked": {
                // NOTE - Disabled slots should not have interactivity
                break;
            }
            default: {
                if (onEmptyCellClick) {
                    onEmptyCellClick(id, startTime, endTime, e);
                }
                break;
            }
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
        switch (status) {
            case "filled": {
                return wrapper(children);
            }
            case "blocked": {
                return wrapper(children);
            }
            default: {
                return children;
            }
        }
    };

    const buildPopoverTrigger = (child: JSX.Element) => {
        const content = contentMap[status];
        if (!content) {
            return child;
        }

        const popoverTriggerProps: PopoverV2TriggerProps = {
            position: "bottom-start",
            rootNode: containerRef,
            removePadding: true,
            offset: 0,
            children: child,
            popoverContent: content,
        };

        switch (status) {
            case "filled": {
                return (
                    <PopoverTrigger
                        {...popoverTriggerProps}
                        trigger="click"
                        popoverClassName="filledPopover"
                    >
                        {child}
                    </PopoverTrigger>
                );
            }
            case "blocked": {
                return (
                    <PopoverTrigger
                        {...popoverTriggerProps}
                        trigger="hover"
                        popoverClassName="blockedPopover"
                    >
                        {child}
                    </PopoverTrigger>
                );
            }
            default: {
                return child;
            }
        }
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
                        $bgColour={rowBarColor}
                        $clickableEmptyCell={!!onEmptyCellClick}
                        onClick={(e: React.MouseEvent) => handleCellClick(e)}
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
                    {isNotAvailable && <Gap />}
                </Wrapper>
            </BlockContainer>
        </ConditionalCellWrapper>
    );
};

export const RowCell = React.memo(Component);
