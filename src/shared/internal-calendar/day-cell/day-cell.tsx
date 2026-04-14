import clsx from "clsx";
import { useEffect, useRef } from "react";

import * as styles from "./day-cell.styles";
import type { DayCellProps } from "./types";

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
    className,
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
    const isPresentationRole = role === "none" || role === "presentation";
    const isButtonRole = !isPresentationRole;
    const isGridcellRole = role === "gridcell";
    const isSelected =
        labelType === "selected" || labelType === "selected-hover";
    const isToday = labelType === "current";

    // =============================================================================
    // REFS, EFFECTS
    // =============================================================================
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isFocused) {
            return;
        }

        if (isButtonRole && buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [isButtonRole, isFocused]);

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

    const handleMouseout = () => {
        onHoverEnd?.(date);
    };

    const handleLabelKeyDown = (event: React.KeyboardEvent) => {
        onKeyDown?.(event);
    };

    const labelContent = (
        <>
            {date.date()}
            {currentDateIndicator && isToday && (
                <div className={styles.indicator} />
            )}
        </>
    );

    // =========================================================================
    // RENDER FUNCTION
    // =========================================================================
    return (
        <div className={clsx(styles.cell, className)} aria-hidden={ariaHidden}>
            <div className={styles.leftHalf} data-day-cell-type={bgLeft}></div>
            <div
                className={styles.leftCircle}
                data-day-cell-type={circleLeft}
            />
            <div
                className={styles.rightHalf}
                data-day-cell-type={bgRight}
            ></div>
            <div
                className={styles.rightCircle}
                data-day-cell-type={circleRight}
            />
            <span
                className={styles.labelWrapper}
                data-day-cell-interactive={interactive}
            >
                {isButtonRole ? (
                    <button
                        type="button"
                        className={styles.label}
                        data-day-cell-interactive={interactive}
                        data-day-cell-label-type={
                            disabled ? undefined : labelType
                        }
                        data-day-cell-disabled={disabled}
                        ref={buttonRef}
                        tabIndex={tabIndex}
                        role={role === "button" ? undefined : role}
                        aria-label={label || defaultLabel}
                        aria-disabled={!interactive}
                        aria-selected={isGridcellRole ? isSelected : undefined}
                        onClick={handleClick}
                        onKeyDown={handleLabelKeyDown}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseout}
                        onFocus={handleFocus}
                    >
                        {labelContent}
                    </button>
                ) : (
                    <div
                        className={styles.label}
                        data-day-cell-interactive={interactive}
                        data-day-cell-label-type={
                            disabled ? undefined : labelType
                        }
                        data-day-cell-disabled={disabled}
                        role={role}
                        aria-label={label || defaultLabel}
                    >
                        {labelContent}
                    </div>
                )}
            </span>
        </div>
    );
};
