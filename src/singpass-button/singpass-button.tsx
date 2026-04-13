import clsx from "clsx";
import { forwardRef } from "react";

import { getSpLogo } from "./singpass-assets";
import * as styles from "./singpass-button.styles";
import type { SingpassButtonProps, SingpassButtonRef } from "./types";

const Component = (props: SingpassButtonProps, ref: SingpassButtonRef) => {
    const {
        styleType = "white-filled",
        sizeType = "default",
        className,
        ...otherProps
    } = props;

    return (
        <button
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            {...otherProps}
            aria-label="Log in with Singpass"
            className={clsx(
                styles.main,
                sizeType === "small" && styles.mainSizeSmall,
                sizeType === "large" && styles.mainSizeLarge,
                styleType === "red-filled"
                    ? styles.mainStyleRedFilled
                    : styles.mainStyleWhiteFilled,
                className
            )}
        >
            <span
                className={clsx(
                    styles.svgContainer,
                    sizeType === "large" && styles.svgContainerSizeLarge
                )}
            >
                <img src={getSpLogo(styleType)} alt="" />
            </span>
        </button>
    );
};

const BaseSingpassButton = forwardRef(Component);

const DefaultSingpassButtonComponent = (
    props: SingpassButtonProps,
    ref: SingpassButtonRef
) => (
    <BaseSingpassButton
        {...props}
        sizeType={props.sizeType ?? "default"}
        ref={ref}
    />
);
DefaultSingpassButtonComponent.displayName = "SingpassButton.Default";

const SmallSingpassButtonComponent = (
    props: SingpassButtonProps,
    ref: SingpassButtonRef
) => <BaseSingpassButton {...props} sizeType="small" ref={ref} />;
SmallSingpassButtonComponent.displayName = "SingpassButton.Small";

const LargeSingpassButtonComponent = (
    props: SingpassButtonProps,
    ref: SingpassButtonRef
) => <BaseSingpassButton {...props} sizeType="large" ref={ref} />;
LargeSingpassButtonComponent.displayName = "SingpassButton.Large";

export const SingpassButton = Object.assign(BaseSingpassButton, {
    /** @deprecated Use the `sizeType` prop instead: `<SingpassButton>` or `<SingpassButton sizeType="default">` */
    Default: forwardRef(DefaultSingpassButtonComponent),
    /** @deprecated Use the `sizeType` prop instead: `<SingpassButton sizeType="small">` */
    Small: forwardRef(SmallSingpassButtonComponent),
    /** @deprecated Use the `sizeType` prop instead: `<SingpassButton sizeType="large">` */
    Large: forwardRef(LargeSingpassButtonComponent),
});
