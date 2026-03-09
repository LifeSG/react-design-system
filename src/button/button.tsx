import { clsx } from "clsx";
import React from "react";
import { Main, Spinner } from "./button.style";
import { ButtonProps, ButtonRef, ButtonStyleType } from "./types";
import { hasValidChildren } from "./button-helper";

const getStyleClass = (
    disabled: boolean,
    styleType: ButtonStyleType,
    danger: boolean
): string => {
    if (disabled) return "mainDisabled";
    if (danger) {
        switch (styleType) {
            case "secondary":
                return "mainSecondaryDanger";
            case "light":
                return "mainLightDanger";
            case "link":
                return "mainLinkDanger";
            default:
                return "mainDefaultDanger";
        }
    }
    switch (styleType) {
        case "secondary":
            return "mainSecondary";
        case "light":
            return "mainLight";
        case "link":
            return "mainLink";
        default:
            return "mainDefault";
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
        <Main
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            disabled={disabled && !focusableWhenDisabled}
            aria-disabled={disabled}
            aria-busy={loading}
            onClick={disabled ? undefined : onClick}
            {...otherProps}
            className={clsx(
                getStyleClass(disabled, styleType, danger),
                "mainSizeDefault",
                className
            )}
        >
            {loading && (
                <Spinner
                    className={clsx(
                        hasValidChildren(children) && "spinnerWithChildren"
                    )}
                />
            )}
            <span>{children}</span>
        </Main>
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
        <Main
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            disabled={disabled && !focusableWhenDisabled}
            aria-disabled={disabled}
            aria-busy={loading}
            onClick={disabled ? undefined : onClick}
            {...otherProps}
            className={clsx(
                getStyleClass(disabled, styleType, danger),
                "mainSmall",
                className
            )}
        >
            {loading && (
                <Spinner
                    className={clsx(
                        hasValidChildren(children) && "spinnerWithChildren"
                    )}
                />
            )}
            <span>{children}</span>
        </Main>
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
        <Main
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            disabled={disabled && !focusableWhenDisabled}
            aria-disabled={disabled}
            aria-busy={loading}
            onClick={disabled ? undefined : onClick}
            {...otherProps}
            className={clsx(
                getStyleClass(disabled, styleType, danger),
                "mainLarge",
                className
            )}
        >
            {loading && (
                <Spinner
                    className={clsx(
                        hasValidChildren(children) && "spinnerWithChildren"
                    )}
                />
            )}
            <span>{children}</span>
        </Main>
    );
};
LargeComponent.displayName = "Button.Large";

export const Button = {
    Default: React.forwardRef(DefaultComponent),
    Small: React.forwardRef(SmallComponent),
    Large: React.forwardRef(LargeComponent),
};
