import React, { useEffect, useState } from "react";
import { TextareaBase } from "../textarea/textarea";
import { FormTextareaProps } from "./types";
import { Container } from "./form-basic.style";
import { TextareaRef } from "../textarea/types";
import { TextareaLabel } from "../textarea/textarea-label";
import { FormLabel } from "./form-label";

const FormTextareaComponent = (props: FormTextareaProps, ref: TextareaRef) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { label, errorMessage, value, onChange, ...otherProps } = props;
    const [stateValue, setStateValue] = useState<
        string | number | readonly string[]
    >(value);
    const id = otherProps.id || "form-textarea";

    const [counterLabel, setCounterLabel] = useState<string>("");

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setCounterLabel(getCounterLabel(`${value || ""}`));
        setStateValue(value);
    }, [value, otherProps.maxLength]);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const getCounterLabel = (value: string) => {
        if (otherProps.maxLength) {
            const remainingLength = otherProps.maxLength - value.length;
            if (remainingLength <= 1) {
                return `${remainingLength} character`;
            } else {
                return `${remainingLength} characters`;
            }
        }

        return "";
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
    const renderFormLabel = () => {
        if (label && typeof label === "string") {
            return (
                <FormLabel
                    htmlFor={id}
                    data-testid={id ? `${id}-label` : "form-label"}
                    disabled={otherProps.disabled}
                    text={label}
                />
            );
        } else if (label && typeof label !== "string") {
            return (
                <FormLabel
                    htmlFor={id}
                    data-testid={id ? `${id}-label` : "form-label"}
                    disabled={otherProps.disabled}
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
            <TextareaBase
                id={`${id}-base`}
                data-testid="textarea"
                value={stateValue}
                error={!!errorMessage}
                onChange={handleChange}
                ref={ref}
                {...otherProps}
            />
            <TextareaLabel
                label={counterLabel}
                disabled={otherProps.disabled}
                errorMessage={errorMessage}
                id={id}
            />
        </Container>
    );
};

export const FormTextarea = React.forwardRef(FormTextareaComponent);
