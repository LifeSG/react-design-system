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

/**
 * Icon-only button.
 *
 * Renders a square button containing only an icon child. Extends all
 * `HTMLButtonElement` attributes. Choose the style type based on hierarchy
 * and the size type based on available space.
 *
 * @example
 * ```tsx
 * <IconButton styleType="secondary" sizeType="small" onClick={handleEdit}>
 *     <EditIcon />
 * </IconButton>
 * ```
 */
export const IconButton = React.forwardRef(Component);
