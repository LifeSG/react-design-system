import React, { useEffect, useState } from "react";
import { TextareaCounter } from "./textarea-counter";
import { Element, Wrapper } from "./textarea.style";
import { TextareaProps, TextareaRef } from "./types";

// =============================================================================
// BASE COMPONENT
// =============================================================================
const TextareaBaseComponent = (
    { value, disabled, error, rows = 5, ...otherProps }: TextareaProps,
    ref: TextareaRef
) => {
    return (
        <Element
            ref={ref}
            disabled={disabled}
            value={value}
            error={error}
            rows={rows}
            {...otherProps}
        />
    );
};

export const TextareaBase = React.forwardRef(TextareaBaseComponent);

// =============================================================================
// MODULE COMPONENT (comes with the counter)
// =============================================================================

const TextareaComponent = (
    { value, disabled, rows = 5, onChange, ...otherProps }: TextareaProps,
    ref: TextareaRef
) => {
    // -------------------------------------------------------------------------
    // CONST, STATE, REF
    // -------------------------------------------------------------------------
    const [stateValue, setStateValue] = useState<
        string | number | readonly string[]
    >(value);

    // -------------------------------------------------------------------------
    // EFFECTS
    // -------------------------------------------------------------------------
    useEffect(() => {
        setStateValue(value);
    }, [value]);

    // -------------------------------------------------------------------------
    // EVENT HANDLER
    // -------------------------------------------------------------------------
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        if (!(otherProps.maxLength && newValue.length > otherProps.maxLength)) {
            setStateValue(newValue);
            event.target.value = newValue;
            if (onChange) onChange(event);
        }
    };

    // -------------------------------------------------------------------------
    // RENDER FUNCTIONS
    // -------------------------------------------------------------------------
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
            {otherProps.maxLength && (
                <TextareaCounter
                    disabled={disabled}
                    value={stateValue}
                    maxLength={otherProps.maxLength}
                />
            )}
        </Wrapper>
    );
};

export const Textarea = React.forwardRef(TextareaComponent);
