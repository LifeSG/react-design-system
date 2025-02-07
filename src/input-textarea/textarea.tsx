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
        let { selectionStart, selectionEnd } = event.target;

        if (prefix) {
            // Ensure prefix is always present
            if (!newValue.startsWith(prefix)) {
                newValue = prefix + newValue.trimStart();
            }

            // Prevent deletion of the prefix
            if (newValue.length < prefix.length) {
                newValue = prefix;
            }

            // Extract user input (excluding prefix)
            let userInput = newValue.slice(prefix.length);

            // User selects inside the prefix → Move cursor to end of user input
            if (
                (selectionStart < prefix.length ||
                    selectionEnd <= prefix.length) &&
                userInput
            ) {
                requestAnimationFrame(() => {
                    event.target.setSelectionRange(
                        event.target.value.length,
                        event.target.value.length
                    );
                });
                return;
            }

            // Apply transformation if provided
            const transformedValue = transformValue
                ? transformValue(userInput)
                : userInput;

            // Update state
            setStateValue(transformedValue);

            // Ensure prefix is added correctly without duplication
            event.target.value = prefix + transformedValue;

            // Adjust cursor position correctly
            requestAnimationFrame(() => {
                let newCursorPosition = Math.max(
                    selectionStart - (transformedValue.length === 0 ? 1 : 0),
                    prefix.length
                );
                event.target.setSelectionRange(
                    newCursorPosition,
                    newCursorPosition
                );
            });

            // Fire the onChange event with correct user input (excluding prefix)
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
            // Handle normal input when no prefix is used
            const transformedValue = transformValue
                ? transformValue(newValue ?? "")
                : newValue;
            setStateValue(transformedValue);
            event.target.value = transformedValue;
            if (onChange) onChange(event);
        }
    };

    const displayValue = () => {
        return prefix ? prefix + (stateValue ?? "") : stateValue;
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (!prefix) return;

        const { selectionStart } = event.currentTarget;

        // Prevent backspace in prefix
        if (event.key === "Backspace" && selectionStart <= prefix.length) {
            event.preventDefault();
            return;
        }

        // Prevent left arrow from moving into prefix
        if (event.key === "ArrowLeft" && selectionStart <= prefix.length) {
            event.preventDefault();
            return;
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
            value={displayValue()}
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
