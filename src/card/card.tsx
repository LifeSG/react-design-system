import { Typography } from "../typography";
import { StyledCard } from "./card.styles";
import type { CardProps } from "./types";

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
