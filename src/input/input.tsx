import React, { useImperativeHandle, useRef } from "react";
import { StringHelper } from "../util/string-helper";
import {
    ClearContainer,
    ClearIcon,
    Container,
    InputElement,
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
        ...otherProps
    }: InputProps,
    ref: InputRef
): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const elementRef = useRef<HTMLInputElement>();
    useImperativeHandle(ref, () => elementRef.current, []);

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

    return (
        <Container
            error={error}
            disabled={disabled}
            readOnly={readOnly}
            className={otherProps.className}
        >
            <InputElement
                data-testid="input"
                ref={elementRef}
                disabled={disabled}
                value={updatedValue}
                error={error}
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
        </Container>
    );
};

export const Input = React.forwardRef(Component);
