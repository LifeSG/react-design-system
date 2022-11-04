import React from "react";
import { StringHelper } from "../util/string-helper";
import { InputElement } from "./input.style";
import { InputProps, InputRef } from "./types";

const Component = (
    {
        value,
        spacing,
        type,
        error,
        disabled,
        onChange,
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

    return (
        <InputElement
            data-testid="input"
            ref={ref}
            disabled={disabled}
            value={updatedValue}
            error={error}
            onChange={onChangeFn}
            type={type}
            {...otherProps}
        />
    );
};

export const Input = React.forwardRef(Component);
