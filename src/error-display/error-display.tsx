import clsx from "clsx";
import type React from "react";
import { useContext } from "react";

import { Button } from "../button";
import { Markup } from "../markup";
import { Breakpoint, useDesignToken } from "../theme";
import { ThemeContext } from "../theme/theme-provider/context";
import { Typography } from "../typography";
import * as styles from "./error-display.styles";
import { getErrorDisplayData } from "./error-display-data";
import { InactivityTimer } from "./inactivity-timer";
import type {
    ErrorDisplayProps,
    InactivityAdditionalAttributes,
    MaintenanceAdditionalAttributes,
} from "./types";

export const ErrorDisplay = ({
    type,
    img,
    title,
    description,
    actionButton,
    additionalProps,
    imageOnly,
    illustrationScheme,
    className,
    ...otherProps
}: ErrorDisplayProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const theme = useContext(ThemeContext);
    const mobile = useDesignToken(Breakpoint["sm-max"]) || Breakpoint["sm-max"];
    const tablet = useDesignToken(Breakpoint["lg-max"]) || Breakpoint["lg-max"];
    const defaultAssets = getErrorDisplayData(
        type,
        illustrationScheme || theme?.theme || "lifesg",
        mobile,
        tablet
    );
    const inactivityAttrs =
        type === "inactivity"
            ? (additionalProps as InactivityAdditionalAttributes | undefined)
            : undefined;

    const secondsLeft = inactivityAttrs?.secondsLeft;
    const reminderInterval = inactivityAttrs?.reminderInterval;
    const testId = otherProps["data-testid"] || "error-display";

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getCustomDescription = (): string | JSX.Element | undefined => {
        switch (type) {
            case "maintenance": {
                const typecastProps =
                    additionalProps as MaintenanceAdditionalAttributes;
                return additionalProps && typecastProps.dateString
                    ? defaultAssets?.renderDescription?.(typecastProps)
                    : description || undefined;
            }
            case "inactivity": {
                const typecastProps =
                    additionalProps as InactivityAdditionalAttributes;
                return additionalProps && typecastProps.secondsLeft
                    ? defaultAssets?.renderDescription?.(typecastProps)
                    : description || undefined;
            }
            default:
                return description || undefined;
        }
    };

    // =============================================================================
    // RENDER
    // =============================================================================
    if (!defaultAssets) {
        return null;
    }

    const renderActionButton = () => {
        const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
            children: "Proceed",
            ...actionButton,
        };

        return <Button className={styles.actionButton} {...buttonProps} />;
    };

    const updatedAssets = {
        ...defaultAssets,
        ...(img && { img }),
        ...(title && { title }),
        ...(getCustomDescription() && { description: getCustomDescription() }),
    };

    const renderContentDisplay = () => {
        if (updatedAssets.title || updatedAssets.description) {
            return (
                <div className={styles.textContainer}>
                    {updatedAssets.title &&
                        (typeof updatedAssets.title === "string" ? (
                            <Typography.HeadingMD
                                className={styles.title}
                                data-testid={`${testId}--title`}
                                data-id="error-display-title"
                                as="h2"
                                weight="semibold"
                            >
                                {updatedAssets.title}
                            </Typography.HeadingMD>
                        ) : (
                            updatedAssets.title
                        ))}
                    {updatedAssets.description && (
                        <Markup
                            className={styles.descriptionContainer}
                            data-testid={`${testId}--description`}
                            data-id="error-display-description"
                            baseTextSize="body-baseline"
                        >
                            {typeof updatedAssets.description === "string" ? (
                                <p>{updatedAssets.description}</p>
                            ) : (
                                updatedAssets.description
                            )}
                        </Markup>
                    )}
                </div>
            );
        }

        return null;
    };

    return (
        <div
            {...otherProps}
            data-testid={testId}
            className={clsx(styles.container, className)}
        >
            {type === "inactivity" && (
                <InactivityTimer
                    secondsLeft={secondsLeft}
                    reminderInterval={reminderInterval}
                    imageOnly={imageOnly}
                    hasCustomDescription={!!description}
                />
            )}
            <img
                {...updatedAssets.img}
                alt=""
                data-id="error-display-image"
                className={clsx(styles.img, updatedAssets.img?.className)}
            />
            {!imageOnly && renderContentDisplay()}
            {actionButton && renderActionButton()}
        </div>
    );
};
