import React from "react";
import { getSpLogo } from "./singpass-assets";
import { Main, MainStyleProps } from "./singpass-button.style";
import { SingpassButtonProps, SingpassButtonRef } from "./types";
import { Typography } from "../typography";

/**
 * NOTE: Due to the way we intend to customise both components, with forwardRef behaviour
 * we are unable to create a single component and have them share.
 *
 * Will refactor if there is a better way
 */
const DefaultComponent = (
    props: SingpassButtonProps,
    ref: SingpassButtonRef
) => {
    const {
        styleType = "white-filled",
        singpassLogoStyleOverride,
        ...otherProps
    } = props;

    const mainStyle: MainStyleProps = {
        $buttonStyle: styleType,
        $buttonSizeStyle: "default",
        $singpassLogoOverride: singpassLogoStyleOverride,
    };

    return (
        <Main
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            {...mainStyle}
            {...otherProps}
            aria-label="Log in with sing pass"
        >
            <Typography.HeadingXS inline weight="semibold">
                Log in with
            </Typography.HeadingXS>
            <img src={getSpLogo(styleType)} />
        </Main>
    );
};
DefaultComponent.displayName = "Button.Default";

const SmallComponent = (props: SingpassButtonProps, ref: SingpassButtonRef) => {
    const {
        styleType = "white-filled",
        singpassLogoStyleOverride,
        ...otherProps
    } = props;

    const mainStyle: MainStyleProps = {
        $buttonStyle: styleType,
        $buttonSizeStyle: "small",
        $singpassLogoOverride: singpassLogoStyleOverride,
    };

    return (
        <Main
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            {...mainStyle}
            {...otherProps}
            aria-label="Log in with sing pass"
        >
            <Typography.BodyMD inline weight="semibold">
                Log in with
            </Typography.BodyMD>
            <img src={getSpLogo(styleType)} />
        </Main>
    );
};
SmallComponent.displayName = "Button.Small";

const LargeComponent = (props: SingpassButtonProps, ref: SingpassButtonRef) => {
    const {
        styleType = "white-filled",
        singpassLogoStyleOverride,
        ...otherProps
    } = props;

    const mainStyle: MainStyleProps = {
        $buttonStyle: styleType,
        $buttonSizeStyle: "large",
        $singpassLogoOverride: singpassLogoStyleOverride,
    };

    return (
        <Main
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            {...mainStyle}
            {...otherProps}
            aria-label="Log in with sing pass"
        >
            <Typography.HeadingMD inline weight="semibold">
                Log in with
            </Typography.HeadingMD>
            <img src={getSpLogo(styleType)} />
        </Main>
    );
};
LargeComponent.displayName = "Button.Large";

export const SingpassButton = {
    Default: React.forwardRef(DefaultComponent),
    Small: React.forwardRef(SmallComponent),
    Large: React.forwardRef(LargeComponent),
};
