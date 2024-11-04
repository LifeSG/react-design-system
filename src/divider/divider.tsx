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
    xxsCols = 4,
    mdCols = 8,
    xlCols = 12,
    mobileCols,
    tabletCols,
    desktopCols,
    ...otherProps
}: DividerProps) => {
    const isV2Layout =
        mobileCols !== undefined ||
        tabletCols !== undefined ||
        desktopCols !== undefined;

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
                        xxsCols={xxsCols}
                        mdCols={mdCols}
                        xlCols={xlCols}
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
