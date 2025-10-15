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
        disabled = false,
        ...otherProps
    }: IconButtonProps,
    ref: ButtonRef
) => {
    const ariaLabel = `${styleType} ${type}`;
    return (
        <Main
            data-testid={dataTestId || "iconButton"}
            ref={ref}
            type={type}
            $sizeType={sizeType}
            $styleType={styleType}
            aria-label={ariaLabel}
            aria-disabled={disabled}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </Main>
    );
};

export const IconButton = React.forwardRef(Component);
