import clsx from "clsx";
import dayjs from "dayjs";
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
    const today = dayjs().isSame(date, "day");
    const isFocused = focusDate ? focusDate.isSame(date, "day") : false;
    const defaultLabel = `${date.format("D MMMM YYYY dddd")}, ${
        disabled ? "Unavailable" : "Available"
    }`; // e.g. 1 January 2025 Tuesday, Unavailable
    const leftHalfClass = bgLeft ? styles.dayCellTypeClassMap[bgLeft] : null;
    const leftCircleClass = circleLeft
        ? styles.dayCellTypeClassMap[circleLeft]
        : null;
    const rightHalfClass = bgRight ? styles.dayCellTypeClassMap[bgRight] : null;
    const rightCircleClass = circleRight
        ? styles.dayCellTypeClassMap[circleRight]
        : null;
    const labelWrapperClass = clsx(
        interactive === true && styles.dayCellLabelWrapperInteractive,
        interactive === null && styles.dayCellLabelWrapperNeutral
    );
    const labelTypeClass =
        !disabled && labelType
            ? styles.dayCellLabelTypeClassMap[labelType]
            : null;
    let labelDisabledClass: string | null = null;
    if (disabled) {
        labelDisabledClass =
            labelType === "hidden"
                ? styles.dayCellLabelDisabledHidden
                : styles.dayCellLabelDisabled;
    }

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
        <styles.Cell className={clsx(className)} aria-hidden={ariaHidden}>
            <styles.LeftHalf className={clsx(leftHalfClass)}></styles.LeftHalf>
            <styles.LeftCircle className={clsx(leftCircleClass)} />
            <styles.RightHalf
                className={clsx(rightHalfClass)}
            ></styles.RightHalf>
            <styles.RightCircle className={clsx(rightCircleClass)} />
            <styles.LabelWrapper className={labelWrapperClass}>
                <styles.Label
                    className={clsx(
                        (interactive || interactive === null) &&
                            styles.dayCellLabelPointerAuto,
                        labelTypeClass,
                        labelDisabledClass
                    )}
                    ref={ref}
                    tabIndex={tabIndex}
                    role={role}
                    aria-label={label || defaultLabel}
                    aria-disabled={!interactive}
                    aria-selected={
                        labelType === "selected" ||
                        labelType === "selected-hover"
                    }
                    onClick={handleClick}
                    onKeyDown={(event) => {
                        onKeyDown?.(event);
                    }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseout}
                    onFocus={handleFocus}
                >
                    {date.date()}
                    {currentDateIndicator && today && <styles.Indicator />}
                </styles.Label>
            </styles.LabelWrapper>
        </styles.Cell>
    );
};
