import React from "react";
import { Icon } from "src/icon";
import { StringHelper } from "../util/string-helper";
import { Container, IconContainer, InputElement } from "./input.style";
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
    // CONST, STATE, REFS
    // =============================================================================
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (shouldAllowSpacing()) {
            handleSpacingAndCaretPosition(event);
            return;
        }
        onChange(event);
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
    const onChangeFn = onChange ? handleChange : undefined;
    const onClearFn = onClear ? onClear : undefined;
    const showClearButton = allowClear && !disabled && !readOnly && !error;

    return (
        <Container
            error={error}
            disabled={disabled}
            readOnly={readOnly}
            {...otherProps}
        >
            <InputElement
                data-testid="input"
                ref={ref}
                disabled={disabled}
                value={updatedValue}
                error={error}
                onChange={onChangeFn}
                type={type}
                readOnly={readOnly}
                {...otherProps}
            />
            {showClearButton && (
                <IconContainer onClick={onClearFn}>
                    <Icon type="cross" />
                </IconContainer>
            )}
        </Container>
    );
};

export const Input = React.forwardRef(Component);
