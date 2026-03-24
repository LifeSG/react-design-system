import clsx from "clsx";
import React from "react";

import * as styles from "./clickable-icon.style";
import type { ClickableIconProps } from "./types";

const Component = (
    {
        children,
        className,
        focusHighlight = true,
        focusOutline = "none",
        type = "button",
        ...otherProps
    }: ClickableIconProps,
    ref: React.Ref<HTMLButtonElement>
) => {
    return (
        <button
            ref={ref}
            className={clsx(
                styles.main,
                className,
                focusOutline === "none" && styles.outlineNone,
                focusHighlight && styles.highlight
            )}
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export const ClickableIcon = React.forwardRef(Component);
