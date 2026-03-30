import clsx from "clsx";
import { forwardRef } from "react";

import * as styles from "./input-wrapper.styles";
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
            <div
                ref={ref}
                data-focused={focused}
                className={clsx(
                    styles.inputBox,
                    disabled && styles.inputBoxDisabled,
                    error && styles.inputBoxError,
                    readOnly && styles.inputBoxReadOnly,
                    noBorder && styles.inputBoxNoBorder,
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
            <div
                ref={ref}
                data-focused={focused}
                className={clsx(
                    styles.inputBox,
                    styles.inputWrapper,
                    disabled && styles.inputBoxDisabled,
                    error && styles.inputBoxError,
                    readOnly && styles.inputBoxReadOnly,
                    noBorder && styles.inputBoxNoBorder,
                    readOnly && styles.inputWrapperReadOnly,
                    position === "right" && styles.inputWrapperPositionRight,
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
            <input
                ref={ref}
                className={clsx(
                    styles.basicInput,
                    variant === "small" && styles.basicInputSmall,
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
    function BasicButton({ className, ...props }, ref) {
        return (
            <button
                ref={ref}
                className={clsx(styles.basicButton, className)}
                {...props}
            />
        );
    }
);
