import React from "react";
import { useTheme } from "styled-components";
import { BaseTheme } from "../theme";
import { getErrorDisplayData } from "./error-display-data";
import {
    ActionButton,
    Container,
    DescriptionContainer,
    Img,
    TextContainer,
    Title,
} from "./error-display.style";
import { ErrorDisplayProps, MaintenanceAdditionalAttributes } from "./types";

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
}: ErrorDisplayProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const theme = useTheme();
    const defaultAssets = getErrorDisplayData(
        type,
        illustrationScheme || (theme || BaseTheme).resourceScheme
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
                    ? defaultAssets.renderDescription(typecastProps)
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
