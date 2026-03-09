import { clsx } from "clsx";
import React from "react";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner";
import * as styles from "./button.style";
import { ButtonProps, ButtonRef, ButtonStyleType } from "./types";
import { hasValidChildren } from "./button-helper";

const getStyleClass = (
    disabled: boolean,
    styleType: ButtonStyleType,
    danger: boolean
): string => {
    if (disabled) return styles.mainDisabled;
    if (danger) {
        switch (styleType) {
            case "secondary":
                return styles.mainSecondaryDanger;
            case "light":
                return styles.mainLightDanger;
            case "link":
                return styles.mainLinkDanger;
            default:
                return styles.mainDefaultDanger;
        }
    }
    switch (styleType) {
        case "secondary":
            return styles.mainSecondary;
        case "light":
            return styles.mainLight;
        case "link":
            return styles.mainLink;
        default:
            return styles.mainDefault;
    }
};

/**
 * NOTE: Due to the way we intend to customise both components, with forwardRef behaviour
 * we are unable to create a single component and have them share.
 *
 * Will refactor if there is a better way
 */
const DefaultComponent = (props: ButtonProps, ref: ButtonRef) => {
    const {
        children,
        className,
        disabled = false,
        loading = false,
        styleType = "default",
        danger = false,
        focusableWhenDisabled = false,
        onClick,
        ...otherProps
    } = props;

    return (
        <button
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            disabled={disabled && !focusableWhenDisabled}
            aria-disabled={disabled}
            aria-busy={loading}
            onClick={disabled ? undefined : onClick}
            {...otherProps}
            className={clsx(
                styles.main,
                getStyleClass(disabled, styleType, danger),
                styles.mainSizeDefault,
                className
            )}
        >
            {loading && (
                <ComponentLoadingSpinner
                    className={clsx(
                        hasValidChildren(children) && styles.spinnerWithChildren
                    )}
                />
            )}
            <span>{children}</span>
        </button>
    );
};
DefaultComponent.displayName = "Button.Default";

const SmallComponent = (props: ButtonProps, ref: ButtonRef) => {
    const {
        children,
        className,
        disabled = false,
        loading = false,
        styleType = "default",
        danger = false,
        focusableWhenDisabled = false,
        onClick,
        ...otherProps
    } = props;

    return (
        <button
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            disabled={disabled && !focusableWhenDisabled}
            aria-disabled={disabled}
            aria-busy={loading}
            onClick={disabled ? undefined : onClick}
            {...otherProps}
            className={clsx(
                styles.main,
                getStyleClass(disabled, styleType, danger),
                styles.mainSmall,
                className
            )}
        >
            {loading && (
                <ComponentLoadingSpinner
                    className={clsx(
                        hasValidChildren(children) && styles.spinnerWithChildren
                    )}
                />
            )}
            <span>{children}</span>
        </button>
    );
};
SmallComponent.displayName = "Button.Small";

const LargeComponent = (props: ButtonProps, ref: ButtonRef) => {
    const {
        children,
        className,
        disabled = false,
        loading = false,
        styleType = "default",
        danger = false,
        focusableWhenDisabled = false,
        onClick,
        ...otherProps
    } = props;

    return (
        <button
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            disabled={disabled && !focusableWhenDisabled}
            aria-disabled={disabled}
            aria-busy={loading}
            onClick={disabled ? undefined : onClick}
            {...otherProps}
            className={clsx(
                styles.main,
                getStyleClass(disabled, styleType, danger),
                styles.mainLarge,
                className
            )}
        >
            {loading && (
                <ComponentLoadingSpinner
                    className={clsx(
                        hasValidChildren(children) && styles.spinnerWithChildren
                    )}
                />
            )}
            <span>{children}</span>
        </button>
    );
};
LargeComponent.displayName = "Button.Large";

export const Button = {
    Default: React.forwardRef(DefaultComponent),
    Small: React.forwardRef(SmallComponent),
    Large: React.forwardRef(LargeComponent),
};
