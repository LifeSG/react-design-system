import React from "react";
import { CheckboxProps } from "./types";
import {
    Checkmark,
    Container,
    DisabledUncheckedIcon,
    Input,
    Intermediate,
    UncheckedIcon,
} from "./checkbox.style";

export const Checkbox = ({
    className,
    checked,
    disabled,
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
            | React.MouseEvent<HTMLDivElement>
            | React.MouseEvent<SVGSVGElement>
    ) => {
        if (!disabled) {
            const keyboardEvent =
                event as React.KeyboardEvent<HTMLInputElement>;
            const isValid =
                keyboardEvent.key === " " ||
                event.type === "change" ||
                event.type === "click";

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
    const renderCheckMarks = () => {
        switch (checked) {
            case true:
                return (
                    <Checkmark
                        id="checkmark"
                        data-testid="checkmark"
                        disabled={disabled}
                        onClick={handleOnCheck}
                    />
                );
            case "mixed":
                return (
                    <Intermediate
                        id="intermediate-checkmark"
                        data-testid="intermediate-checkmark"
                        disabled={disabled}
                        onClick={handleOnCheck}
                    />
                );
            case false:
                return disabled ? (
                    <DisabledUncheckedIcon
                        id="disabled-empty-checkbox"
                        data-testid="disabled-empty-checkbox"
                        displaySize={displaySize}
                    />
                ) : (
                    <UncheckedIcon
                        id="empty-checkbox"
                        data-testid="empty-checkbox"
                        onClick={handleOnCheck}
                        displaySize={displaySize}
                    />
                );
                break;
            default:
                return <></>;
        }
    };

    return (
        <Container
            className={className}
            data-testid="checkbox"
            role="checkbox"
            aria-checked={checked}
            aria-labelledby="checkbox-input"
            tabIndex={disabled ? -1 : 0}
            onKeyDown={handleOnCheck}
            $displaySize={displaySize}
        >
            <Input
                id="checkbox-input"
                data-testid="checkbox-input"
                aria-hidden="true"
                type="checkbox"
                tabIndex={-1}
                disabled={disabled}
                {...otherProps}
            />
            {renderCheckMarks()}
        </Container>
    );
};
