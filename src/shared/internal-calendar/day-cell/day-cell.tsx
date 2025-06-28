import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import {
    Cell,
    Indicator,
    Label,
    LabelWrapper,
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
    onFocus,
    onHoverEnd,
    onKeyDown,
    focusDate,
    label,
    ariaHidden,
    tabIndex = -1,
    role = "button",
}: DayCellProps) => {
    // =========================================================================
    // CONST
    // =========================================================================
    const today = dayjs().isSame(date, "day");
    const isFocused = focusDate ? focusDate.isSame(date, "day") : false;
    const defaultLabel = `${date.format("D MMMM YYYY dddd")}, ${
        disabled ? "Unavailable" : "Available"
    }`; // e.g. 1 January 2025 Tuesday, Unavailable

    // =============================================================================
    // REFS, EFFECTS
    // =============================================================================
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isFocused && ref.current) {
            ref.current?.focus();
        }
    }, [isFocused]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleClick = () => {
        onSelect(date);
    };

    const handleHover = () => {
        onHover(date);
    };

    const handleFocus = () => {
        onFocus && onFocus(date);
    };

    const handleMouseout = () => {
        onHoverEnd && onHoverEnd(date);
    };

    // =========================================================================
    // RENDER FUNCTION
    // =========================================================================
    return (
        <Cell aria-hidden={ariaHidden}>
            <LeftHalf $type={bgLeft}></LeftHalf>
            <LeftCircle $type={circleLeft} />
            <RightHalf $type={bgRight}></RightHalf>
            <RightCircle $type={circleRight} />
            <LabelWrapper $interactive={interactive}>
                <Label
                    ref={ref}
                    tabIndex={tabIndex}
                    role={role}
                    aria-label={label || defaultLabel}
                    aria-disabled={!interactive}
                    aria-selected={
                        labelType === "selected" ||
                        labelType === "selected-hover"
                    }
                    $type={labelType}
                    $disabled={disabled}
                    $interactive={interactive}
                    onClick={handleClick}
                    onKeyDown={(event) => {
                        onKeyDown && onKeyDown(event);
                    }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseout}
                    onFocus={handleFocus}
                >
                    {date.date()}
                    {currentDateIndicator && today && (
                        <Indicator $disabled={disabled} />
                    )}
                </Label>
            </LabelWrapper>
        </Cell>
    );
};
