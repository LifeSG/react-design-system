import clsx from "clsx";
import { forwardRef } from "react";

import * as styles from "./dropdown-wrapper.styles";
import type { LabelContainerProps, ValueLabelProps } from "./types";

export const ValueLabel = ({
    variant,
    truncateType,
    children,
}: ValueLabelProps) => (
    <span
        className={styles.valueLabel}
        data-variant={variant}
        data-truncate={truncateType}
    >
        {children}
    </span>
);

export const PlaceholderLabel = ({
    variant,
    truncateType,
    children,
}: ValueLabelProps) => (
    <span
        className={clsx(styles.valueLabel, styles.placeholderLabel)}
        data-variant={variant}
        data-truncate={truncateType}
    >
        {children}
    </span>
);

export const LabelContainer = forwardRef<HTMLSpanElement, LabelContainerProps>(
    function LabelContainer({ disabled, children }, ref) {
        return (
            <span
                className={styles.labelContainer}
                data-disabled={disabled}
                ref={ref}
            >
                {children}
            </span>
        );
    }
);
