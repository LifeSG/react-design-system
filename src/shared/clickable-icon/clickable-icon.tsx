import clsx from "clsx";
import React from "react";

import { highlight, main, outlineNone } from "./clickable-icon.style";
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
                main,
                className,
                focusOutline === "none" && outlineNone,
                focusHighlight && highlight
            )}
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export const ClickableIcon = React.forwardRef(Component);
