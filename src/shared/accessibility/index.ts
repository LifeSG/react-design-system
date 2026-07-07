import { css } from "@linaria/core";
import clsx from "clsx";
import React from "react";

import { isReact19 } from "../../util";

const visuallyHidden = css`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;

export const VisuallyHidden = React.forwardRef<
    HTMLSpanElement,
    React.HTMLAttributes<HTMLSpanElement>
>(function VisuallyHidden({ className, ...otherProps }, ref) {
    return React.createElement("span", {
        ...otherProps,
        ref,
        className: clsx(visuallyHidden, className),
    });
});

/**
 * Handle compatibility of `inert` across React versions.
 * 19+ provides official support as a boolean, while it is handled as string in older versions
 */
export const inertValue = (value: boolean | undefined) => {
    if (isReact19()) {
        return value;
    }

    return value ? "true" : undefined;
};

export const concatIds = (...selectors: (string | undefined)[]) => {
    return selectors.filter((selector) => !!selector).join(" ");
};
