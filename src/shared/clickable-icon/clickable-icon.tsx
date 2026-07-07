import clsx from "clsx";
import React from "react";

import * as styles from "./clickable-icon.styles";
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
                focusOutline === "none" && styles.outlineNone,
                focusHighlight && styles.highlight,
                className
            )}
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export const ClickableIcon = React.forwardRef(Component);
