import React from "react";
import { ButtonRef } from "../button/types";
import { Main } from "./icon-button.style";
import { IconButtonProps } from "./types";

const Component = (
    {
        "data-testid": dataTestId,
        children,
        type = "button",
        buttonStyle = "primary",
        sizeType = "default",
        ...otherProps
    }: IconButtonProps,
    ref: ButtonRef
) => {
    return (
        <Main
            data-testid={dataTestId || "iconButton"}
            ref={ref}
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
