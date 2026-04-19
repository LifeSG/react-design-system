import {
    MinusSquareFillIcon,
    SquareFillIcon,
    SquareIcon,
    SquareTickFillIcon,
} from "@lifesg/react-icons";
import clsx from "clsx";
import { useEffect, useRef } from "react";

import * as styles from "./checkbox.styles";
import type { CheckboxProps } from "./types";

export const Checkbox = ({
    className,
    checked,
    disabled,
    focusableWhenDisabled,
    indeterminate,
    displaySize = "default",
    onChange,
    id,
    tabIndex,
    ...otherProps
}: CheckboxProps): JSX.Element => {
    // =============================================================================
    // REFS
    // =============================================================================
    const checkRef = useRef<HTMLInputElement>(null);

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
    // EFFECTS
    // =============================================================================

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
                <MinusSquareFillIcon
                    className={clsx(
                        styles.icon,
                        styles.selectedIcon,
                        disabled && styles.iconDisabled
                    )}
                    data-testid="indeterminate"
                    aria-hidden
                />
            );
        }

        if (checked) {
            return (
                <SquareTickFillIcon
                    className={clsx(
                        styles.icon,
                        styles.selectedIcon,
                        disabled && styles.iconDisabled
                    )}
                    data-testid="checkmark"
                    aria-hidden
                />
            );
        }

        if (disabled) {
            return (
                <SquareFillIcon
                    className={clsx(styles.icon, styles.iconDisabled)}
                    data-testid="empty-disabled-checkbox"
                    aria-hidden
                />
            );
        }

        return (
            <SquareIcon
                className={clsx(styles.icon, styles.uncheckedIcon)}
                data-testid="empty-checkbox"
                aria-hidden
            />
        );
    };

    return (
        <div
            className={clsx(
                styles.container,
                displaySize === "small" && styles.containerSmall,
                className
            )}
            data-testid="checkbox"
        >
            <input
                id={id}
                className={styles.input}
                data-testid="checkbox-input"
                type="checkbox"
                checked={checked}
                ref={checkRef}
                tabIndex={isFocusableWhenDisabled ? 0 : tabIndex}
                disabled={isNativeDisabled}
                aria-disabled={isFocusableWhenDisabled}
                aria-checked={indeterminate ? "mixed" : checked}
                onChange={handleOnChange}
                {...otherProps}
            />
            {renderIcon()}
        </div>
    );
};
