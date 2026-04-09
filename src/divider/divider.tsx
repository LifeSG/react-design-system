import clsx from "clsx";
import { useRef } from "react";
import { Colour, useApplyStyle, useResolvedTokenValue } from "../theme";
import * as styles from "./divider.styles";
import type { DividerLineStyleType, DividerProps } from "./types";
import { isColourToken } from "../util/styling-helper";

const lineStyleMap: Record<DividerLineStyleType, string> = {
    solid: styles.solidLine,
    dashed: styles.dashedLine,
};

export const Divider = ({
    thickness = 1,
    lineStyle = "solid",
    color,
    className,
    ...otherProps
}: DividerProps) => {
    const ref = useRef<HTMLHRElement>(null);

    const effectiveColor = useResolvedTokenValue({
        value: color,
        fallback: Colour["border"],
        isToken: isColourToken,
        normalizeCustom: String,
    });

    const encodedColor = encodeURIComponent(effectiveColor);

    useApplyStyle(ref, {
        [styles.tokens.thickness]: `${thickness}px`,
        [styles.tokens.color]: color as string | null | undefined,
        [styles.tokens.backgroundImage]: `
            url('data:image/svg+xml,<svg width="8" height="${thickness}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${encodedColor}" stroke-width="${thickness}" stroke-dasharray="4 4" /></svg>')`,
    });

    const lineClass = clsx(styles.lineBase, lineStyleMap[lineStyle], className);

    return <hr ref={ref} className={lineClass} {...otherProps} />;
};
