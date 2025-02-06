import React, { useEffect, useState } from "react";
import { TextareaCounter } from "./textarea-counter";
import { Element, Wrapper } from "./textarea.style";
import { TextareaProps, TextareaRef } from "./types";

// =============================================================================
// BASE COMPONENT
// =============================================================================
const TextareaBaseComponent = (
    { value, disabled, error, rows = 5, prefix, ...otherProps }: TextareaProps,
    ref: TextareaRef
) => {
    const displayValue = () => {
        return prefix + (value ?? ""); // Ensures no "undefined"
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        // Prevent backspace when cursor is at the start (right after prefix)
        if (prefix && event.key === "Backspace") {
            const { selectionStart, selectionEnd } = event.currentTarget;

            // If the cursor is at the start of the user input (right after prefix), prevent backspace
            if (
                selectionStart === selectionEnd &&
                selectionStart <= prefix.length
            ) {
                event.preventDefault();
            }
        }
    };

    return (
        <Element
            ref={ref}
            disabled={disabled}
            value={prefix ? displayValue() : value}
            onKeyDown={handleKeyDown} // Add this to prevent prefix deletion
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
    {
        value,
        disabled,
        rows = 5,
        onChange,
        transformValue,
        prefix,
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
        let newValue = event.target.value;

        if (prefix && newValue.startsWith(prefix)) {
            newValue = newValue.replace(prefix, "");
        }

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
                {...otherProps}
            />
            {otherProps.maxLength && (
                <TextareaCounter
                    disabled={disabled}
                    value={stateValue}
                    maxLength={otherProps.maxLength}
                    renderCustomCounter={otherProps.renderCustomCounter}
                />
            )}
        </Wrapper>
    );
};

export const Textarea = React.forwardRef(TextareaComponent);
