import React from "react";
import {
    BadgeWrapper,
    DotBadge,
    DotBadgeWithBorder,
    NumberBadge,
    NumberBadgeWithBorder,
} from "./badge.style";
import { BadgeProps } from "./types";

const getDisplayCount = (count: number): string => {
    if (count <= 999) return count.toString();
    if (count === 1000) return "1K";
    return "1K+";
};

export const Badge: React.FC<BadgeProps> = ({
    count = 0,
    variant = "number",
    color = "default",
    isOnAvatar = false,
}) => {
    const displayCount = getDisplayCount(count);

    const offsets = {
        number: isOnAvatar ? { x: 1, y: -7 } : { x: 4, y: 1 },
        "number-with-border": isOnAvatar ? { x: 1, y: -7 } : { x: 4, y: 1 },
        dot: { x: -1, y: -2 },
        "dot-with-border": { x: -1, y: -2 },
    };

    const { x, y } = offsets[variant];

    return (
        <BadgeWrapper style={{ top: `${y}px`, right: `${x}px` }}>
            {variant === "number" && (
                <NumberBadge color={color}>{displayCount}</NumberBadge>
            )}
            {variant === "number-with-border" && (
                <NumberBadgeWithBorder color={color}>
                    {displayCount}
                </NumberBadgeWithBorder>
            )}
            {variant === "dot" && <DotBadge color={color} />}
            {variant === "dot-with-border" && (
                <DotBadgeWithBorder color={color} />
            )}
        </BadgeWrapper>
    );
};
