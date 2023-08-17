import React from "react";
import { CheckboxProps } from "./types";
import { Container, Input } from "./checkbox.style";
import {
    MinusSquareFillIcon,
    SquareFillIcon,
    SquareIcon,
    SquareTickFillIcon,
} from "@lifesg/react-icons";

export const Checkbox = ({
    className,
    checked,
    disabled,
    indeterminate,
    onChange,
    onKeyPress, // will still need this for now else keyboard events are not handled
    displaySize = "default",
    ...otherProps
}: CheckboxProps): JSX.Element => {
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
        return indeterminate ? (
            <MinusSquareFillIcon data-testid="indeterminate" />
        ) : checked ? (
            <SquareTickFillIcon data-testid="checkmark" />
        ) : disabled ? (
            <SquareFillIcon data-testid="disabled-empty-checkbox" />
        ) : (
            <SquareIcon data-testid="empty-checkbox" />
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
                tabIndex={-1}
                onChange={handleOnCheck}
                disabled={disabled}
                {...otherProps}
            />
            {renderIcon()}
        </Container>
    );
};
