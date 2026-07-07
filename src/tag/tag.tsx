import clsx from "clsx";
import React from "react";

import * as styles from "./tag.style";
import type { TagColorType, TagProps, TagType } from "./types";

const colorClassMap: Record<TagType, Record<TagColorType, string>> = {
    solid: {
        grey: styles.wrapperSolidGrey,
        green: styles.wrapperSolidGreen,
        yellow: styles.wrapperSolidYellow,
        red: styles.wrapperSolidRed,
        blue: styles.wrapperSolidBlue,
        primary: styles.wrapperSolidPrimary,
        black: styles.wrapperSolidBlack,
    },
    outline: {
        grey: styles.wrapperOutlineGrey,
        green: styles.wrapperOutlineGreen,
        yellow: styles.wrapperOutlineYellow,
        red: styles.wrapperOutlineRed,
        blue: styles.wrapperOutlineBlue,
        primary: styles.wrapperOutlinePrimary,
        black: styles.wrapperOutlineBlack,
    },
};

export const Tag = ({
    type,
    colorType = "black",
    children,
    interactive = false,
    icon,
    iconPosition = "left",
    ...otherProps
}: TagProps): JSX.Element => {
    const Element = interactive ? "button" : "div";

    return (
        <Element
            className={clsx(
                styles.wrapper,
                colorClassMap[type]?.[colorType],
                interactive && styles.wrapperInteractive
            )}
            {...otherProps}
        >
            {iconPosition === "left" &&
                icon &&
                React.cloneElement(icon, { "aria-hidden": true })}
            <div className={styles.label} role="presentation">
                {children}
            </div>
            {iconPosition === "right" &&
                icon &&
                React.cloneElement(icon, { "aria-hidden": true })}
        </Element>
    );
};
