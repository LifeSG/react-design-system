import { ColDiv } from "../layout/col-div";
import { V2_ColDiv } from "../v2_layout/col-div";
import { Line } from "./divider.style";
import { DividerProps } from "./types";

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

    switch (layoutType) {
        case "flex":
            return (
                <Line
                    className={className}
                    $thickness={thickness}
                    $lineStyle={lineStyle}
                    $color={color}
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
                        <Line
                            $thickness={thickness}
                            $lineStyle={lineStyle}
                            $color={color}
                        />
                    </V2_ColDiv>
                );
            } else {
                return (
                    <ColDiv
                        className={className}
                        {...getColumnProps()}
                        {...otherProps}
                    >
                        <Line
                            $thickness={thickness}
                            $lineStyle={lineStyle}
                            $color={color}
                        />
                    </ColDiv>
                );
            }
    }
};
