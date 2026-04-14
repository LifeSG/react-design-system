import clsx from "clsx";
import React from "react";

import * as styles from "./pill.styles";
import type { PillColorType, PillProps, PillType } from "./types";

const WRAPPER_CLASS: Record<PillType, Record<PillColorType, string>> = {
    solid: {
        black: "wrapperSolidBlack",
        grey: "wrapperSolidGrey",
        green: "wrapperSolidGreen",
        yellow: "wrapperSolidYellow",
        red: "wrapperSolidRed",
        blue: "wrapperSolidBlue",
        primary: "wrapperSolidPrimary",
    },
    outline: {
        black: "wrapperOutlineBlack",
        grey: "wrapperOutlineGrey",
        green: "wrapperOutlineGreen",
        yellow: "wrapperOutlineYellow",
        red: "wrapperOutlineRed",
        blue: "wrapperOutlineBlue",
        primary: "wrapperOutlinePrimary",
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
        <styles.Wrapper
            {...otherProps}
            className={clsx(
                "wrapperBase",
                type === "solid" && "wrapperSolid",
                WRAPPER_CLASS[type][colorType],
                className
            )}
        >
            {icon && React.cloneElement(icon, { "aria-hidden": true })}
            <styles.Label>{children}</styles.Label>
        </styles.Wrapper>
    );
};
