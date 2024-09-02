import dayjs from "dayjs";
import React, { useRef, useState } from "react";
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
    const handleCellClick = (event: React.MouseEvent, status: string) => {
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

    const popoverContent = (
        <div>
            <Text.H5>Apple</Text.H5>
            <Text.H6>Available</Text.H6>
        </div>
    );

    return (
        <>
            <PopoverTrigger
                className="pop-test"
                popoverContent={popoverContent}
                position="bottom-start"
                removePadding
                rootNode={containerRef}
                offset={0}
                zIndex={0}
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
                            onClick={(e: React.MouseEvent) =>
                                handleCellClick(e, status)
                            }
                        >
                            {title && (
                                <BlockTitle weight={"semibold"}>
                                    {title}
                                </BlockTitle>
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
            </PopoverTrigger>
        </>
    );
};
