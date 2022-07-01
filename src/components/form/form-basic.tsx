import React from "react";
import { TextProps } from "../text/types";
import { Container, ErrorMessage } from "./form-basic.style";
import { FormLabel } from "./form-label";
import { FormLabelProps, FormWrapperProps } from "./types";

/**
 * SUPPORTING COMPONENT (do not include in main export)
 */
export const FormWrapper = (props: FormWrapperProps) => {
    const { label, errorMessage, errorMessageTestId, id, disabled, children } =
        props;

    const renderErrorMessageTestId = () => {
        if (errorMessageTestId) {
            return errorMessageTestId;
        } else if (id) {
            return `${id}-error-message`;
        } else {
            return "error-message";
        }
    };

    const renderFormLabel = () => {
        if (label && typeof label === "string") {
            return (
                <FormLabel
                    htmlFor={id}
                    data-testid={id ? `${id}-label` : "form-label"}
                    disabled={disabled}
                    text={label}
                />
            );
        } else if (label && typeof label !== "string") {
            return (
                <FormLabel
                    htmlFor={id}
                    data-testid={id ? `${id}-label` : "form-label"}
                    disabled={disabled}
                    {...label}
                />
            );
        } else {
            return null;
        }
    };

    return (
        <Container>
            {renderFormLabel()}
            {children}
            {errorMessage && (
                <ErrorMessage
                    weight="semibold"
                    data-testid={renderErrorMessageTestId()}
                >
                    {errorMessage}
                </ErrorMessage>
            )}
        </Container>
    );
};

export const FormErrorMessage = (props: TextProps) => {
    return <ErrorMessage weight="semibold" {...props} />;
};
