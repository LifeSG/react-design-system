import dayjs from "dayjs";
import React, { MutableRefObject } from "react";
import { PopoverTrigger, PopoverV2TriggerProps } from "../../popover-v2";
import { DateHelper } from "../../util";
import { ROW_CELL_GAP, ROW_INTERVAL, RowCellData } from "../types";
import {
    Block,
    BlockContainer,
    BlockDescription,
    BlockTitle,
    Gap,
    StyledPopoverContent,
    Wrapper,
} from "./row-cell.style";

interface RowCellProps extends RowCellData {
    containerRef: MutableRefObject<HTMLDivElement>;
    intervalWidth: number;
    rowBarColor: string;
    onCellClick?: (data: RowCellData, e: React.MouseEvent) => void;
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
    onCellClick,
}: RowCellProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const isOnTheHour = dayjs(endTime, "HH:mm").get("minutes") === 0;
    const isNotAvailable = status !== "default" || !status;
    const numberOfIntervals =
        DateHelper.getTimeDiffInMinutes(startTime, endTime) / ROW_INTERVAL;
    const totalCellWidth = numberOfIntervals * intervalWidth;
    const adjustedCellWidth = isNotAvailable
        ? totalCellWidth - ROW_CELL_GAP
        : totalCellWidth;

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleCellClick = (event: React.MouseEvent) => {
        if (status && status !== "blocked" && onCellClick) {
            onCellClick(
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

    const buildPopoverContent = (content: string | JSX.Element) => {
        return (
            <StyledPopoverContent
                $padding={customPopover.padding}
                $width={customPopover.width}
                data-testid={`${status}-popover-card`}
            >
                {content}
            </StyledPopoverContent>
        );
    };

    const buildPopoverTrigger = (child: JSX.Element) => {
        const popoverTriggerProps: PopoverV2TriggerProps = {
            position: "bottom-start",
            rootNode: containerRef,
            offset: customPopover.offset,
            children: child,
            trigger: customPopover.trigger,
            delay: customPopover.delay,
            popoverContent: () => buildPopoverContent(customPopover.content),
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
                        $bgColour={rowBarColor}
                        $clickableCell={!!handleCellClick && !!customPopover}
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
                    {isNotAvailable && <Gap />}
                </Wrapper>
            </BlockContainer>
        </ConditionalCellWrapper>
    );
};

export const RowCell = React.memo(Component);
