import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { InputWrapper } from "../shared/input-wrapper/input-wrapper";
import { StringHelper } from "../util/string-helper";
import { ClearContainer, ClearIcon, InputElement } from "./input.style";
import { InputProps, InputRef } from "./types";

const Component = (
    {
        value,
        spacing,
        type,
        error,
        disabled,
        readOnly,
        onChange,
        onClear,
        allowClear = false,
        className,
        ...otherProps
    }: InputProps,
    ref: InputRef
): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    /**
     * We need this due to the clear button. To remain consistent if onChange
     * is not handled
     */
    const [inputValue, setInputValue] = useState<
        string | readonly string[] | number
    >(value);

    const elementRef = useRef<HTMLInputElement>();
    useImperativeHandle(ref, () => elementRef.current, []);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setInputValue(value);
    }, [value]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            if (shouldAllowSpacing()) {
                handleSpacingAndCaretPosition(event);
            } else {
                onChange(event);
            }
        } else {
            setInputValue(event.target.value);
        }
    };

    const handleClear = () => {
        if (onClear) {
            onClear();
        } else {
            setInputValue("");
        }

        if (elementRef && elementRef.current) {
            elementRef.current.focus();
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const shouldAllowSpacing = () => {
        return type === "tel" && spacing;
    };

    const convertInputString = (value: string | number | readonly string[]) => {
        if (!value) return "";
        if (shouldAllowSpacing()) {
            return StringHelper.transformWithSpaces(value, spacing);
        }
        return value;
    };

    const handleSpacingAndCaretPosition = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const element = event.target;
        const currentValue = element.value;

        // Send to handler unspaced value
        const valueWithoutSpace = element.value.replace(/\s/g, "");
        element.value = valueWithoutSpace;
        onChange(event);

        // reset element value
        element.value = currentValue;
    };

    const shouldShowClear = () => {
        return allowClear && !disabled && !readOnly && !!inputValue;
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    /**
     * To clear controlled input value, you have to pass in value as empty string,
     * then set `updatedValue` to empty string.
     * `updatedValue` for uncontrolled components remains as undefined such that the
     * user is free to edit the field. (else the value of the InputElement will
     * be set to empty string)
     */
    const updatedValue = inputValue
        ? convertInputString(inputValue)
        : inputValue;

    return (
        <InputWrapper
            disabled={disabled}
            $error={error}
            $readOnly={readOnly}
            className={className}
        >
            <InputElement
                data-testid="input"
                ref={elementRef}
                disabled={disabled}
                value={updatedValue}
                onChange={handleChange}
                type={type}
                readOnly={readOnly}
                {...otherProps}
            />
            {shouldShowClear() && (
                <ClearContainer onClick={handleClear}>
                    <ClearIcon />
                </ClearContainer>
            )}
        </InputWrapper>
    );
};

export const Input = React.forwardRef(Component);
