import type React from "react";

import {
    Container,
    Input,
    StyledCheckedIcon,
    StyledUnCheckedIcon,
} from "./radio-button.styles";
import type { RadioButtonProps } from "./types";

export const RadioButton = ({
    className,
    checked,
    disabled,
    displaySize = "default",
    focusableWhenDisabled,
    onChange,
    tabIndex,
    ...otherProps
}: RadioButtonProps) => {
    // =============================================================================
    // CONST
    // =============================================================================
    const isFocusableWhenDisabled = !!disabled && !!focusableWhenDisabled;
    const isNativeDisabled = !!disabled && !focusableWhenDisabled;

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) {
            event.preventDefault();
            return;
        }

        onChange?.(event);
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const renderIcon = () => {
        return checked ? (
            <StyledCheckedIcon
                data-testid="radio-checked"
                $disabled={disabled}
                aria-hidden
            />
        ) : (
            <StyledUnCheckedIcon
                data-testid="radio-unchecked"
                $disabled={disabled}
                aria-hidden
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
                data-testid="radio-input"
                onChange={handleOnChange}
                checked={checked}
                disabled={isNativeDisabled}
                aria-disabled={isFocusableWhenDisabled}
                tabIndex={isFocusableWhenDisabled ? 0 : tabIndex}
                $disabledVisual={disabled}
                {...otherProps}
            />
            {renderIcon()}
        </Container>
    );
};
