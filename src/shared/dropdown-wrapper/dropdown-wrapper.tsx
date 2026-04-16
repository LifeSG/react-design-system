import clsx from "clsx";
import type React from "react";

import type { DropdownVariantType, TruncateType } from "../dropdown-list/types";
import * as styles from "./dropdown-wrapper.styles";

// =============================================================================
// SHARED PROPS
// =============================================================================

interface ValueLabelProps {
    variant?: DropdownVariantType;
    truncateType?: TruncateType;
    children?: React.ReactNode;
}

interface LabelContainerProps {
    disabled?: boolean;
    children?: React.ReactNode;
    ref?: React.Ref<HTMLDivElement>;
}

// =============================================================================
// COMPONENTS
// =============================================================================

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

export const LabelContainer = ({
    disabled,
    children,
    ref,
}: LabelContainerProps) => (
    <div className={styles.labelContainer} data-disabled={disabled} ref={ref}>
        {children}
    </div>
);
