import { V2_Text } from "../v2_text/text";
import { StyledCard } from "./card.style";
import { CardProps } from "./types";

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
            <V2_Text.Body>{children}</V2_Text.Body>
        ) : (
            children
        );

    return (
        <StyledCard {...otherProps} data-testid={testId}>
            {renderContent()}
        </StyledCard>
    );
};
