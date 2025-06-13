import React from "react";
import { getSpLogoText } from "./singpass-assets";
import { Main, MainStyleProps, SvgContainer } from "./singpass-button.style";
import { SingpassButtonProps, SingpassButtonRef } from "./types";

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
    const { styleType = "white-filled", ...otherProps } = props;

    const mainStyle: MainStyleProps = {
        $buttonStyle: styleType,
        $buttonSizeStyle: "default",
    };

    return (
        <Main
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            {...mainStyle}
            {...otherProps}
            aria-label="Log in with sing pass"
        >
            <SvgContainer $buttonSizeStyle="default">
                {getSpLogoText(styleType)}
            </SvgContainer>
        </Main>
    );
};
DefaultComponent.displayName = "SingpassButton.Default";

const SmallComponent = (props: SingpassButtonProps, ref: SingpassButtonRef) => {
    const { styleType = "white-filled", ...otherProps } = props;

    const mainStyle: MainStyleProps = {
        $buttonStyle: styleType,
        $buttonSizeStyle: "small",
    };

    return (
        <Main
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            {...mainStyle}
            {...otherProps}
            aria-label="Log in with sing pass"
        >
            <SvgContainer $buttonSizeStyle="small">
                {getSpLogoText(styleType)}
            </SvgContainer>
        </Main>
    );
};
SmallComponent.displayName = "SingpassButton.Small";

const LargeComponent = (props: SingpassButtonProps, ref: SingpassButtonRef) => {
    const { styleType = "white-filled", ...otherProps } = props;

    const mainStyle: MainStyleProps = {
        $buttonStyle: styleType,
        $buttonSizeStyle: "large",
    };

    return (
        <Main
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            {...mainStyle}
            {...otherProps}
            aria-label="Log in with sing pass"
        >
            <SvgContainer $buttonSizeStyle="large">
                {getSpLogoText(styleType)}
            </SvgContainer>
        </Main>
    );
};
LargeComponent.displayName = "SingpassButton.Large";

export const SingpassButton = {
    Default: React.forwardRef(DefaultComponent),
    Small: React.forwardRef(SmallComponent),
    Large: React.forwardRef(LargeComponent),
};
