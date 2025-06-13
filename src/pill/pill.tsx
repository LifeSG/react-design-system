import React from "react";
import { PillProps } from "./types";
import { Label, Wrapper } from "./pill.style";

export const Pill = ({
    type,
    colorType = "black",
    children,
    icon,
    size = "default",
    ...otherProps
}: PillProps): JSX.Element => {
    return (
        <Wrapper $type={type} $color={colorType} $size={size} {...otherProps}>
            {icon}
            <Label>{children}</Label>
        </Wrapper>
    );
};
