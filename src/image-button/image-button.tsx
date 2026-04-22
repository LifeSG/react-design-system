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

/**
 * A clickable image tile for visual selection options.
 *
 * Renders an image thumbnail button with selected and error visual states.
 * Extends all `HTMLButtonElement` attributes.
 *
 * @example
 * ```tsx
 * <ImageButton imgSrc="/img/option.png" selected={selected} onClick={() => setSelected(true)} />
 * ```
 */
export const ImageButton = React.forwardRef(Component);
