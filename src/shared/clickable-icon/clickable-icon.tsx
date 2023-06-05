import React from "react";
import { Main } from "./clickable-icon.style";
import { ClickableIconProps } from "./types";

const Component = (
    {
        children,
        focusHighlight = true,
        focusOutline = "none",
        ...otherProps
    }: ClickableIconProps,
    ref: React.Ref<HTMLButtonElement>
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

export const ClickableIcon = React.forwardRef(Component);
