import clsx from "clsx";
import dayjs from "dayjs";
import type { RefObject } from "react";
import React, { useRef } from "react";

import { concatIds, VisuallyHidden } from "../../shared/accessibility";
import type { SlotStyle, TimeSlotProps } from "../../shared/time-slot";
import { Colour, formatUnitValue, useApplyStyle } from "../../theme";
import { DateHelper } from "../../util";
import { TimeHelper } from "../../util/time-helper";
import { ROW_CELL_GAP, ROW_INTERVAL } from "../const";
import type {
    InternalTimeTableRowCellData,
    RowBarColors,
} from "../internal-types";
import type { TimeTableCellType } from "../types";
import {
    Block,
    BlockContainer,
    BlockDescription,
    BlockTitle,
    Gap,
    tokens,
    Wrapper,
} from "./row-cell.styles";
import { WithOptionalPopover } from "./with-optional-popover";

interface RowCellProps extends InternalTimeTableRowCellData {
    containerRef: RefObject<HTMLDivElement>;
    intervalWidth: number;
    rowBarColor: RowBarColors;
    ariaColIndex: number;
    ariaColSpan: number;
    rowName: string;
}

const styleTypeToSlotType: Record<"solid" | "stripes", SlotStyle> = {
    stripes: "stripes",
    solid: "default",
};

const statusToTimeSlotPropsMap: Record<
    TimeTableCellType,
    Pick<
        TimeSlotProps,
        | "bgColor"
        | "bgColor2"
        | "hoverBgColor"
        | "hoverBgColor2"
        | "styleType"
        | "nonClickableCursor"
    >
> = {
    blocked: {
        styleType: "stripes",
        bgColor: Colour["bg-stronger"],
        bgColor2: Colour["bg-strongest"],
        nonClickableCursor: "not-allowed",
    },
    filled: {
        styleType: "default",
        bgColor: `var(${tokens.block.mainColor})`,
    },
    disabled: {
        styleType: "default",
        bgColor: Colour["bg-disabled"],
        nonClickableCursor: "not-allowed",
    },
    pending: {
        styleType: "stripes",
        bgColor: `var(${tokens.block.mainColor})`,
        bgColor2: `var(${tokens.block.altColor})`,
        nonClickableCursor: "not-allowed",
    },
    default: {
        styleType: "default",
        bgColor: "transparent",
        hoverBgColor: Colour["bg-hover-subtle"],
    },
};

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

    const blockRef = useRef<HTMLDivElement>(null);

    useApplyStyle(blockRef, {
        [tokens.block.width]: formatUnitValue(adjustedCellWidth, "px"),
        [tokens.block.mainColor]: rowBarColor.mainColor,
        [tokens.block.altColor]: rowBarColor.alternateColor,
    });

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
    const renderCellContent = () => {
        const {
            styleType,
            bgColor,
            bgColor2,
            hoverBgColor,
            hoverBgColor2,
            nonClickableCursor,
        } = statusToTimeSlotPropsMap[status];

        const timetableStyleType = cellStyleAttributes?.styleType ?? "default";
        const timeslotStyleType =
            timetableStyleType === "default"
                ? styleType
                : styleTypeToSlotType[timetableStyleType];
        const customBgColor = cellStyleAttributes?.backgroundColor || bgColor;
        const customBg2Color =
            cellStyleAttributes?.altBackgroundColor || bgColor2;
        const customHoverBgColor =
            cellStyleAttributes?.hoverBackgroundColor || hoverBgColor;
        const customHoverBg2Color =
            cellStyleAttributes?.altHoverBackgroundColor || hoverBgColor2;

        return (
            <WithOptionalPopover customPopover={customPopover}>
                <Wrapper>
                    <Block
                        ref={blockRef}
                        clickable={isClickable}
                        bgColor={customBgColor}
                        bgColor2={customBg2Color}
                        hoverBgColor={customHoverBgColor}
                        hoverBgColor2={customHoverBg2Color}
                        nonClickableCursor={nonClickableCursor}
                        onClick={handleCellClick}
                        styleType={timeslotStyleType}
                        tabIndex={isFocusable ? 0 : undefined}
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
    };

    return (
        <BlockContainer
            key={`block-container-key`}
            data-testid={`block-container`}
            className={clsx(isOnTheHour && "blockContainerIsOnTheHour")}
            role="gridcell"
            aria-colindex={ariaColIndex}
            aria-colspan={ariaColSpan}
        >
            {renderCellContent()}
        </BlockContainer>
    );
};

export const RowCell = React.memo(Component);
