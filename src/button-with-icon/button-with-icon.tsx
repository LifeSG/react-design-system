import React from "react";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner";
import {
    MainButtonWithIcon,
    MainStylePropsWithIcon,
} from "./button-with-icon.style";
import { ButtonWithIconProps, ButtonWithIconRef } from "./types";

/**
 * NOTE: Due to the way we intend to customise both components, with forwardRef behaviour
 * we are unable to create a single component and have them share.
 *
 * Will refactor if there is a better way
 */
const DefaultComponent = (
    props: ButtonWithIconProps,
    ref: ButtonWithIconRef
) => {
    const {
        children,
        disabled = false,
        styleType = "default",
        danger = false,
        icon,
        iconPosition = "left",
        loading = false,
        focusableWhenDisabled = false,
        onClick,
        ...otherProps
    } = props;

    const mainStyle: MainStylePropsWithIcon = {
        $buttonIconPosition: iconPosition,
        $buttonStyle: disabled ? "disabled" : styleType,
        $buttonSizeStyle: "default",
        $buttonIsDanger: danger,
    };

    return (
        <MainButtonWithIcon
            ref={ref}
            data-testid={otherProps["data-testid"] || "button-with-icon"}
            disabled={disabled && !focusableWhenDisabled}
            aria-disabled={disabled}
            aria-busy={loading}
            onClick={disabled ? undefined : onClick}
            {...mainStyle}
            {...otherProps}
        >
            {loading ? (
                <ComponentLoadingSpinner />
            ) : (
                React.cloneElement(icon, { "aria-hidden": true })
            )}
            <span>{children}</span>
        </MainButtonWithIcon>
    );
};
DefaultComponent.displayName = "ButtonWithIcon.Default";

const SmallComponent = (props: ButtonWithIconProps, ref: ButtonWithIconRef) => {
    const {
        children,
        disabled = false,
        styleType = "default",
        danger = false,
        icon,
        iconPosition = "left",
        loading = false,
        focusableWhenDisabled = false,
        onClick,
        ...otherProps
    } = props;

    const mainStyle: MainStylePropsWithIcon = {
        $buttonIconPosition: iconPosition,
        $buttonStyle: disabled ? "disabled" : styleType,
        $buttonSizeStyle: "small",
        $buttonIsDanger: danger,
    };

    return (
        <MainButtonWithIcon
            ref={ref}
            data-testid={otherProps["data-testid"] || "button-with-icon"}
            disabled={disabled && !focusableWhenDisabled}
            aria-disabled={disabled}
            aria-busy={loading}
            onClick={disabled ? undefined : onClick}
            {...mainStyle}
            {...otherProps}
        >
            {loading ? (
                <ComponentLoadingSpinner />
            ) : (
                React.cloneElement(icon, { "aria-hidden": true })
            )}
            <span>{children}</span>
        </MainButtonWithIcon>
    );
};
SmallComponent.displayName = "ButtonWithIcon.Small";

export const ButtonWithIcon = {
    Default: React.forwardRef(DefaultComponent),
    Small: React.forwardRef(SmallComponent),
};
