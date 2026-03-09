import { clsx } from "clsx";
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
import { CellType, DayCellProps, LabelType } from "./types";

// =============================================================================
// HELPERS
// =============================================================================
const getHalfClass = (type: CellType | undefined): string | undefined => {
    switch (type) {
        case "hover-subtle":
            return "halfHoverSubtle";
        case "hover":
            return "halfHover";
        case "hover-outline":
            return "halfHoverOutline";
        case "selected-outline":
            return "halfSelectedOutline";
        case "selected-outline-subtle":
            return "halfSelectedOutlineSubtle";
        case "selected-hover":
            return "halfSelectedHover";
        case "selected-hover-outline":
            return "halfSelectedHoverOutline";
    }
};

const getCircleClass = (type: CellType | undefined): string | undefined => {
    switch (type) {
        case "hover-subtle":
            return "circleHoverSubtle";
        case "hover":
            return "circleHover";
        case "hover-outline":
            return "circleHoverOutline";
        case "selected-outline":
            return "circleSelectedOutline";
        case "selected-outline-subtle":
            return "circleSelectedOutlineSubtle";
        case "selected-hover":
            return "circleSelectedHover";
        case "selected-hover-outline":
            return "circleSelectedHoverOutline";
    }
};

const getLabelWrapperClass = (
    interactive: boolean | null | undefined
): string => {
    if (interactive) return "labelWrapperInteractive";
    if (interactive === null) return "labelWrapperEnabled";
    return "labelWrapperDisabled";
};

const getLabelClass = (
    type: LabelType | undefined,
    disabled: boolean | undefined
): string => {
    if (type === "hidden") return "labelHidden";
    if (disabled) return "labelDisabled";
    switch (type) {
        case "selected":
            return "labelSelected";
        case "selected-hover":
            return "labelSelectedHover";
        case "current":
            return "labelCurrent";
        case "hover":
            return "labelHover";
        case "unavailable":
            return "labelUnavailable";
        case "available":
        default:
            return "labelAvailable";
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
        <Cell aria-hidden={ariaHidden} className={className}>
            <LeftHalf className={getHalfClass(bgLeft)} />
            <LeftCircle className={getCircleClass(circleLeft)} />
            <RightHalf className={getHalfClass(bgRight)} />
            <RightCircle className={getCircleClass(circleRight)} />
            <LabelWrapper className={getLabelWrapperClass(interactive)}>
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
                    className={clsx(
                        !interactive &&
                            interactive !== null &&
                            "labelCursorDisabled",
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
                    {currentDateIndicator && today && <Indicator />}
                </Label>
            </LabelWrapper>
        </Cell>
    );
};
