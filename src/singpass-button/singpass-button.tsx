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

export const SingpassButton = forwardRef(Component);
