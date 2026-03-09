import { clsx } from "clsx";
import dayjs from "dayjs";
import { useEffect, useRef } from "react";
import * as styles from "./day-cell.style";
import { CellType, DayCellProps, LabelType } from "./types";

// =============================================================================
// HELPERS
// =============================================================================
const getHalfClass = (type: CellType | undefined): string | undefined => {
    switch (type) {
        case "hover-subtle":
            return styles.halfHoverSubtle;
        case "hover":
            return styles.halfHover;
        case "hover-outline":
            return styles.halfHoverOutline;
        case "selected-outline":
            return styles.halfSelectedOutline;
        case "selected-outline-subtle":
            return styles.halfSelectedOutlineSubtle;
        case "selected-hover":
            return styles.halfSelectedHover;
        case "selected-hover-outline":
            return styles.halfSelectedHoverOutline;
    }
};

const getCircleClass = (type: CellType | undefined): string | undefined => {
    switch (type) {
        case "hover-subtle":
            return styles.circleHoverSubtle;
        case "hover":
            return styles.circleHover;
        case "hover-outline":
            return styles.circleHoverOutline;
        case "selected-outline":
            return styles.circleSelectedOutline;
        case "selected-outline-subtle":
            return styles.circleSelectedOutlineSubtle;
        case "selected-hover":
            return styles.circleSelectedHover;
        case "selected-hover-outline":
            return styles.circleSelectedHoverOutline;
    }
};

const getLabelWrapperClass = (
    interactive: boolean | null | undefined
): string => {
    if (interactive) return styles.labelWrapperInteractive;
    if (interactive === null) return styles.labelWrapperEnabled;
    return styles.labelWrapperDisabled;
};

const getLabelClass = (
    type: LabelType | undefined,
    disabled: boolean | undefined
): string => {
    if (type === "hidden") return styles.labelHidden;
    if (disabled) return styles.labelDisabled;
    switch (type) {
        case "selected":
            return styles.labelSelected;
        case "selected-hover":
            return styles.labelSelectedHover;
        case "current":
            return styles.labelCurrent;
        case "hover":
            return styles.labelHover;
        case "unavailable":
            return styles.labelUnavailable;
        case "available":
        default:
            return styles.labelAvailable;
    }
};

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
    className,
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

    // =========================================================================
    // RENDER FUNCTION
    // =========================================================================
    return (
        <div aria-hidden={ariaHidden} className={clsx(styles.cell, className)}>
            <div
                className={clsx(
                    styles.half,
                    styles.leftHalf,
                    getHalfClass(bgLeft)
                )}
            />
            <div
                className={clsx(
                    styles.circle,
                    styles.leftCircle,
                    getCircleClass(circleLeft)
                )}
            />
            <div
                className={clsx(
                    styles.half,
                    styles.rightHalf,
                    getHalfClass(bgRight)
                )}
            />
            <div
                className={clsx(
                    styles.circle,
                    styles.rightCircle,
                    getCircleClass(circleRight)
                )}
            />
            <span
                className={clsx(
                    styles.labelWrapper,
                    getLabelWrapperClass(interactive)
                )}
            >
                <div
                    ref={ref}
                    tabIndex={tabIndex}
                    role={role}
                    aria-label={label || defaultLabel}
                    aria-disabled={!interactive}
                    aria-selected={
                        labelType === "selected" ||
                        labelType === "selected-hover"
                    }
                    className={clsx(
                        styles.label,
                        !interactive &&
                            interactive !== null &&
                            styles.labelCursorDisabled,
                        getLabelClass(labelType, disabled)
                    )}
                    onClick={handleClick}
                    onKeyDown={(event) => {
                        onKeyDown?.(event);
                    }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseout}
                    onFocus={handleFocus}
                >
                    {date.date()}
                    {currentDateIndicator && today && (
                        <div className={styles.indicator} />
                    )}
                </div>
            </span>
        </div>
    );
};
