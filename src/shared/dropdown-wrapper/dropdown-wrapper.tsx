import clsx from "clsx";
import { forwardRef } from "react";

import * as styles from "./dropdown-wrapper.styles";
import type { LabelContainerProps, ValueLabelProps } from "./types";

export const ValueLabel = ({
    variant,
    truncateType,
    children,
}: ValueLabelProps) => (
    <div
        className={styles.valueLabel}
        data-variant={variant}
        data-truncate={truncateType}
    >
        {children}
    </div>
);

export const PlaceholderLabel = ({
    variant,
    truncateType,
    children,
}: ValueLabelProps) => (
    <div
        className={clsx(styles.valueLabel, styles.placeholderLabel)}
        data-variant={variant}
        data-truncate={truncateType}
    >
        {children}
    </div>
);

export const LabelContainer = forwardRef<HTMLDivElement, LabelContainerProps>(
    function LabelContainer({ disabled, children }, ref) {
        return (
            <div
                className={styles.labelContainer}
                data-disabled={disabled}
                ref={ref}
            >
                {children}
            </div>
        );
    }
);
