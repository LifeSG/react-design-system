import React from "react";
import { Label, Wrapper } from "./tag.style";
import { TagProps } from "./types";

export const Tag = ({
    type,
    colorType = "black",
    children,
    interactive = false,
    icon,
    iconPosition = "left",
    ...otherProps
}: TagProps): JSX.Element => {
    return (
        <Wrapper
            as={interactive ? "button" : "div"}
            $type={type}
            $color={colorType}
            $interactive={interactive}
            {...otherProps}
        >
            {iconPosition === "left" &&
                icon &&
                React.cloneElement(icon, { "aria-hidden": true })}
            <Label role="presentation">{children}</Label>
            {iconPosition === "right" &&
                icon &&
                React.cloneElement(icon, { "aria-hidden": true })}
        </Wrapper>
    );
};
