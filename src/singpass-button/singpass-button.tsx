import clsx from "clsx";
import { forwardRef } from "react";

import { getSpLogo } from "./singpass-assets";
import * as styles from "./singpass-button.styles";
import type {
    SingpassButtonProps,
    SingpassButtonRef,
    SingpassButtonSizeType,
    SingpassButtonStyleType,
} from "./types";

const styleClassMap: Record<SingpassButtonStyleType, string> = {
    "red-filled": styles.mainStyleRedFilled,
    "white-filled": styles.mainStyleWhiteFilled,
};

const sizeClassMap: Record<SingpassButtonSizeType, string> = {
    small: styles.mainSizeSmall,
    large: styles.mainSizeLarge,
    default: "",
};

const Component = (props: SingpassButtonProps, ref: SingpassButtonRef) => {
    const {
        styleType = "white-filled",
        sizeType = "default",
        className,
        "data-testid": testId = "singpass-button",
        ...otherProps
    } = props;

    return (
        <button
            ref={ref}
            data-testid={testId}
            {...otherProps}
            aria-label="Log in with Singpass"
            className={clsx(
                styles.main,
                sizeClassMap[sizeType],
                styleClassMap[styleType],
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
