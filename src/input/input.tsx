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

const shouldAllowSpacing = (
    type: string | undefined,
    spacing: number | undefined
): spacing is number => {
    return type === "tel" && !!spacing;
};

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
    const allowSpacing = shouldAllowSpacing(type, spacing);
    const elementRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => elementRef.current!, []);

    const getNextInputState = useNextInputState({
        ref: elementRef,
        formatter: (value) => {
            return allowSpacing
                ? StringHelper.transformWithSpaces(value, spacing)
                : value;
        },
    });

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            if (allowSpacing) {
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
    const convertInputString = (value: string | number | readonly string[]) => {
        if (!value) return "";
        if (allowSpacing) {
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
                    aria-disabled={disabled}
                    value={updatedValue}
                    onChange={handleChange}
                    type={type}
                    readOnly={readOnly || disabled}
                    $showClear={showClear}
                    $styleType={styleType}
                    $visuallyReadOnly={readOnly}
                    {...otherProps}
                />
                {showClear && (
                    <ClearButton
                        onClick={handleClear}
                        type="button"
                        aria-label="Clear"
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
