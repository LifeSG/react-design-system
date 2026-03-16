import React from "react";

import { Label, Wrapper } from "./pill.style";
import type { PillProps } from "./types";

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
