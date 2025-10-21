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
        focusableWhenDisabled = false,
        onClick,
        ...otherProps
    }: IconButtonProps,
    ref: ButtonRef
) => {
    return (
        <Main
            data-testid={dataTestId || "iconButton"}
            ref={ref}
            type={type}
            $styleType={disabled ? "disabled" : styleType}
            $sizeType={sizeType}
            aria-disabled={disabled}
            disabled={disabled && !focusableWhenDisabled}
            onClick={disabled ? undefined : onClick}
            {...otherProps}
        >
            {children}
        </Main>
    );
};

export const IconButton = React.forwardRef(Component);
