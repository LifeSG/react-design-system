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
    onChange,
    onKeyPress, // will still need this for now else keyboard events are not handled
    displaySize = "default",
    ...otherProps
}: CheckboxProps): React.JSX.Element => {
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
    // EVENT HANDLERS
    // =============================================================================
    const handleOnCheck = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.KeyboardEvent<HTMLDivElement>
    ) => {
        if (!disabled) {
            const keyboardEvent =
                event as React.KeyboardEvent<HTMLInputElement>;
            const isValid =
                keyboardEvent.key === " " || event.type === "change";

            if (!isValid) {
                return;
            }

            if (onChange) {
                onChange(event as React.ChangeEvent<HTMLInputElement>);
            }

            if (onKeyPress) {
                onKeyPress(keyboardEvent);
            }
        }
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
                />
            );
        }

        if (checked) {
            return (
                <StyledCheckedIcon
                    $disabled={disabled}
                    data-testid="checkmark"
                />
            );
        }

        if (disabled) {
            return (
                <StyledUncheckedDisabledIcon data-testid="empty-disabled-checkbox" />
            );
        }

        return (
            <StyledUncheckedIcon
                $disabled={disabled}
                data-testid="empty-checkbox"
            />
        );
    };

    return (
        <Container
            className={className}
            data-testid="checkbox"
            role="checkbox"
            aria-checked={indeterminate ? "mixed" : checked}
            aria-labelledby="checkbox-input"
            tabIndex={disabled ? -1 : 0}
            onKeyDown={handleOnCheck}
            $displaySize={displaySize}
            $disabled={disabled}
            $unchecked={!(indeterminate || checked || disabled)}
        >
            <Input
                id="checkbox-input"
                data-testid="checkbox-input"
                aria-hidden="true"
                type="checkbox"
                checked={checked}
                ref={checkRef}
                tabIndex={-1}
                onChange={handleOnCheck}
                disabled={disabled}
                {...otherProps}
            />
            {renderIcon()}
        </Container>
    );
};
