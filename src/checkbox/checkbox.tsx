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
                    className={clsx(styles.icon, styles.uncheckedDisabledIcon)}
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
                tabIndex={disabled ? -1 : 0}
                disabled={disabled}
                aria-checked={indeterminate ? "mixed" : checked}
                {...otherProps}
            />
            {renderIcon()}
        </div>
    );
};
