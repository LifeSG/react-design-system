import clsx from "clsx";
import { useRef } from "react";

import { useApplyStyle } from "../theme";
import * as styles from "./badge.styles";
import type { BadgeProps, BadgeVariant } from "./types";

function getDisplayCount(count: number) {
    if (count <= 999) return count.toString();
    if (count === 1000) return "1K";
    return "1K+";
}
const variantsToShowCount: Set<BadgeVariant> = new Set([
    "number",
    "number-with-border",
    "square-number",
]);

export const Badge = ({
    badgeOffset,
    children,
    className,
    color = "default",
    count = 0,
    "data-testid": testId = "badge",
    variant = "number",
    ...otherProps
}: BadgeProps) => {
    // =============================================================================
    // CONST
    // =============================================================================
    const displayCount = getDisplayCount(count);
    const shouldShowCount = variantsToShowCount.has(variant);

    // =============================================================================
    // REFS
    // =============================================================================
    const wrapperRef = useRef<HTMLDivElement>(null);

    useApplyStyle(wrapperRef, {
        [styles.tokens.wrapper.offsetX]: badgeOffset?.[0] ?? "0px",
        [styles.tokens.wrapper.offsetY]: badgeOffset?.[1] ?? "0px",
    });

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <div className={clsx(children !== undefined && styles.badgeOverlay)}>
            <div
                ref={wrapperRef}
                className={clsx(
                    styles.badgeWrapper,
                    children !== undefined && styles.badgeWrapperIsOverlay
                )}
            >
                <div
                    data-testid={testId}
                    data-variant={variant}
                    data-color={color}
                    className={clsx(styles.badge, className)}
                    {...otherProps}
                >
                    {shouldShowCount ? displayCount : null}
                </div>
            </div>
            {children}
        </div>
    );
};
