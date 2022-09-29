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
    {
        label,
        value,
        errorMessage,
        "data-error-testid": testId,
        id = "form-textarea",
        onChange,
        ...otherProps
    }: FormTextareaProps,
    ref: TextareaRef
): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
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
        return testId || (id ? `${id}-error-message` : "error-message");
    };

    // =============================================================================
    // EVENT HANDLER
    // =============================================================================
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        if (!(otherProps.maxLength && newValue.length > otherProps.maxLength)) {
            setStateValue(newValue);
            event.target.value = newValue;
            if (onChange) onChange(event);
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderBottomLabels = () => {
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
                    />
                )}
            </LabelContainer>
        );
    };

    return (
        <FormWrapper id={id} label={label} disabled={otherProps.disabled}>
            <TextareaBase
                id={`${id}-base`}
                data-testid={id || "textarea"}
                value={stateValue}
                error={!!errorMessage}
                onChange={handleChange}
                ref={ref}
                {...otherProps}
            />
            {renderBottomLabels()}
        </FormWrapper>
    );
};

export const FormTextarea = React.forwardRef(FormTextareaComponent);
