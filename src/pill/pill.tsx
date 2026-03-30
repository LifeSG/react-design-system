import React from "react";
import { PillProps } from "./types";
import { Label, Wrapper } from "./pill.style";

/**
 * Compact label badge.
 *
 * Renders a small pill-shaped tag with a configurable display style (solid
 * fill or outline) and color scheme. Inherits all `HTMLDivElement` attributes.
 *
 * @example
 * ```tsx
 * <Pill type="solid" colorType="green">Active</Pill>
 * <Pill type="outline" colorType="red">Expired</Pill>
 * ```
 */
export const Pill = ({
    type,
    colorType = "black",
    children,
    icon,
    ...otherProps
}: PillProps): JSX.Element => {
    return (
        <Wrapper $type={type} $color={colorType} {...otherProps}>
            {icon && React.cloneElement(icon, { "aria-hidden": true })}
            <Label>{children}</Label>
        </Wrapper>
    );
};
