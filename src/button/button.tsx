import React from "react";

import type { MainStyleProps } from "./button.style";
import { Main, Spinner } from "./button.style";
import { hasValidChildren } from "./button-helper";
import type { ButtonProps, ButtonRef } from "./types";

const Component = (props: ButtonProps, ref: ButtonRef) => {
    const {
        children,
        disabled = false,
        loading = false,
        styleType = "default",
        size = "default",
        danger = false,
        focusableWhenDisabled = false,
        icon,
        iconPosition = "left",
        onClick,
        ...otherProps
    } = props;

    const hasChildren = hasValidChildren(children);
    const iconOnly = !!icon && !hasChildren;

    const mainStyle: MainStyleProps = {
        $buttonStyle: disabled ? "disabled" : styleType,
        $buttonSize: size,
        $buttonIsDanger: danger,
        $hasIcon: !!icon,
        $iconOnly: iconOnly,
        $iconPosition: icon ? iconPosition : undefined,
    };

    return (
        <Main
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            disabled={disabled && !focusableWhenDisabled}
            aria-disabled={disabled}
            aria-busy={loading}
            onClick={disabled ? undefined : onClick}
            {...mainStyle}
            {...otherProps}
        >
            {loading ? (
                <Spinner $hasChildren={hasChildren} />
            ) : icon ? (
                React.cloneElement(icon, { "aria-hidden": true })
            ) : null}
            {hasChildren && <span>{children}</span>}
        </Main>
    );
};

Component.displayName = "Button";

const BaseButton = React.forwardRef(Component);

const DefaultButtonComponent = (props: ButtonProps, ref: ButtonRef) => (
    <BaseButton {...props} size={props.size ?? "default"} ref={ref} />
);
DefaultButtonComponent.displayName = "Button.Default";

const SmallButtonComponent = (props: ButtonProps, ref: ButtonRef) => (
    <BaseButton {...props} size="small" ref={ref} />
);
SmallButtonComponent.displayName = "Button.Small";

const LargeButtonComponent = (props: ButtonProps, ref: ButtonRef) => (
    <BaseButton {...props} size="large" ref={ref} />
);
LargeButtonComponent.displayName = "Button.Large";

export const Button = Object.assign(BaseButton, {
    /** @deprecated Use the `size` prop instead: `<Button>` or `<Button size="default">` */
    Default: React.forwardRef(DefaultButtonComponent),
    /** @deprecated Use the `size` prop instead: `<Button size="small">` */
    Small: React.forwardRef(SmallButtonComponent),
    /** @deprecated Use the `size` prop instead: `<Button size="large">` */
    Large: React.forwardRef(LargeButtonComponent),
});
