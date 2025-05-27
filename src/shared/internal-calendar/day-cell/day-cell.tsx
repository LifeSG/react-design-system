import dayjs from "dayjs";
import React from "react";
import {
    Cell,
    CellContent,
    Indicator,
    Label,
    LeftCircle,
    LeftHalf,
    RightCircle,
    RightHalf,
} from "./day-cell.style";
import { DayCellProps } from "./types";

export const DayCell = ({
    bgLeft,
    bgRight,
    circleLeft,
    circleRight,
    labelType,
    disabled,
    interactive,
    currentDateIndicator,
    date,
    onSelect,
    onHover,
    onHoverEnd,
    role = "button",
}: DayCellProps) => {
    // =========================================================================
    // CONST
    // =========================================================================
    const today = dayjs().isSame(date, "day");
    const dayName = `${date.format("D MMMM YYYY dddd")}, ${
        disabled ? "Unavailable" : "Available"
    }`; // e.g. 1 January 2025 Tuesday, Unavailable

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleClick = () => {
        onSelect(date);
    };

    const handleHover = () => {
        onHover(date);
    };

    const handleMouseout = () => {
        onHoverEnd && onHoverEnd(date);
    };

    // =========================================================================
    // RENDER FUNCTION
    // =========================================================================
    return (
        <Cell>
            <LeftHalf $type={bgLeft}></LeftHalf>
            <LeftCircle $type={circleLeft} />
            <RightHalf $type={bgRight}></RightHalf>
            <RightCircle $type={circleRight} />
            <Label
                role={role}
                aria-label={dayName}
                aria-disabled={disabled}
                $type={labelType}
                $disabled={disabled}
                $interactive={interactive}
                onClick={handleClick}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseout}
            >
                <CellContent aria-hidden>
                    {date.date()}
                    {currentDateIndicator && today && (
                        <Indicator $disabled={disabled} />
                    )}
                </CellContent>
            </Label>
        </Cell>
    );
};
