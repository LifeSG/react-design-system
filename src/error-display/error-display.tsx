import type React from "react";
import { useContext } from "react";

import { ThemeContext } from "../theme/theme-provider/context";
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
    ...otherProps
}: ErrorDisplayProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const theme = useContext(ThemeContext);
    const defaultAssets = getErrorDisplayData(
        type,
        illustrationScheme || theme?.theme || "lifesg"
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

        return <styles.ActionButton {...buttonProps} />;
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
                <styles.TextContainer>
                    {updatedAssets.title &&
                        (typeof updatedAssets.title === "string" ? (
                            <styles.Title
                                data-testid={`${testId}--title`}
                                data-id="error-display-title"
                                forwardedAs="h2"
                                weight="semibold"
                            >
                                {updatedAssets.title}
                            </styles.Title>
                        ) : (
                            updatedAssets.title
                        ))}
                    {updatedAssets.description && (
                        <styles.DescriptionContainer
                            data-testid={`${testId}--description`}
                            data-id="error-display-description"
                            baseTextSize="body-baseline"
                        >
                            {typeof updatedAssets.description === "string" ? (
                                <p>{updatedAssets.description}</p>
                            ) : (
                                updatedAssets.description
                            )}
                        </styles.DescriptionContainer>
                    )}
                </styles.TextContainer>
            );
        }

        return null;
    };

    return (
        <styles.Container {...otherProps} data-testid={testId}>
            {type === "inactivity" && (
                <InactivityTimer
                    secondsLeft={secondsLeft}
                    reminderInterval={reminderInterval}
                    imageOnly={imageOnly}
                    hasCustomDescription={!!description}
                />
            )}
            <styles.Img
                {...updatedAssets.img}
                alt=""
                data-id="error-display-image"
            />
            {!imageOnly && renderContentDisplay()}
            {actionButton && renderActionButton()}
        </styles.Container>
    );
};
