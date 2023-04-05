import React from "react";
import { ThemeSpec } from "src/theme";
import { useTheme } from "styled-components";
import { errorDisplayData } from "./error-display-data";
import {
    ActionButton,
    Container,
    DescriptionContainer,
    Img,
    TextContainer,
    Title,
} from "./error-display.style";
import {
    Error500AdditionalAttributes,
    ErrorDisplayProps,
    MaintenanceAdditionalAttributes,
} from "./types";

export const ErrorDisplay = ({
    type,
    img,
    title,
    description,
    actionButton,
    additionalProps,
    ...otherProps
}: ErrorDisplayProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const theme = useTheme();
    const defaultAssets = errorDisplayData(
        type,
        (theme as unknown as ThemeSpec).colorScheme
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
            case "500": {
                const typecastProps =
                    additionalProps as Error500AdditionalAttributes;
                return additionalProps && typecastProps.referenceId
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

    return (
        <Container {...otherProps} data-testid={testId}>
            <Img {...updatedAssets.img} alt="" />
            <TextContainer>
                <Title data-testid={`${testId}--title`}>
                    {updatedAssets.title}
                </Title>
                <DescriptionContainer data-testid={`${testId}--description`}>
                    {typeof updatedAssets.description === "string" ? (
                        <p>{updatedAssets.description}</p>
                    ) : (
                        updatedAssets.description
                    )}
                </DescriptionContainer>
            </TextContainer>
            {actionButton && renderActionButton()}
        </Container>
    );
};
