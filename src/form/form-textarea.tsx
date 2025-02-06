import React, { useEffect, useState } from "react";
import { TextareaBase } from "../input-textarea/textarea";
import { TextareaCounter } from "../input-textarea/textarea-counter";
import { TextareaRef } from "../input-textarea/types";
import {
    ErrorMessageContainer,
    ErrorMessageLabel,
    LabelContainer,
} from "./form-textarea.style";
import { FormWrapper } from "./form-wrapper";
import { FormTextareaProps } from "./types";

const FormTextareaComponent = (
    props: FormTextareaProps,
    ref: TextareaRef
): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const {
        label,
        value,
        errorMessage,
        id = "form-textarea",
        "data-error-testid": errorTestId,
        "data-testid": testId,
        onChange,
        layoutType,
        mobileCols,
        tabletCols,
        desktopCols,
        transformValue,
        prefix = "",
        ...otherProps
    } = props;

    const [stateValue, setStateValue] = useState<
        string | number | readonly string[]
    >(value);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setStateValue(value);
    }, [value]);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    const getErrorTestMessageId = () => {
        return errorTestId || (id ? `${id}-error-message` : "error-message");
    };

    // =============================================================================
    // EVENT HANDLER
    // =============================================================================
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newValue = event.target.value;

        if (prefix) {
            // Ensure the prefix is always at the beginning
            if (!newValue.startsWith(prefix)) {
                newValue = prefix + newValue.trimStart();
            }

            // Prevent user from deleting the prefix
            if (newValue.length < prefix.length) {
                newValue = prefix;
            }

            // Extract user input (ensuring it's never undefined)
            const userInput = newValue.slice(prefix.length) || ""; // Ensure empty string, not undefined

            setStateValue(userInput);
            event.target.value = prefix + userInput; // Update displayed value

            // Ensure cursor stays in correct position
            requestAnimationFrame(() => {
                const cursorPosition = Math.max(
                    prefix.length,
                    event.target.selectionStart || 0
                );
                event.target.setSelectionRange(cursorPosition, cursorPosition);
            });

            // Pass only user input (without prefix) to parent `onChange`
            if (onChange) {
                const syntheticEvent = {
                    ...event,
                    target: { ...event.target, value: userInput },
                };
                onChange(
                    syntheticEvent as React.ChangeEvent<HTMLTextAreaElement>
                );
            }
        } else {
            const transformedValue = transformValue
                ? transformValue(newValue ?? "")
                : newValue;

            setStateValue(transformedValue);
            event.target.value = transformedValue;
            if (onChange) onChange(event);
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderBottomLabels = () => {
        if (!errorMessage && !otherProps.maxLength) return <></>;
        return (
            <LabelContainer>
                {errorMessage && (
                    <ErrorMessageContainer>
                        <ErrorMessageLabel
                            weight="semibold"
                            data-testid={getErrorTestMessageId()}
                        >
                            {errorMessage}
                        </ErrorMessageLabel>
                    </ErrorMessageContainer>
                )}
                {otherProps.maxLength && (
                    <TextareaCounter
                        disabled={otherProps.disabled}
                        value={stateValue}
                        maxLength={otherProps.maxLength}
                        renderCustomCounter={otherProps.renderCustomCounter}
                    />
                )}
            </LabelContainer>
        );
    };

    return (
        <FormWrapper
            id={id}
            label={label}
            disabled={otherProps.disabled}
            layoutType={layoutType}
            mobileCols={mobileCols}
            tabletCols={tabletCols}
            desktopCols={desktopCols}
        >
            <TextareaBase
                id={`${id}-base`}
                data-testid={testId || id}
                value={stateValue}
                error={!!errorMessage}
                onChange={handleChange}
                ref={ref}
                prefix={prefix}
                {...otherProps}
            />
            {renderBottomLabels()}
        </FormWrapper>
    );
};

export const FormTextarea = React.forwardRef(FormTextareaComponent);
