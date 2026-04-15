import dayjs from "dayjs";
import { useEffect, useMemo, useRef } from "react";

import * as styles from "./day-cell.styles";
import type { DayCellProps } from "./types";

export const DayCell = ({
    bgLeft,
    bgRight,
    circleLeft,
    circleRight,
    labelType,
    disabled,
    interactive = false,
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
    const isFocused = focusDate ? focusDate.isSame(date, "day") : false;
    const defaultLabel = `${date.format("D MMMM YYYY dddd")}, ${
        disabled ? "Unavailable" : "Available"
    }`; // e.g. 1 January 2025 Tuesday, Unavailable
    const isGridcellRole = role === "gridcell";
    const isSelected =
        labelType === "selected" || labelType === "selected-hover";
    const labelText = label || defaultLabel;
    const labelTypeAttr =
        disabled && labelType !== "hidden" ? undefined : labelType;
    const isToday = useMemo(() => dayjs().isSame(date, "day"), [date]);
    let interactionState = "default";
    if (interactive) {
        interactionState = "interactive";
    } else if (disabled) {
        interactionState = "disabled";
    }

    // =============================================================================
    // REFS, EFFECTS
    // =============================================================================
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (isFocused) {
            buttonRef.current?.focus();
        }
    }, [isFocused]);

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleClick = () => {
        onSelect?.(date);
    };

    const handleHover = () => {
        onHover?.(date);
    };

    const handleFocus = () => {
        onFocus?.(date);
    };

    const handleMouseLeave = () => {
        onHoverEnd?.(date);
    };

    const handleLabelKeyDown = (event: React.KeyboardEvent) => {
        onKeyDown?.(event);
    };

    // =========================================================================
    // RENDER FUNCTION
    // =========================================================================
    return (
        <div className={styles.cell} aria-hidden={ariaHidden}>
            <div className={styles.leftHalf} data-day-cell-type={bgLeft}></div>
            <div
                className={styles.leftCircle}
                data-day-cell-type={circleLeft}
            ></div>
            <div
                className={styles.rightHalf}
                data-day-cell-type={bgRight}
            ></div>
            <div
                className={styles.rightCircle}
                data-day-cell-type={circleRight}
            ></div>
            <span
                className={styles.labelWrapper}
                data-day-cell-state={interactionState}
            >
                <button
                    type="button"
                    className={styles.label}
                    data-day-cell-state={interactionState}
                    data-day-cell-label-type={labelTypeAttr}
                    data-day-cell-disabled={disabled}
                    ref={buttonRef}
                    tabIndex={tabIndex}
                    role={role === "button" ? undefined : role}
                    aria-label={labelText}
                    aria-disabled={disabled && !interactive ? true : undefined}
                    aria-selected={isGridcellRole ? isSelected : undefined}
                    onClick={interactive ? handleClick : undefined}
                    onKeyDown={handleLabelKeyDown}
                    onMouseEnter={interactive ? handleHover : undefined}
                    onMouseLeave={interactive ? handleMouseLeave : undefined}
                    onFocus={handleFocus}
                >
                    {date.date()}
                    {currentDateIndicator && isToday && (
                        <div className={styles.indicator} />
                    )}
                </button>
            </span>
        </div>
    );
};
