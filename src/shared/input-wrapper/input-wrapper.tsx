import clsx from "clsx";
import { forwardRef } from "react";

import {
    BasicButton as BasicButtonStyled,
    BasicInput as BasicInputStyled,
    InputBox as InputBoxStyled,
    InputWrapper as InputWrapperStyled,
} from "./input-wrapper.styles";
import type {
    BasicButtonProps,
    BasicInputProps,
    InputBoxProps,
    InputWrapperProps,
} from "./types";

/**
 * Basic wrapper for input fields that provides the border style but does not
 * prescibe any layout for content
 */
export const InputBox = forwardRef<HTMLDivElement, InputBoxProps>(
    function InputBox(props, ref) {
        const {
            disabled,
            error,
            readOnly,
            focused,
            noBorder,
            className,
            ...otherProps
        } = props;
        return (
            <InputBoxStyled
                ref={ref}
                className={clsx(
                    disabled && "inputBoxDisabled",
                    error && "inputBoxError",
                    readOnly && "inputBoxReadOnly",
                    focused && "inputBoxFocused",
                    noBorder && "inputBoxNoBorder",
                    className
                )}
                {...otherProps}
            />
        );
    }
);

/**
 * Basic wrapper for input fields with spacing and flex layout for content
 */
export const InputWrapper = forwardRef<HTMLDivElement, InputWrapperProps>(
    function InputWrapper(props, ref) {
        const {
            disabled,
            error,
            readOnly,
            focused,
            noBorder,
            position,
            className,
            ...otherProps
        } = props;
        return (
            <InputWrapperStyled
                ref={ref}
                className={clsx(
                    disabled && "inputBoxDisabled",
                    error && "inputBoxError",
                    readOnly && "inputBoxReadOnly",
                    focused && "inputBoxFocused",
                    noBorder && "inputBoxNoBorder",
                    readOnly && "inputWrapperReadOnly",
                    position === "right" && "inputWrapperPositionRight",
                    className
                )}
                {...otherProps}
            />
        );
    }
);

/**
 * Standalone native input with stripped-down styles, intended to be used in
 * combination with `InputWrapper` or other wrappers to build composite widgets
 */
export const BasicInput = forwardRef<HTMLInputElement, BasicInputProps>(
    function BasicInput(props, ref) {
        const { variant, className, ...otherProps } = props;
        return (
            <BasicInputStyled
                ref={ref}
                className={clsx(
                    variant === "small" && "basicInputSmall",
                    className
                )}
                {...otherProps}
            />
        );
    }
);

/**
 * Standalone native button with stripped-down styles
 */
export const BasicButton = forwardRef<HTMLButtonElement, BasicButtonProps>(
    function BasicButton(props, ref) {
        return <BasicButtonStyled ref={ref} {...props} />;
    }
);
