import clsx from "clsx";
import React from "react";

import { ComponentLoadingSpinner } from "../shared/component-loading-spinner";
import * as styles from "./button.styles";
import { hasValidChildren } from "./button-helper";
import type { ButtonProps, ButtonRef } from "./types";

const styleClassMap: Record<string, Record<string, string>> = {
    disabled: { base: styles.mainStyleDisabled },
    default: {
        base: styles.mainStyleDefault,
        danger: styles.mainStyleDefaultDanger,
    },
    secondary: {
        base: styles.mainStyleSecondary,
        danger: styles.mainStyleSecondaryDanger,
    },
    light: { base: styles.mainStyleLight, danger: styles.mainStyleLightDanger },
    link: { base: styles.mainStyleLink, danger: styles.mainStyleLinkDanger },
};

const sizeClassMap: Record<string, { base: string; iconOnly: string }> = {
    default: {
        base: styles.mainSizeDefault,
        iconOnly: styles.mainSizeDefaultIconOnly,
    },
    small: {
        base: styles.mainSizeSmall,
        iconOnly: styles.mainSizeSmallIconOnly,
    },
    large: {
        base: styles.mainSizeLarge,
        iconOnly: styles.mainSizeLargeIconOnly,
    },
};

const getStyleClass = (effectiveStyle: string, danger: boolean) =>
    danger
        ? styleClassMap[effectiveStyle]?.danger
        : styleClassMap[effectiveStyle]?.base;

const getSizeClass = (sizeType: string, iconOnly: boolean) =>
    iconOnly ? sizeClassMap[sizeType]?.iconOnly : sizeClassMap[sizeType]?.base;

const Component = (props: ButtonProps, ref: ButtonRef) => {
    const {
        children,
        className,
        disabled = false,
        loading = false,
        styleType = "default",
        sizeType = "default",
        danger = false,
        focusableWhenDisabled = false,
        icon,
        iconPosition = "left",
        onClick,
        ...otherProps
    } = props;

    const hasChildren = hasValidChildren(children);
    const iconOnly = !!icon && !hasChildren;
    const effectiveStyle = disabled ? "disabled" : styleType;

    return (
        <button
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            disabled={disabled && !focusableWhenDisabled}
            aria-disabled={disabled}
            aria-busy={loading}
            onClick={disabled ? undefined : onClick}
            className={clsx(
                styles.main,
                icon &&
                    iconPosition === "right" &&
                    styles.mainIconPositionRight,
                !iconOnly && styles.mainHasMinWidth,
                getStyleClass(effectiveStyle, danger),
                getSizeClass(sizeType, iconOnly),
                className
            )}
            {...otherProps}
        >
            {loading ? (
                <ComponentLoadingSpinner
                    className={clsx(hasChildren && styles.spinnerHasChildren)}
                />
            ) : icon ? (
                React.cloneElement(icon, { "aria-hidden": true })
            ) : null}
            {hasChildren && <span>{children}</span>}
        </button>
    );
};

Component.displayName = "Button";

const BaseButton = React.forwardRef(Component);

const DefaultButtonComponent = (props: ButtonProps, ref: ButtonRef) => (
    <BaseButton {...props} sizeType={props.sizeType ?? "default"} ref={ref} />
);
DefaultButtonComponent.displayName = "Button.Default";

const SmallButtonComponent = (props: ButtonProps, ref: ButtonRef) => (
    <BaseButton {...props} sizeType="small" ref={ref} />
);
SmallButtonComponent.displayName = "Button.Small";

const LargeButtonComponent = (props: ButtonProps, ref: ButtonRef) => (
    <BaseButton {...props} sizeType="large" ref={ref} />
);
LargeButtonComponent.displayName = "Button.Large";

export const Button = Object.assign(BaseButton, {
    /** @deprecated Use the `sizeType` prop instead: `<Button>` or `<Button sizeType="default">` */
    Default: React.forwardRef(DefaultButtonComponent),
    /** @deprecated Use the `sizeType` prop instead: `<Button sizeType="small">` */
    Small: React.forwardRef(SmallButtonComponent),
    /** @deprecated Use the `sizeType` prop instead: `<Button sizeType="large">` */
    Large: React.forwardRef(LargeButtonComponent),
});
