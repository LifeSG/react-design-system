// Generated with util/create-component.js
import React, { useEffect, useState } from "react";
import { TextareaLabel } from "./textarea-label";
import { Element, Wrapper } from "./textarea.style";
import { TextareaProps, TextareaRef } from "./types";

/**
 * Component that does not with the counter. Is used by FormTextAreaComponent
 */
const TextareaBaseComponent = (props: TextareaProps, ref: TextareaRef) => {
    const { disabled, value, error, rows, ...otherProps } = props;
    return (
        <Element
            ref={ref}
            disabled={disabled}
            value={value}
            error={error}
            rows={rows || 5}
            {...otherProps}
        />
    );
};

export const TextareaBase = React.forwardRef(TextareaBaseComponent);

/**
 * Component that comes with the counter. Will be the main exportable
 */
const TextareaCounterComponent = (props: TextareaProps, ref: TextareaRef) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const { disabled, value, rows, onChange, ...otherProps } = props;
    const [counterLabel, setCounterLabel] = useState<string>("");
    const [stateValue, setStateValue] = useState<
        string | number | readonly string[]
    >(value);

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
    const renderCounterLabel = () => {
        return otherProps.maxLength ? (
            <TextareaLabel
                label={counterLabel}
                disabled={disabled}
                data-testid="counter-label"
            />
        ) : null;
    };

    return (
        <Wrapper>
            <Element
                ref={ref}
                disabled={disabled}
                value={stateValue}
                rows={rows || 5}
                onChange={handleChange}
                {...otherProps}
            />
            {renderCounterLabel()}
        </Wrapper>
    );
};

export const TextareaWithCounter = React.forwardRef(TextareaCounterComponent);
