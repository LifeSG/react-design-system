import React from "react";
import { Main, MainStyleProps, Spinner } from "./button.style";
import { ButtonProps, ButtonRef } from "./types";

/**
 * NOTE: Due to the way we intend to customise both components, with forwardRef behaviour
 * we are unable to create a single component and have them share.
 *
 * Will refactor if there is a better way
 */
const DefaultComponent = (props: ButtonProps, ref: ButtonRef) => {
    const {
        children,
        disabled = false,
        loading = false,
        styleType = "default",
        danger = false,
        ...otherProps
    } = props;

    const mainStyle: MainStyleProps = {
        $buttonStyle: disabled ? "disabled" : styleType,
        $buttonSizeStyle: "default",
        $buttonIsDanger: danger,
    };

    return (
        <Main
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            disabled={disabled}
            {...mainStyle}
            {...otherProps}
        >
            {loading && <Spinner {...mainStyle} />}
            <span>{children}</span>
        </Main>
    );
};

const SmallComponent = (props: ButtonProps, ref: ButtonRef) => {
    const {
        children,
        disabled = false,
        loading = false,
        styleType = "default",
        danger = false,
        ...otherProps
    } = props;

    const mainStyle: MainStyleProps = {
        $buttonStyle: disabled ? "disabled" : styleType,
        $buttonSizeStyle: "small",
        $buttonIsDanger: danger,
    };

    return (
        <Main
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            disabled={disabled}
            {...mainStyle}
            {...otherProps}
        >
            {loading && <Spinner {...mainStyle} size={16} />}
            <span>{children}</span>
        </Main>
    );
};

const LargeComponent = (props: ButtonProps, ref: ButtonRef) => {
    const {
        children,
        disabled = false,
        loading = false,
        styleType = "default",
        danger = false,
        ...otherProps
    } = props;

    const mainStyle: MainStyleProps = {
        $buttonStyle: disabled ? "disabled" : styleType,
        $buttonSizeStyle: "large",
        $buttonIsDanger: danger,
    };

    return (
        <Main
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            disabled={disabled}
            {...mainStyle}
            {...otherProps}
        >
            {loading && <Spinner {...mainStyle} size={16} />}
            <span>{children}</span>
        </Main>
    );
};

export const Button = {
    Default: React.forwardRef(DefaultComponent),
    Small: React.forwardRef(SmallComponent),
    Large: React.forwardRef(LargeComponent),
};
