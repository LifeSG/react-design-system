import React, { useEffect, useState } from "react";
import { TextareaCounter } from "./textarea-counter";
import { Element, Wrapper } from "./textarea.style";
import { TextareaProps, TextareaRef } from "./types";

// =============================================================================
// BASE COMPONENT
// =============================================================================
const TextareaBaseComponent = (
    {
        value,
        disabled,
        error,
        rows = 5,
        prefix,
        transformValue,
        onChange,
        ...otherProps
    }: TextareaProps,
    ref: TextareaRef
) => {
    const [stateValue, setStateValue] = useState(value);

    useEffect(() => {
        setStateValue(value);
    }, [value]);

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

            // Extract user input
            const userInput = newValue.slice(prefix.length);

            const transformedValue = transformValue
                ? transformValue(userInput ?? "")
                : userInput;

            setStateValue(transformedValue);

            event.target.value = prefix + transformedValue; // Update displayed value

            // Pass only user input (without prefix) to parent `onChange`
            if (onChange) {
                const syntheticEvent = {
                    ...event,
                    target: { ...event.target, value: transformedValue },
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

    const displayValue = () => {
        return prefix + (stateValue ?? ""); // Ensures no "undefined"
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (!prefix) return;

        const { selectionStart, selectionEnd } = event.currentTarget;

        // Prevent backspace in prefix
        if (event.key === "Backspace" && selectionStart <= prefix.length) {
            event.preventDefault();
        }

        // Prevent left arrow from moving into prefix
        if (event.key === "ArrowLeft" && selectionStart <= prefix.length) {
            event.preventDefault();
        }

        // Prevent "Home" key from moving cursor to beginning
        if (event.key === "Home") {
            event.preventDefault();
            requestAnimationFrame(() => {
                event.currentTarget.setSelectionRange(
                    prefix.length,
                    prefix.length
                );
            });
        }
    };

    return (
        <Element
            ref={ref}
            disabled={disabled}
            value={prefix ? displayValue() : stateValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
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
        maxLength,
        renderCustomCounter,
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
        setStateValue(newValue);
    };

    // -------------------------------------------------------------------------
    // RENDER FUNCTIONS
    // -------------------------------------------------------------------------
    return (
        <Wrapper>
            <TextareaBase
                ref={ref}
                disabled={disabled}
                value={stateValue}
                rows={rows || 5}
                onChange={handleChange}
                prefix={prefix}
                transformValue={transformValue}
                maxLength={maxLength}
                {...otherProps}
            />
            {maxLength && (
                <TextareaCounter
                    disabled={disabled}
                    value={stateValue}
                    maxLength={maxLength}
                    renderCustomCounter={renderCustomCounter}
                />
            )}
        </Wrapper>
    );
};

export const Textarea = React.forwardRef(TextareaComponent);
