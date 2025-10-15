import React from "react";
import { ButtonRef } from "../button/types";
import { Main } from "./image-button.style";
import { ImageButtonProps } from "./types";
import { ImageWithFallback } from "../shared/image-with-fallback/image-with-fallback";

const Component = (
    {
        children,
        imgSrc,
        selected,
        error,
        type = "button",
        disabled = false,
        ...otherProps
    }: ImageButtonProps,
    ref: ButtonRef
) => {
    return (
        <Main
            ref={ref}
            $selected={selected}
            $error={error}
            type={type}
            aria-label={
                typeof children === "string" ? children : "Image button"
            }
            aria-disabled={disabled}
            disabled={disabled}
            {...otherProps}
        >
            <ImageWithFallback src={imgSrc} />
            {children}
        </Main>
    );
};

export const ImageButton = React.forwardRef(Component);
