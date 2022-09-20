import React from "react";
import { Checkmark, Container, Input } from "./radio-button.styles";
import { RadioButtonProps } from "./types";

export const RadioButton = ({
    className,
    checked,
    disabled,
    onChange,
    ...otherProps
}: RadioButtonProps) => {
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled) {
            onChange?.(event);
        }
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    return (
        <Container
            $selected={checked}
            $disabled={disabled}
            className={className}
            data-testid="radio-button"
        >
            <Input
                type="radio"
                data-testid="radio-input"
                onChange={handleOnChange}
                checked={checked}
                disabled={disabled}
                {...otherProps}
            />
            <Checkmark
                id="checkmark"
                data-testid="checkmark"
                $disabled={disabled}
                $selected={checked}
            />
        </Container>
    );
};
