import { useEffect, useRef } from "react";

import {
    Container,
    Input,
    StyledCheckedIcon,
    StyledInteremediateIcon,
    StyledUncheckedDisabledIcon,
    StyledUncheckedIcon,
} from "./checkbox.style";
import type { CheckboxProps } from "./types";

export const Checkbox = ({
    className,
    checked,
    disabled,
    focusableWhenDisabled,
    indeterminate,
    displaySize = "default",
    id,
    tabIndex,
    onChange,
    ...otherProps
}: CheckboxProps): JSX.Element => {
    // =============================================================================
    // REFS, EFFECTS
    // =============================================================================
    const checkRef = useRef<HTMLInputElement>(null);

    const isFocusableWhenDisabled = !!disabled && !!focusableWhenDisabled;
    const isNativeDisabled = !!disabled && !focusableWhenDisabled;

    useEffect(() => {
        if (checkRef.current) {
            checkRef.current.indeterminate = indeterminate ?? false;
        }
    }, [indeterminate]);

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
        if (indeterminate) {
            return (
                <StyledInteremediateIcon
                    $disabled={disabled}
                    data-testid="indeterminate"
                    aria-hidden
                />
            );
        }

        if (checked) {
            return (
                <StyledCheckedIcon
                    $disabled={disabled}
                    data-testid="checkmark"
                    aria-hidden
                />
            );
        }

        if (disabled) {
            return (
                <StyledUncheckedDisabledIcon
                    data-testid="empty-disabled-checkbox"
                    aria-hidden
                />
            );
        }

        return (
            <StyledUncheckedIcon
                $disabled={disabled}
                data-testid="empty-checkbox"
                aria-hidden
            />
        );
    };

    return (
        <Container
            className={className}
            data-testid="checkbox"
            $displaySize={displaySize}
        >
            <Input
                id={id}
                data-testid="checkbox-input"
                type="checkbox"
                onChange={handleOnChange}
                checked={checked}
                aria-checked={indeterminate ? "mixed" : checked}
                ref={checkRef}
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
