/**
 * This is a SUPPORTING component
 * (Do not include in the main export)
 *
 */

import { Children, cloneElement } from "react";
import { FormLabel } from "./form-label";
import { ErrorMessage } from "./form-label.style";
import { ColDivContainer, Container } from "./form-wrapper.style";
import { FormElementLayoutType, FormWrapperProps } from "./types";

export const FormWrapper = ({
    label,
    errorMessage,
    id,
    disabled,
    children,
    layoutType,
    mobileCols,
    tabletCols,
    desktopCols,
    "data-error-testid": errorTestId,
}: FormWrapperProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const updatedLayoutType = getLayoutType();

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    const getErrorTestMessageId = (): string => {
        return errorTestId || (id ? `${id}-error-message` : "error-message");
    };

    const isInvalidState = (): boolean => {
        return !!errorMessage;
    };

    function getLayoutType(): FormElementLayoutType {
        if (!layoutType && (mobileCols || tabletCols || desktopCols)) {
            return "grid";
        } else if (!layoutType) {
            return "flex";
        } else {
            return layoutType;
        }
    }

    const getContainerLayoutProps = (layoutType: FormElementLayoutType) => {
        switch (layoutType) {
            case "grid":
                return {
                    mobileCols,
                    tabletCols,
                    desktopCols,
                };
            case "flex":
                return undefined;
        }
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

    const ContainerComponent =
        updatedLayoutType === "grid" ? ColDivContainer : Container;

    return (
        <ContainerComponent {...getContainerLayoutProps(updatedLayoutType)}>
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
        </ContainerComponent>
    );
};
