import React from "react";
import { PillProps } from "./types";
import { Label, Wrapper } from "./pill.style";

export const Pill = ({
    type,
    colorType = "black",
    children,
    icon,
    ...otherProps
}: PillProps): JSX.Element => {
    return (
        <Wrapper $type={type} $color={colorType} {...otherProps}>
            {icon}
            <Label>{children}</Label>
        </Wrapper>
    );
};
