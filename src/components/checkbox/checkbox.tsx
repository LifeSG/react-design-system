import React, { useEffect, useState } from "react";
import { Checkmark, Container, Input } from "./checkbox.style";
import { CheckboxProps } from "./types";

export const Checkbox = ({
    className,
    checked,
    disabled,
    onClick,
    onKeyPress,
    ...otherProps
}: CheckboxProps) => {
    const [selected, setSelected] = useState<boolean>(checked);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelected(checked);
    }, [checked]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleOnCheck = (
        event:
            | React.MouseEvent<HTMLInputElement, MouseEvent>
            | React.KeyboardEvent<HTMLDivElement>
    ) => {
        if (!disabled) {
            setSelected(!selected);
            if (onClick) {
                onClick(
                    event as React.MouseEvent<HTMLInputElement, MouseEvent>
                );
            }

            if (onKeyPress) {
                onKeyPress(event as React.KeyboardEvent<HTMLInputElement>);
            }
        }
    };

    // =============================================================================
    // RENDER FUNCTION
    // =============================================================================
    return (
        <Container
            selected={selected}
            disabled={disabled}
            className={className}
            data-testid="checkbox"
            onKeyPress={handleOnCheck}
            tabIndex={disabled ? -1 : 0}
            role="checkbox"
        >
            <Input
                type="checkbox"
                data-testid="checkbox-input"
                onClick={handleOnCheck}
                disabled={disabled}
                tabIndex={-1} // Need this else it is able to be tabbed to
                {...otherProps}
            />
            {selected && (
                <Checkmark
                    type="check"
                    id="checkmark"
                    data-testid="checkmark"
                    disabled={disabled}
                />
            )}
        </Container>
    );
};
