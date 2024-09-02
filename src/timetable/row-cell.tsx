import dayjs from "dayjs";
import React from "react";
import { PopoverTrigger } from "../popover-v2";
import { Text } from "../text";
import { DateHelper } from "../util";
import {
    Block,
    BlockContainer,
    BlockDescription,
    BlockTitle,
    Gap,
    Wrapper,
} from "./row-cell.style";
import { ROW_CELL_GAP, ROW_INTERVAL, RowCellProps } from "./types";

export const RowCell = ({
    id,
    startTime,
    endTime,
    title,
    subtitle,
    status,
    intervalWidth,
    rowBarColor,
    containerRef,
    disabledCellHoverContent,
    emptyCellClickContent,
    onEmptyCellClick,
}: RowCellProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const isOnTheHour = dayjs(endTime, "HH:mm").get("minutes") === 0;
    const isNotAvailable = status !== "DEFAULT";
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
        switch (status) {
            case "OCCUPIED": {
                // TODO - Call OCCUPIED slot callback
                break;
            }
            case "DISABLED": {
                // NOTE - Disabled slots should not have interactivity
                break;
            }
            default: {
                if (onEmptyCellClick) {
                    onEmptyCellClick(id, startTime, endTime);
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
            case "OCCUPIED": {
                return wrapper(children);
            }
            case "DISABLED": {
                return wrapper(children);
            }
            default: {
                return children;
            }
        }
    };

    const renderPopoverContent = () => {
        switch (status) {
            case "OCCUPIED": {
                return <>{popoverContent}</>;
            }
            case "DISABLED": {
                return <>{disabledCellHoverContent}</>;
            }
            default: {
                return <></>;
            }
        }
    };

    // FIXME - To remove
    const popoverContent = (
        <div>
            <Text.H5>{id}</Text.H5>
            <Text.H6>Available</Text.H6>
        </div>
    );

    return (
        <ConditionalCellWrapper
            wrapper={(child: JSX.Element) => (
                <PopoverTrigger
                    popoverContent={renderPopoverContent()}
                    position="bottom-start"
                    rootNode={containerRef}
                    removePadding
                    offset={0}
                    trigger={status === "DISABLED" ? "hover" : "click"}
                >
                    {child}
                </PopoverTrigger>
            )}
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
