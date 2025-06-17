/**
 * This is a SUPPORTING component
 * (Do not include in the main export)
 *
 */

import { Children, ComponentType, cloneElement } from "react";
import { FormLabel } from "./form-label";
import { ErrorMessage } from "./form-label.style";
import {
    ColDivContainer,
    Container,
    V2_ColDivContainer,
} from "./form-wrapper.style";
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
    xxsCols,
    xsCols,
    smCols,
    mdCols,
    lgCols,
    xlCols,
    xxlCols,
    "data-error-testid": errorTestId,
}: FormWrapperProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const updatedLayoutType = getLayoutType();
    const labelId = id ? `${id}-label` : undefined;

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
            return "v2-grid";
        } else if (
            !layoutType &&
            (xxsCols ||
                xsCols ||
                smCols ||
                mdCols ||
                lgCols ||
                xlCols ||
                xxlCols)
        ) {
            return "grid";
        } else if (!layoutType) {
            return "flex";
        } else {
            return layoutType;
        }
    }

    const getContainerLayoutProps = (layoutType: FormElementLayoutType) => {
        switch (layoutType) {
            case "v2-grid":
                return {
                    mobileCols,
                    tabletCols,
                    desktopCols,
                };
            case "grid":
                return {
                    xxsCols,
                    xsCols,
                    smCols,
                    mdCols,
                    lgCols,
                    xlCols,
                    xxlCols,
                };
            case "flex":
                return undefined;
        }
    };

    const getContainerComponent = (
        layoutType: FormElementLayoutType
    ): ComponentType => {
        switch (layoutType) {
            case "v2-grid":
                return V2_ColDivContainer;
            case "grid":
                return ColDivContainer;
            case "flex":
                return Container;
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
                    id={labelId}
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
                id={labelId}
                disabled={disabled}
                {...label}
            />
        );
    };

    const renderChildren = (): JSX.Element | JSX.Element[] => {
        const ariaState = {
            "aria-invalid": isInvalidState(),
            "aria-describedby": isInvalidState() && getErrorTestMessageId(),
            "aria-labelledby": labelId,
        };
        return Children.map(children, (child) =>
            cloneElement(child, ariaState)
        );
    };

    const ContainerComponent = getContainerComponent(updatedLayoutType);

    return (
        <ContainerComponent {...getContainerLayoutProps(updatedLayoutType)}>
            {label && renderFormLabel()}
            {renderChildren()}
            {errorMessage && (
                <ErrorMessage
                    id={getErrorTestMessageId()}
                    tabIndex={0}
                    data-testid={getErrorTestMessageId()}
                >
                    {errorMessage}
                </ErrorMessage>
            )}
        </ContainerComponent>
    );
};
