import React from "react";
import { useTheme } from "styled-components";
import { getErrorDisplayData } from "./error-display-data";
import {
    ActionButton,
    Container,
    DescriptionContainer,
    Img,
    TextContainer,
    Title,
} from "./error-display.style";
import {
    ErrorDisplayProps,
    InactivityAdditionalAttributes,
    MaintenanceAdditionalAttributes,
} from "./types";
import { LifeSGTheme } from "../theme";

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
    const theme = useTheme();
    const defaultAssets = getErrorDisplayData(
        type,
        illustrationScheme || (theme || LifeSGTheme).resourceScheme,
        theme
    );

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

        return <ActionButton {...buttonProps} />;
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
                <TextContainer>
                    {updatedAssets.title &&
                        (typeof updatedAssets.title === "string" ? (
                            <Title
                                data-testid={`${testId}--title`}
                                data-id="error-display-title"
                                weight="semibold"
                            >
                                {updatedAssets.title}
                            </Title>
                        ) : (
                            updatedAssets.title
                        ))}
                    {updatedAssets.description && (
                        <DescriptionContainer
                            data-testid={`${testId}--description`}
                            data-id="error-display-description"
                        >
                            {typeof updatedAssets.description === "string" ? (
                                <p>{updatedAssets.description}</p>
                            ) : (
                                updatedAssets.description
                            )}
                        </DescriptionContainer>
                    )}
                </TextContainer>
            );
        }

        return null;
    };

    return (
        <Container {...otherProps} data-testid={testId}>
            <Img {...updatedAssets.img} alt="" data-id="error-display-image" />
            {!imageOnly && renderContentDisplay()}
            {actionButton && renderActionButton()}
        </Container>
    );
};
