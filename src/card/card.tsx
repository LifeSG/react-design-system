import { Typography } from "../typography/typography";
import { StyledCard } from "./card.style";
import { CardProps } from "./types";

/**
 * Elevated content container.
 *
 * Renders a styled box with a white background and rounded corners.
 * Inherits all `HTMLDivElement` attributes.
 *
 * @example
 * ```tsx
 * <Card>
 *     <p>Card content goes here.</p>
 * </Card>
 * ```
 */
export const Card = ({ children, ...otherProps }: CardProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const testId = otherProps["data-testid"] || "card";

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderContent = () =>
        typeof children === "string" ? (
            <Typography.BodyBL>{children}</Typography.BodyBL>
        ) : (
            children
        );

    return (
        <StyledCard {...otherProps} data-testid={testId}>
            {renderContent()}
        </StyledCard>
    );
};
