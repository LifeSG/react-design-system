import React from "react";

import type { ButtonRef } from "../button/types";
import { ImageWithFallback } from "../shared/image-with-fallback/image-with-fallback";
import { Main } from "./image-button.style";
import type { ImageButtonProps } from "./types";

const Component = (
    {
        children,
        imgSrc,
        selected,
        error,
        type = "button",
        disabled = false,
        focusableWhenDisabled = false,
        onClick,
        ...otherProps
    }: ImageButtonProps,
    ref: ButtonRef
) => {
    return (
        <Main
            ref={ref}
            $disabled={disabled}
            $selected={selected}
            $error={error}
            type={type}
            aria-disabled={disabled}
            disabled={disabled && !focusableWhenDisabled}
            onClick={disabled ? undefined : onClick}
            {...otherProps}
        >
            <ImageWithFallback src={imgSrc} />
            {children}
        </Main>
    );
};

export const ImageButton = React.forwardRef(Component);
