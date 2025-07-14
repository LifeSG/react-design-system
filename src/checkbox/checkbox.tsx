import React, { useEffect, useRef } from "react";
import { CheckboxProps } from "./types";
import {
    Container,
    Input,
    StyledCheckedIcon,
    StyledInteremediateIcon,
    StyledUncheckedDisabledIcon,
    StyledUncheckedIcon,
} from "./checkbox.style";

export const Checkbox = ({
    className,
    checked,
    disabled,
    indeterminate,
    displaySize = "default",
    id,
    ...otherProps
}: CheckboxProps): JSX.Element => {
    // =============================================================================
    // REFS, EFFECTS
    // =============================================================================
    const checkRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (checkRef.current) {
            checkRef.current.indeterminate = indeterminate ?? false;
        }
    }, [indeterminate]);

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    const renderIcon = () => {
        if (indeterminate) {
            return (
                <StyledInteremediateIcon
                    $disabled={disabled}
                    data-testid="indeterminate"
                    aria-hidden="true"
                />
            );
        }

        if (checked) {
            return (
                <StyledCheckedIcon
                    $disabled={disabled}
                    data-testid="checkmark"
                    aria-hidden="true"
                />
            );
        }

        if (disabled) {
            return (
                <StyledUncheckedDisabledIcon
                    data-testid="empty-disabled-checkbox"
                    aria-hidden="true"
                />
            );
        }

        return (
            <StyledUncheckedIcon
                $disabled={disabled}
                data-testid="empty-checkbox"
                aria-hidden="true"
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
                checked={checked}
                ref={checkRef}
                tabIndex={disabled ? -1 : 0}
                disabled={disabled}
                aria-checked={indeterminate ? "mixed" : checked}
                {...otherProps}
            />
            {renderIcon()}
        </Container>
    );
};
