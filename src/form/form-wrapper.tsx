/**
 * This is a SUPPORTING component
 * (Do not include in the main export)
 *
 */

import { Children, ComponentType, cloneElement, useState } from "react";
import { SimpleIdGenerator } from "../util";
import { FormLabel } from "./form-label";
import {
    ErrorIcon,
    ErrorMessage,
    ErrorMessageContainer,
} from "./form-label.style";
import {
    ColDivContainer,
    Container,
    V2_ColDivContainer,
} from "./form-wrapper.style";
import { FormElementLayoutType, FormWrapperProps } from "./types";

export const FormWrapper = ({
    label,
    errorMessage: eRaw,
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
    "data-testid": testId,
    "data-error-testid": errorTestId,
}: FormWrapperProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const updatedLayoutType = getLayoutType();
    const errorMessage = typeof eRaw === "string" ? eRaw.trim() : eRaw;
    const [internalId] = useState(() => SimpleIdGenerator.generate());
    const labelId = `${id ?? internalId}-label`; // matches FormLabel
    const subtitleId = `${id ?? internalId}-label-subtitle`; // matches FormLabel
    const errorMessageId = `${id ?? internalId}-error-message`;

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    const isInvalidState = (): boolean => {
        return !!eRaw;
    };

    const hasSubtitleLabel = (): boolean => {
        return typeof label === "object" && !!label?.subtitle;
    };

    const getAriaDescribedBy = (): string | undefined => {
        return (
            [
                errorMessage ? errorMessageId : undefined,
                hasSubtitleLabel() ? subtitleId : undefined,
            ]
                .filter(Boolean)
                .join(" ") || undefined
        );
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
                    // FIXME: kept for backwards-compatibility
                    // in most cases data-testid should be separate from id
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
            "aria-describedby": getAriaDescribedBy(),
        };
        return Children.map(children, (child) =>
            cloneElement(child, ariaState)
        );
    };

    const ContainerComponent = getContainerComponent(updatedLayoutType);

    return (
        <ContainerComponent
            data-testid={testId}
            {...getContainerLayoutProps(updatedLayoutType)}
        >
            {label && renderFormLabel()}
            {renderChildren()}
            {errorMessage && (
                <ErrorMessageContainer>
                    <ErrorIcon aria-hidden />
                    <ErrorMessage
                        id={errorMessageId}
                        tabIndex={0}
                        data-testid={
                            errorTestId ??
                            // FIXME: kept for backwards-compatibility
                            // in most cases data-testid should be separate from id
                            (id ? `${id}-error-message` : "error-message")
                        }
                    >
                        {errorMessage}
                    </ErrorMessage>
                </ErrorMessageContainer>
            )}
        </ContainerComponent>
    );
};
