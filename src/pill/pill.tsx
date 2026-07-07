import clsx from "clsx";
import React from "react";

import * as styles from "./pill.styles";
import type { PillColorType, PillProps, PillType } from "./types";

const WRAPPER_CLASS: Record<PillType, Record<PillColorType, string>> = {
    solid: {
        black: styles.wrapperSolidBlack,
        grey: styles.wrapperSolidGrey,
        green: styles.wrapperSolidGreen,
        yellow: styles.wrapperSolidYellow,
        red: styles.wrapperSolidRed,
        blue: styles.wrapperSolidBlue,
        primary: styles.wrapperSolidPrimary,
    },
    outline: {
        black: styles.wrapperOutlineBlack,
        grey: styles.wrapperOutlineGrey,
        green: styles.wrapperOutlineGreen,
        yellow: styles.wrapperOutlineYellow,
        red: styles.wrapperOutlineRed,
        blue: styles.wrapperOutlineBlue,
        primary: styles.wrapperOutlinePrimary,
    },
};

export const Pill = ({
    type,
    colorType = "black",
    children,
    icon,
    className,
    ...otherProps
}: PillProps): JSX.Element => {
    return (
        <div
            {...otherProps}
            className={clsx(
                styles.wrapperBase,
                type === "solid" && styles.wrapperSolid,
                WRAPPER_CLASS[type][colorType],
                className
            )}
        >
            {icon && React.cloneElement(icon, { "aria-hidden": true })}
            <div className={styles.label}>{children}</div>
        </div>
    );
};
