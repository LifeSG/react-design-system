import clsx from "clsx";
import React from "react";

import { ComponentLoadingSpinner } from "../shared/component-loading-spinner";
import * as styles from "./button.styles";
import { hasValidChildren } from "./button-helper";
import type { ButtonProps, ButtonRef } from "./types";

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
                effectiveStyle === "disabled" && styles.mainStyleDisabled,
                effectiveStyle === "default" &&
                    !danger &&
                    styles.mainStyleDefault,
                effectiveStyle === "default" &&
                    danger &&
                    styles.mainStyleDefaultDanger,
                effectiveStyle === "secondary" &&
                    !danger &&
                    styles.mainStyleSecondary,
                effectiveStyle === "secondary" &&
                    danger &&
                    styles.mainStyleSecondaryDanger,
                effectiveStyle === "light" && !danger && styles.mainStyleLight,
                effectiveStyle === "light" &&
                    danger &&
                    styles.mainStyleLightDanger,
                effectiveStyle === "link" && !danger && styles.mainStyleLink,
                effectiveStyle === "link" &&
                    danger &&
                    styles.mainStyleLinkDanger,
                sizeType === "default" && styles.mainSizeDefault,
                sizeType === "default" &&
                    iconOnly &&
                    styles.mainSizeDefaultIconOnly,
                sizeType === "small" && styles.mainSizeSmall,
                sizeType === "small" &&
                    iconOnly &&
                    styles.mainSizeSmallIconOnly,
                sizeType === "large" && styles.mainSizeLarge,
                sizeType === "large" &&
                    iconOnly &&
                    styles.mainSizeLargeIconOnly,
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
