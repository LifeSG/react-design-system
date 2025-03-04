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
        maxLength,
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
            // Ensure prefix is always present
            if (!newValue.startsWith(prefix)) {
                newValue = prefix + newValue.trimStart();
            }

            // Prevent deleting the prefix
            if (newValue.length < prefix.length) {
                newValue = prefix;
            }

            const cursorPosition = event.target.selectionStart || 0;

            // Ensure backspace does not delete the prefix
            if (cursorPosition < prefix.length) {
                event.preventDefault();
                return;
            }

            // Extract user input
            const userInput = newValue.slice(prefix.length);

            // Transform the input if needed
            const transformedValue = transformValue
                ? transformValue(userInput)
                : userInput;

            // Update state and input field
            setStateValue(transformedValue);
            event.target.value = prefix + transformedValue;

            // Pass only the user input (without prefix) to `onChange`
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

    const getDisplayValue = () => {
        return prefix ? prefix + (stateValue ?? "") : stateValue;
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (!prefix) return;

        const { selectionStart } = event.currentTarget;

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
            value={getDisplayValue()}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            $error={error}
            rows={rows}
            maxLength={
                prefix && maxLength ? prefix.length + maxLength : maxLength
            }
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
        string | number | readonly string[] | undefined
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
        if (onChange) onChange(event);
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
                    value={stateValue}
                    maxLength={maxLength}
                    renderCustomCounter={renderCustomCounter}
                />
            )}
        </Wrapper>
    );
};

export const Textarea = React.forwardRef(TextareaComponent);
