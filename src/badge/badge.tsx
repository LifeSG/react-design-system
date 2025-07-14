import { BadgeWrapper, StyledBadge } from "./badge.style";
import { BadgeProps } from "./types";

const getDisplayCount = (count: number): string => {
    if (count <= 999) return count.toString();
    if (count === 1000) return "1K";
    return "1K+";
};

export const Badge = ({
    count = 0,
    variant = "number",
    color = "default",
    isOverlay = false,
}: BadgeProps) => {
    const displayCount = getDisplayCount(count);

    const shouldShowCount =
        variant === "number" || variant === "number-with-border";

    return (
        <BadgeWrapper $isOverlay={isOverlay}>
            <StyledBadge $variant={variant} $color={color}>
                {shouldShowCount ? displayCount : null}
            </StyledBadge>
        </BadgeWrapper>
    );
};
