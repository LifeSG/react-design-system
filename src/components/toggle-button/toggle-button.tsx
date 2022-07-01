import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, Input, Label } from "./toggle-button.styles";
import { ToggleButtonProps } from "./types";

export const ToggleButton = ({
    disabled,
    checked,
    onChange,
    type = "checkbox",
    children,
    className,
    ...otherProps
}: ToggleButtonProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [selected, setSelected] = useState<boolean>(checked);
    const inputRef = useRef<HTMLInputElement>();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setSelected(checked);
    }, [checked]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleOnChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            if (!disabled) {
                if (type === "radio" && !selected) setSelected(true);
                if (type === "checkbox") {
                    setSelected((prevSelected) => {
                        return !prevSelected;
                    });
                }

                if (onChange) onChange(event);
            }
        },
        []
    );

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <Container
            selected={selected}
            disabled={disabled}
            role="checkbox"
            aria-checked={selected}
            className={className}
        >
            <Input
                ref={inputRef}
                type="checkbox"
                data-testid="toggle-button-input"
                disabled={disabled}
                onChange={handleOnChange}
                checked={selected}
                {...otherProps}
            />
            <Label
                weight={selected ? "bold" : "regular"}
                selected={selected}
                disabled={disabled}
                data-testid="toggle-button-label"
            >
                {children}
            </Label>
        </Container>
    );
};
