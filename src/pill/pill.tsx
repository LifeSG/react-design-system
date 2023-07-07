import React from "react";
import { PillProps } from "./types";
import { Label, Wrapper } from "./pill.style";

export const Pill = ({
    type,
    colorType = "black",
    className,
    children,
    icon,
    ...otherProps
}: PillProps): JSX.Element => {
    return (
        <Wrapper
            className={className}
            data-testid={otherProps["data-testid"] || "pill"}
            $type={type}
            $color={colorType}
            {...otherProps}
        >
            {icon}
            <Label>{children}</Label>
        </Wrapper>
    );
};
