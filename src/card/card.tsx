import clsx from "clsx";
import { useContext } from "react";

import { ThemeContext } from "../theme/theme-provider/context";
import { Typography } from "../typography";
import * as styles from "./card.styles";
import type { CardProps } from "./types";

export const Card = ({
    children,
    className,
    "data-testid": dataTestId = "card",
    ...otherProps
}: CardProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const theme = useContext(ThemeContext);
    const isDarkMode = theme?.mode === "dark";

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
            {...otherProps}
            data-testid={dataTestId}
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
