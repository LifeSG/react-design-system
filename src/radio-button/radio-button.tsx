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
    displaySize = "default",
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
                aria-hidden="true"
            />
        ) : (
            <StyledUnCheckedIcon
                data-testid="radio-unchecked"
                $disabled={disabled}
                aria-hidden="true"
            />
        );
    };

    return (
        <Container
            $selected={checked}
            $disabled={disabled}
            className={className}
            $displaySize={displaySize}
            data-testid="radio-button"
        >
            <Input
                type="radio"
                id={otherProps.id}
                data-testid="radio-input"
                onChange={handleOnChange}
                checked={checked}
                disabled={disabled}
                {...otherProps}
            />
            {renderIcon()}
            {otherProps["aria-label"] || otherProps.children}
        </Container>
    );
};
