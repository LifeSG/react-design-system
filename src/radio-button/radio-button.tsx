import React from "react";
import {
    Container,
    Input,
    StyledCheckedIcon,
    StyledUnCheckedIcon,
} from "./radio-button.styles";
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

    const renderIcon = () => {
        return checked ? (
            <StyledCheckedIcon
                data-testid="radio-checked"
                $disabled={disabled}
            />
        ) : (
            <StyledUnCheckedIcon
                data-testid="radio-unchecked"
                $disabled={disabled}
            />
        );
    };

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
            {renderIcon()}
        </Container>
    );
};
