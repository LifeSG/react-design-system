import dayjs from "dayjs";
import type { RefObject } from "react";
import React from "react";

import { concatIds, VisuallyHidden } from "../../shared/accessibility";
import { DateHelper } from "../../util";
import { TimeHelper } from "../../util/time-helper";
import { ROW_CELL_GAP, ROW_INTERVAL } from "../const";
import type {
    InternalTimeTableRowCellData,
    RowBarColors,
} from "../internal-types";
import {
    Block,
    BlockContainer,
    BlockDescription,
    BlockTitle,
    Gap,
    Wrapper,
} from "./row-cell.style";
import { WithOptionalPopover } from "./with-optional-popover";

interface RowCellProps extends InternalTimeTableRowCellData {
    containerRef: RefObject<HTMLDivElement>;
    intervalWidth: number;
    rowBarColor: RowBarColors;
    ariaColIndex: number;
    ariaColSpan: number;
    rowName: string;
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
    customPopover,
    cellStyleAttributes,
    isFocusable,
    roundedStartTime = startTime,
    roundedEndTime = endTime,
    ariaColIndex,
    ariaColSpan,
    rowName,
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
    const rowAriaLabel = concatIds(
        `${TimeHelper.formatTimeRange(startTime, endTime)}`,
        rowName,
        title,
        subtitle,
        `${status}`
    );

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
    const renderCellContent = () => (
        <WithOptionalPopover customPopover={customPopover}>
            <Wrapper>
                <Block
                    $width={adjustedCellWidth}
                    $status={status}
                    $mainColor={rowBarColor.mainColor}
                    $altColor={rowBarColor.alternateColor}
                    $isClickable={isClickable}
                    $customMainColor={cellStyleAttributes?.backgroundColor}
                    $customAltColor={cellStyleAttributes?.altBackgroundColor}
                    $customHoverColor={
                        cellStyleAttributes?.hoverBackgroundColor
                    }
                    $customAltHoverColor={
                        cellStyleAttributes?.altHoverBackgroundColor
                    }
                    $styleType={cellStyleAttributes?.styleType}
                    tabIndex={isFocusable ? 0 : undefined}
                    onClick={handleCellClick}
                >
                    <VisuallyHidden>{rowAriaLabel}</VisuallyHidden>
                    {title && (
                        <BlockTitle weight={"semibold"} aria-hidden>
                            {title}
                        </BlockTitle>
                    )}
                    {subtitle && (
                        <BlockDescription weight={"bold"} aria-hidden>
                            {subtitle}
                        </BlockDescription>
                    )}
                </Block>
                <Gap />
            </Wrapper>
        </WithOptionalPopover>
    );

    return (
        <BlockContainer
            key={`block-container-key`}
            data-testid={`block-container`}
            $isOnTheHour={isOnTheHour}
            role="gridcell"
            aria-colindex={ariaColIndex}
            aria-colspan={ariaColSpan}
        >
            {renderCellContent()}
        </BlockContainer>
    );
};

export const RowCell = React.memo(Component);
