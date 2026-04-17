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
        <div className={clsx(children !== undefined && styles.Overlay)}>
            <div
                ref={wrapperRef}
                className={clsx(
                    children !== undefined && styles.OverlayWrapper
                )}
            >
                <div
                    data-testid={testId}
                    className={clsx(
                        styles.badge,
                        variant === "number" && styles.badgeNumber,
                        variant === "number-with-border" &&
                            styles.badgeNumberWithBorder,
                        variant === "dot" && styles.badgeDot,
                        variant === "dot-with-border" &&
                            styles.badgeDotWithBorder,
                        variant === "square-number" && styles.badgeSquareNumber,
                        color === "important" && styles.badgeImportantColor,
                        variant === "square-number" &&
                            color === "default" &&
                            styles.badgeSquareNumberDefaultColor,
                        className
                    )}
                    {...otherProps}
                >
                    {shouldShowCount ? displayCount : null}
                </div>
            </div>
            {children}
        </div>
    );
};
