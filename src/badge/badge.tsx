import { BadgeOverlay, BadgeWrapper, StyledBadge } from "./badge.style";
import { BadgeProps } from "./types";

export const Badge = ({
    children,
    count = 0,
    variant = "number",
    color = "default",
    badgeOffset,
    "data-testid": testId = "badge",
    ...otherProps
}: BadgeProps) => {
    // =============================================================================
    // CONST
    // =============================================================================
    const displayCount = getDisplayCount(count);

    const shouldShowCount =
        variant === "number" || variant === "number-with-border";

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    function getDisplayCount(count: number) {
        if (count <= 999) return count.toString();
        if (count === 1000) return "1K";
        return "1K+";
    }

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <BadgeOverlay $isOverlay={children !== undefined}>
            <BadgeWrapper
                $offset={badgeOffset}
                $isOverlay={children !== undefined}
            >
                <StyledBadge
                    $variant={variant}
                    $color={color}
                    data-testid={testId}
                    {...otherProps}
                >
                    {shouldShowCount ? displayCount : null}
                </StyledBadge>
            </BadgeWrapper>
            {children}
        </BadgeOverlay>
    );
};
