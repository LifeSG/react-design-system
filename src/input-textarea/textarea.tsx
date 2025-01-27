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
            $error={error}
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
    {
        value,
        disabled,
        error,
        rows = 5,
        onChange,
        transformValue,
        ...otherProps
    }: TextareaProps,
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

        const transformedValue = transformValue
            ? transformValue(newValue ?? "")
            : newValue;

        setStateValue(transformedValue);
        event.target.value = transformedValue;
        if (onChange) onChange(event);
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
                $error={error}
                {...otherProps}
            />
            {otherProps.maxLength && (
                <TextareaCounter
                    value={stateValue}
                    maxLength={otherProps.maxLength}
                    renderCustomCounter={otherProps.renderCustomCounter}
                />
            )}
        </Wrapper>
    );
};

export const Textarea = React.forwardRef(TextareaComponent);
