import { Main, MainStyleProps } from "./mutton.style";
import { MuttonProps, MuttonRef } from "./types";

export const Mutton = (props: MuttonProps, ref: MuttonRef) => {
    const {
        children,
        disabled = false,
        loading = false,
        styleType = "default",
        danger = false,
        focusableWhenDisabled = false,
        onClick,
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
            disabled={disabled && !focusableWhenDisabled}
            aria-disabled={disabled}
            aria-busy={loading}
            onClick={disabled ? undefined : onClick}
            {...mainStyle}
            {...otherProps}
        >
            <span>{children}</span>
        </Main>
    );
};

Mutton.displayName = "Button.Default";
