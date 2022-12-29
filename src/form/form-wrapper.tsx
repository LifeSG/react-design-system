/**
 * This is a SUPPORTING component
 * (Do not include in the main export)
 *
 */

import { Children, cloneElement } from "react";
import { FormLabel } from "./form-label";
import { ErrorMessage } from "./form-label.style";
import { Container } from "./form-wrapper.style";
import { FormWrapperProps } from "./types";

export const FormWrapper = ({
    label,
    errorMessage,
    id,
    disabled,
    children,
    "data-error-testid": errorTestId,
}: FormWrapperProps): JSX.Element => {
    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    const getErrorTestMessageId = (): string => {
        return errorTestId || (id ? `${id}-error-message` : "error-message");
    };

    const isInvalidState = (): boolean => {
        return !!errorMessage;
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderFormLabel = (): JSX.Element => {
        if (typeof label === "string") {
            return (
                <FormLabel
                    htmlFor={`${id}-base`}
                    data-testid={id ? `${id}-label` : "form-label"}
                    disabled={disabled}
                >
                    {label}
                </FormLabel>
            );
        }
        return (
            <FormLabel
                htmlFor={`${id}-base`}
                data-testid={id ? `${id}-label` : "form-label"}
                disabled={disabled}
                {...label}
            />
        );
    };

    const renderChildren = (): JSX.Element | JSX.Element[] => {
        const ariaState = {
            "aria-invalid": isInvalidState(),
            "aria-describedby": isInvalidState() && getErrorTestMessageId(),
        };
        return Children.map(children, (child) =>
            cloneElement(child, ariaState)
        );
    };

    return (
        <Container>
            {label && renderFormLabel()}
            {renderChildren()}
            {errorMessage && (
                <ErrorMessage
                    id={getErrorTestMessageId()}
                    weight="semibold"
                    tabIndex={0}
                    data-testid={getErrorTestMessageId()}
                >
                    {errorMessage}
                </ErrorMessage>
            )}
        </Container>
    );
};
