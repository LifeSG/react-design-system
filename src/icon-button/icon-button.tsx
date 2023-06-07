import React from "react";
import { ButtonRef } from "../button/types";
import { Main } from "./icon-button.style";
import { IconButtonProps } from "./types";

const Component = (
    {
        id,
        "data-testid": dataTestId,
        className,
        children,
        focusHighlight = true,
        focusOutline = "none",
        type = "button",
        buttonStyle = "primary",
        sizeType = "default",
        ...otherProps
    }: IconButtonProps,
    ref: ButtonRef
) => {
    return (
        <Main
            className={className}
            id={id || "iconButton"}
            data-testid={dataTestId || "iconButton"}
            ref={ref}
            $outline={focusOutline}
            $highlight={focusHighlight}
            type={type}
            $sizeType={sizeType}
            $buttonStyle={buttonStyle}
            {...otherProps}
        >
            {children}
        </Main>
    );
};

export const IconButton = React.forwardRef(Component);
