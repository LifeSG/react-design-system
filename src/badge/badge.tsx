import clsx from "clsx";
import { useRef } from "react";

import { useApplyStyle } from "../theme";
import * as styles from "./badge.styles";
import type { BadgeProps, BadgeVariant } from "./types";

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
function getDisplayCount(count: number) {
    if (count <= 999) return count.toString();
    if (count === 1000) return "1K";
    return "1K+";
}

export const Badge = ({
    children,
    count = 0,
    variant = "number",
    color = "default",
    badgeOffset,
    "data-testid": testId = "badge",
    className,
    ...otherProps
}: BadgeProps) => {
    // =============================================================================
    // CONST
    // =============================================================================
    const displayCount = getDisplayCount(count);
    const variantsToShowCount: BadgeVariant[] = [
        "number",
        "number-with-border",
        "square-number",
    ];
    const shouldShowCount = variantsToShowCount.includes(variant);

    // =============================================================================
    // REFS
    // =============================================================================
    const wrapperRef = useRef<HTMLDivElement>(null);

    useApplyStyle(wrapperRef, {
        [styles.tokens.wrapper.offsetX]: badgeOffset?.[0],
        [styles.tokens.wrapper.offsetY]: badgeOffset?.[1],
    });

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <styles.BadgeOverlay
            className={clsx(children !== undefined && "badgeOverlayIsOverlay")}
        >
            <styles.BadgeWrapper
                ref={wrapperRef}
                className={clsx(
                    children !== undefined && "badgeWrapperIsOverlay"
                )}
            >
                <styles.StyledBadge
                    data-testid={testId}
                    className={clsx(
                        variant === "number" && "styledBadgeNumber",
                        variant === "number-with-border" &&
                            "styledBadgeNumberWithBorder",
                        variant === "dot" && "styledBadgeDot",
                        variant === "dot-with-border" &&
                            "styledBadgeDotWithBorder",
                        variant === "square-number" &&
                            "styledBadgeSquareNumber",
                        color === "important" && "styledBadgeImportantColor",
                        variant === "square-number" &&
                            color === "default" &&
                            "styledBadgeSquareNumberDefaultColor",
                        className
                    )}
                    {...otherProps}
                >
                    {shouldShowCount ? displayCount : null}
                </styles.StyledBadge>
            </styles.BadgeWrapper>
            {children}
        </styles.BadgeOverlay>
    );
};
