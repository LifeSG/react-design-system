import React from "react";
import {
    ButtonWithIconProps,
    ButtonWithIconRef,
    MainStyleProps,
} from "./types";
import { Main } from "./button-with-icon.style";

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
        ...otherProps
    } = props;

    const mainStyle: MainStyleProps = {
        $buttonIcon: icon,
        $buttonIconPosition: iconPosition,
        $buttonStyle: disabled ? "disabled" : styleType,
        $buttonSizeStyle: "default",
        $buttonIsDanger: danger,
    };

    return (
        <Main
            ref={ref}
            data-testid={otherProps["data-testid"] || "button-with-icon"}
            disabled={disabled}
            {...mainStyle}
            {...otherProps}
        >
            <span>
                {icon} {children}
            </span>
        </Main>
    );
};

const SmallComponent = (props: ButtonWithIconProps, ref: ButtonWithIconRef) => {
    const {
        children,
        disabled = false,
        styleType = "default",
        danger = false,
        icon,
        iconPosition = "left",
        ...otherProps
    } = props;

    const mainStyle: MainStyleProps = {
        $buttonIcon: icon,
        $buttonIconPosition: iconPosition,
        $buttonStyle: disabled ? "disabled" : styleType,
        $buttonSizeStyle: "small",
        $buttonIsDanger: danger,
    };

    return (
        <Main
            ref={ref}
            data-testid={otherProps["data-testid"] || "button-with-icon"}
            disabled={disabled}
            {...mainStyle}
            {...otherProps}
        >
            <span>
                {icon} {children}
            </span>
        </Main>
    );
};

export const ButtonWithIcon = {
    Default: React.forwardRef(DefaultComponent),
    Small: React.forwardRef(SmallComponent),
};
