import React from "react";
import { ERROR_DISPLAY_DATA } from "./error-display-data";
import {
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
    additionalProps,
    ...otherProps
}: ErrorDisplayProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const defaultAssets = ERROR_DISPLAY_DATA.get(type);
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

    const updatedAssets = {
        ...defaultAssets,
        ...(img && { img }),
        ...(title && { title }),
        ...(getCustomDescription() && { description: getCustomDescription() }),
    };

    return (
        <Container {...otherProps} data-testid={testId}>
            <Img {...updatedAssets.img} alt="error" />
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
        </Container>
    );
};
