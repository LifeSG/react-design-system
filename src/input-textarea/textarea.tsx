import React, { useEffect, useRef, useState } from "react";
import { TextareaCounter } from "./textarea-counter";
import { Element, PrefixSpan, PrefixWrapper, Wrapper } from "./textarea.style";
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
    const [prefixWidth, setPrefixWidth] = useState(0);
    const prefixRef = useRef<HTMLSpanElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Update prefix width on mount and when prefix changes
    useEffect(() => {
        if (prefix && prefixRef.current) {
            const { width } = prefixRef.current.getBoundingClientRect();
            setPrefixWidth(width);
        }
    }, [prefix]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = event.target.value;

        const transformedValue = transformValue
            ? transformValue(newValue ?? "")
            : newValue;

        setStateValue(transformedValue);
        event.target.value = transformedValue;
        if (onChange) onChange(event);
    };

    useEffect(() => {
        // Apply textIndent dynamically after prefix width is set
        if (prefix && textareaRef.current) {
            textareaRef.current.style.textIndent = `${prefixWidth}px`;
        }
    }, [prefixWidth]);

    return (
        <>
            {prefix ? (
                <PrefixWrapper>
                    {prefix && (
                        <PrefixSpan ref={prefixRef}>{prefix}</PrefixSpan>
                    )}

                    {/* Textarea (Uses textIndent) */}
                    <Element
                        ref={ref}
                        disabled={disabled}
                        value={stateValue}
                        onChange={handleChange}
                        error={error}
                        rows={rows}
                        style={{
                            textIndent: `${prefixWidth}px`,
                        }}
                        {...otherProps}
                    ></Element>
                </PrefixWrapper>
            ) : (
                <Element
                    ref={ref}
                    disabled={disabled}
                    value={stateValue}
                    onChange={handleChange}
                    error={error}
                    rows={rows}
                    {...otherProps}
                ></Element>
            )}
        </>
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
