import React from "react";
import { InputElement } from "./input.style";
import { InputProps, InputRef } from "./types";
import { StringHelper } from "../../util/string-helper";

const Component = (props: InputProps, ref: InputRef) => {
    const { value, spacing, type, error, onChange, disabled, ...otherProps } =
        props;

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const convertInputString = (value: string | number | readonly string[]) => {
        if (!value) return "";
        if (type === "tel" && spacing) {
            return StringHelper.transformWithSpaces(value, spacing);
        }
        return value;
    };

    const handleSpacingAndCaretPosition = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const inputEl = event.target;
        const caretPosition = inputEl.selectionEnd;
        const valueWithoutSpace = inputEl.value.replace(/\s/g, "");
        inputEl.value = valueWithoutSpace;
        onChange(event);

        if (caretPosition !== inputEl.value.length) {
            inputEl.value = convertInputString(inputEl.value);
            inputEl.selectionEnd = caretPosition;
        }
    };

    // =============================================================================
    // EVENT HANDLER
    // =============================================================================
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (type === "tel" && spacing) {
            handleSpacingAndCaretPosition(event);
            return;
        }
        onChange(event);
    };

    // =============================================================================
    // RENDER
    // =============================================================================
    // to clear controlled input value, have to pass in value as empty string, then set updatedValue to empty string
    // updatedValue for uncontrolled components remains as undefined such that the user is free to edit the field. (else the value of the InputElement will be set to empty string always)
    const updatedValue = value ? convertInputString(value) : value;
    const onChangeFn = onChange ? onChangeHandler : undefined;

    return (
        <InputElement
            data-testid="input"
            ref={ref}
            disabled={disabled}
            value={updatedValue}
            error={error}
            onChange={onChangeFn}
            {...otherProps}
        />
    );
};

export const Input = React.forwardRef(Component);
