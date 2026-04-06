import clsx from "clsx";
import { useTheme } from "styled-components";

import { Typography } from "../typography";
import { StyledCard } from "./card.styles";
import type { CardProps } from "./types";

export const Card = ({ children, ...otherProps }: CardProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { className, ...restProps } = otherProps;
    const testId = otherProps["data-testid"] || "card";
    const theme = useTheme();
    const isDarkMode = theme?.colourMode === "dark";

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
        <StyledCard
            {...restProps}
            data-testid={testId}
            className={clsx(
                isDarkMode ? "cardDarkMode" : "cardLightMode",
                className
            )}
        >
            {renderContent()}
        </StyledCard>
    );
};
