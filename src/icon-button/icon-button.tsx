import React from "react";
import { ButtonRef } from "../button/types";
import { Main } from "./icon-button.style";
import { IconButtonProps } from "./types";

const Component = (
    {
        "data-testid": dataTestId,
        styleType = "primary",
        children,
        sizeType = "default",
        type = "button",
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
            $styleType={styleType}
            {...otherProps}
        >
            {children}
        </Main>
    );
};

export const IconButton = React.forwardRef(Component);
