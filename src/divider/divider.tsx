import clsx from "clsx";
import { useRef } from "react";

import { ColDiv } from "../layout/col-div";
import { Colour, useApplyStyle, useResolvedTokenValue } from "../theme";
import { isColourToken } from "../util/styling-helper";
import { V2_ColDiv } from "../v2_layout/col-div";
import * as styles from "./divider.styles";
import type { DividerLineStyleType, DividerProps } from "./types";

const lineStyleMap: Record<DividerLineStyleType, string> = {
    solid: styles.solidLine,
    dashed: styles.dashedLine,
};

export const Divider = ({
    thickness = 1,
    lineStyle = "solid",
    layoutType = "flex",
    color,
    className,
    xxsCols,
    xsCols,
    smCols,
    mdCols,
    lgCols,
    xlCols,
    xxlCols,
    mobileCols,
    tabletCols,
    desktopCols,
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
    const strokeWidth = thickness + 1; // best fit

    useApplyStyle(ref, {
        [styles.tokens.thickness]: `${thickness}px`,
        [styles.tokens.color]: color,
        [styles.tokens.backgroundImage]: `
            url('data:image/svg+xml,<svg width="8" height="${thickness}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${encodedColor}" stroke-width="${strokeWidth}" stroke-dasharray="4 4" /></svg>')`,
    });

    const isV2Layout =
        mobileCols !== undefined ||
        tabletCols !== undefined ||
        desktopCols !== undefined;

    const getColumnProps = () => {
        const xxsColsProp = xxsCols || [1, -1];
        const xsColsProp = xsCols || xxsColsProp;
        const smColsProp = smCols || xsColsProp;
        const mdColsProp = mdCols || smColsProp;
        const lgColsProp = lgCols || mdColsProp;
        const xlColsProp = xlCols || lgColsProp;
        const xxlColsProp = xxlCols || xlColsProp;

        return {
            xxlCols: xxlColsProp,
            xlCols: xlColsProp,
            lgCols: lgColsProp,
            mdCols: mdColsProp,
            smCols: smColsProp,
            xsCols: xsColsProp,
            xxsCols: xxsColsProp,
        };
    };

    const lineClass = clsx(styles.lineBase, lineStyleMap[lineStyle]);

    switch (layoutType) {
        case "flex":
            return (
                <hr
                    ref={ref}
                    className={clsx(lineClass, className)}
                    {...otherProps}
                />
            );
        case "grid":
            if (isV2Layout) {
                return (
                    <V2_ColDiv
                        className={className}
                        mobileCols={mobileCols}
                        tabletCols={tabletCols}
                        desktopCols={desktopCols}
                        {...otherProps}
                    >
                        <hr ref={ref} className={lineClass} />
                    </V2_ColDiv>
                );
            } else {
                return (
                    <ColDiv
                        className={className}
                        {...getColumnProps()}
                        {...otherProps}
                    >
                        <hr ref={ref} className={lineClass} />
                    </ColDiv>
                );
            }
    }
};
