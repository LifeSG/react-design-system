import { CrossIcon } from "@lifesg/react-icons/cross";
import clsx from "clsx";
import React, { useImperativeHandle, useRef } from "react";

import { BasicButton, BasicInput, InputBox } from "../shared/input-wrapper";
import { StringHelper, useNextInputState } from "../util";
import * as styles from "./input.styles";
import type { InputProps, InputRef } from "./types";

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
        const inputClassName = clsx(styles.inputElement, {
            [styles.inputElementDisabled]: disabled,
            [styles.inputElementPaddingLeft]:
                styleType !== "no-border" && !readOnly,
            [styles.inputElementPaddingRight]:
                styleType !== "no-border" && !readOnly && !showClear,
        });

        const clearButtonClassName = clsx(
            styles.clearButton,
            styleType === "no-border" && styles.clearButtonNoBorder
        );

        return (
            <>
                <BasicInput
                    data-testid="input"
                    ref={elementRef}
                    aria-disabled={disabled}
                    value={updatedValue}
                    onChange={handleChange}
                    type={type}
                    readOnly={readOnly || disabled}
                    disabled={disabled}
                    className={inputClassName}
                    {...otherProps}
                />
                {showClear && (
                    <BasicButton
                        onClick={handleClear}
                        type="button"
                        aria-label="Clear input"
                        className={clearButtonClassName}
                    >
                        <CrossIcon className={styles.clearIcon} aria-hidden />
                    </BasicButton>
                )}
            </>
        );
    };

    return (
        <>
            {styleType === "no-border" ? (
                <div className={clsx(styles.noBorderWrapper, className)}>
                    {renderInputElement()}
                </div>
            ) : (
                <InputBox
                    className={clsx(styles.defaultWrapper, className, {
                        [styles.defaultWrapperDisabled]: disabled,
                        [styles.defaultWrapperError]: error,
                        [styles.defaultWrapperReadOnly]: readOnly,
                    })}
                    disabled={disabled}
                    error={error}
                    readOnly={readOnly}
                >
                    {renderInputElement()}
                </InputBox>
            )}
        </>
    );
};

export const Input = React.forwardRef(Component);
