import React from "react";
import { ButtonRef } from "../button/types";
import { Main } from "./icon-button.style";
import { IconButtonProps } from "./types";

const Component = (
    {
        children,
        focusHighlight = true,
        focusOutline = "none",
        ...otherProps
    }: IconButtonProps,
    ref: ButtonRef
) => {
    return (
        <Main
            ref={ref}
            $outline={focusOutline}
            $highlight={focusHighlight}
            {...otherProps}
        >
            {children}
        </Main>
    );
};

export const IconButton = React.forwardRef(Component);
