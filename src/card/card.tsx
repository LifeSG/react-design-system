import clsx from "clsx";
import { useTheme } from "styled-components";

import { Typography } from "../typography";
import * as styles from "./card.styles";
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
        <div
            {...restProps}
            data-testid={testId}
            className={clsx(
                styles.card,
                isDarkMode ? styles.cardDarkMode : styles.cardLightMode,
                className
            )}
        >
            {renderContent()}
        </div>
    );
};
