import clsx from "clsx";
import React from "react";

import type { ButtonRef } from "../button/types";
import { ImageWithFallback } from "../shared/image-with-fallback/image-with-fallback";
import * as styles from "./image-button.styles";
import type { ImageButtonProps } from "./types";

const Component = (
    {
        children,
        className,
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
        <button
            ref={ref}
            type={type}
            aria-disabled={disabled}
            disabled={disabled && !focusableWhenDisabled}
            onClick={disabled ? undefined : onClick}
            className={clsx(
                styles.main,
                selected && styles.mainSelectedText,
                selected && styles.mainSelected,
                error && styles.mainError,
                disabled && styles.mainDisabled,
                className
            )}
            {...otherProps}
        >
            <ImageWithFallback src={imgSrc} />
            {children}
        </button>
    );
};

export const ImageButton = React.forwardRef(Component);
