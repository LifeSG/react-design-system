import React, { useEffect, useState } from "react";
import { Checkmark, Container, Input } from "./checkbox.style";
import { CheckboxProps } from "./types";

export const Checkbox = ({
    className,
    checked,
    disabled,
    onChange,
    onKeyPress, // will still need this for now else keyboard events are not handled
    displaySize = "default",
    ...otherProps
}: CheckboxProps): JSX.Element => {
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
            | React.ChangeEvent<HTMLInputElement>
            | React.KeyboardEvent<HTMLDivElement>
    ) => {
        if (!disabled) {
            if (onChange) {
                onChange(event as React.ChangeEvent<HTMLInputElement>);
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
            $displaySize={displaySize}
        >
            <Input
                type="checkbox"
                data-testid="checkbox-input"
                onChange={handleOnCheck}
                disabled={disabled}
                tabIndex={disabled ? -1 : 0}
                checked={selected}
                {...otherProps}
            />
            {selected && (
                <Checkmark
                    type="tick"
                    id="checkmark"
                    data-testid="checkmark"
                    disabled={disabled}
                    $displaySize={displaySize}
                />
            )}
        </Container>
    );
};
