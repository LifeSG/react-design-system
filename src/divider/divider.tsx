import clsx from "clsx";
import * as styles from "./divider.styles";
import type { DividerProps } from "./types";

interface CustomCSSProperties extends React.CSSProperties {
    "--thickness"?: string;
    "--color"?: string;
}

export const Divider = ({
    thickness = 1,
    lineStyle = "solid",
    color,
    className,
    ...otherProps
}: DividerProps) => {
    const lineClass = clsx(
        styles.lineBase,
        lineStyle === "solid" && styles.solidLine,
        lineStyle === "dashed" && styles.dashedLine,
        className
    );

    return (
        <hr
            className={lineClass}
            style={
                {
                    "--thickness": `${thickness}px`,
                    "--color": color,
                } as CustomCSSProperties
            }
            {...otherProps}
        />
    );
};