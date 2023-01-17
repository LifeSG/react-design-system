import React from "react";
import { ButtonRef } from "../button/types";
import { Main } from "./icon-button.style";
import { IconButtonProps } from "./types";

const Component = (
    { children, ...otherProps }: IconButtonProps,
    ref: ButtonRef
) => {
    return (
        <Main ref={ref} {...otherProps}>
            {children}
        </Main>
    );
};

export const IconButton = React.forwardRef(Component);
