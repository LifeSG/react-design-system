import React, { useImperativeHandle, useRef } from "react";
import { StringHelper, useNextInputState } from "../util";
import {
    ClearButton,
    ClearIcon,
    DefaultWrapper,
    InputElement,
    NoBorderWrapper,
} from "./input.style";
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
        styleType = "bordered",
        ...otherProps
    }: InputProps,
    ref: InputRef
): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const elementRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => elementRef.current!, []);

    const getNextInputState = useNextInputState({
        ref: elementRef,
        formatter: (value) => StringHelper.transformWithSpaces(value, spacing),
    });

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
        }
    };

    const handleClear = () => {
        if (onClear) onClear();

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
        const nextState = getNextInputState();
        if (!nextState) return;

        const { nextValue, updateCaretPosition } = nextState;

        // Send to handler unspaced value
        const valueWithoutSpace = nextValue.replace(/\s/g, "");
        event.target.value = valueWithoutSpace;
        onChange?.(event);

        updateCaretPosition();
    };

    const shouldShowClear = () => {
        return allowClear && !disabled && !readOnly && !!value;
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
    const updatedValue = value ? convertInputString(value) : value;
    const showClear = shouldShowClear();

    const renderInputElement = () => {
        return (
            <>
                <InputElement
                    data-testid="input"
                    ref={elementRef}
                    disabled={disabled}
                    value={updatedValue}
                    onChange={handleChange}
                    type={type}
                    readOnly={readOnly}
                    $showClear={showClear}
                    $styleType={styleType}
                    {...otherProps}
                />
                {showClear && (
                    <ClearButton
                        onClick={handleClear}
                        type="button"
                        $styleType={styleType}
                    >
                        <ClearIcon aria-hidden />
                    </ClearButton>
                )}
            </>
        );
    };

    return (
        <>
            {styleType === "no-border" ? (
                <NoBorderWrapper className={className}>
                    {renderInputElement()}
                </NoBorderWrapper>
            ) : (
                <DefaultWrapper
                    $disabled={disabled}
                    $error={error}
                    $readOnly={readOnly}
                    className={className}
                >
                    {renderInputElement()}
                </DefaultWrapper>
            )}
        </>
    );
};

export const Input = React.forwardRef(Component);
