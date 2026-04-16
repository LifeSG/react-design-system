import { CircleDotIcon, CircleIcon } from "@lifesg/react-icons";
import clsx from "clsx";
import type { ChangeEvent } from "react";

import * as styles from "./radio-button.styles";
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
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
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
            <CircleDotIcon
                data-testid="radio-checked"
                data-radio-icon
                data-disabled={disabled ? "true" : "false"}
                className={styles.checkedIcon}
                aria-hidden
            />
        ) : (
            <CircleIcon
                data-testid="radio-unchecked"
                data-radio-icon
                data-disabled={disabled ? "true" : "false"}
                className={styles.uncheckedIcon}
                aria-hidden
            />
        );
    };

    return (
        <div
            className={clsx(styles.container, className)}
            data-display-size={displaySize}
            data-testid="radio-button"
        >
            <input
                type="radio"
                data-testid="radio-input"
                onChange={handleOnChange}
                checked={checked}
                disabled={isNativeDisabled}
                aria-disabled={isFocusableWhenDisabled}
                tabIndex={isFocusableWhenDisabled ? 0 : tabIndex}
                data-disabled-visual={disabled ? "true" : "false"}
                className={styles.input}
                {...otherProps}
            />
            {renderIcon()}
        </div>
    );
};
