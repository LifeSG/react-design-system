import clsx from "clsx";
import React from "react";

import { getSpLogo } from "./singpass-assets";
import * as styles from "./singpass-button.styles";
import type { SingpassButtonProps, SingpassButtonRef } from "./types";

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
    const { styleType = "white-filled", className, ...otherProps } = props;

    return (
        <button
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            {...otherProps}
            aria-label="Log in with Singpass"
            className={clsx(
                styles.main,
                styleType === "red-filled"
                    ? styles.mainStyleRedFilled
                    : styles.mainStyleWhiteFilled,
                className
            )}
        >
            <span className={styles.svgContainer}>
                <img src={getSpLogo(styleType)} alt="" />
            </span>
        </button>
    );
};
DefaultComponent.displayName = "SingpassButton.Default";

const SmallComponent = (props: SingpassButtonProps, ref: SingpassButtonRef) => {
    const { styleType = "white-filled", className, ...otherProps } = props;

    return (
        <button
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            {...otherProps}
            aria-label="Log in with Singpass"
            className={clsx(
                styles.main,
                styles.mainSizeSmall,
                styleType === "red-filled"
                    ? styles.mainStyleRedFilled
                    : styles.mainStyleWhiteFilled,
                className
            )}
        >
            <span className={styles.svgContainer}>
                <img src={getSpLogo(styleType)} alt="" />
            </span>
        </button>
    );
};
SmallComponent.displayName = "SingpassButton.Small";

const LargeComponent = (props: SingpassButtonProps, ref: SingpassButtonRef) => {
    const { styleType = "white-filled", className, ...otherProps } = props;

    return (
        <button
            ref={ref}
            data-testid={otherProps["data-testid"] || "button"}
            {...otherProps}
            aria-label="Log in with Singpass"
            className={clsx(
                styles.main,
                styles.mainSizeLarge,
                styleType === "red-filled"
                    ? styles.mainStyleRedFilled
                    : styles.mainStyleWhiteFilled,
                className
            )}
        >
            <span
                className={clsx(
                    styles.svgContainer,
                    styles.svgContainerSizeLarge
                )}
            >
                <img src={getSpLogo(styleType)} alt="" />
            </span>
        </button>
    );
};
LargeComponent.displayName = "SingpassButton.Large";

export const SingpassButton = {
    Default: React.forwardRef(DefaultComponent),
    Small: React.forwardRef(SmallComponent),
    Large: React.forwardRef(LargeComponent),
};
