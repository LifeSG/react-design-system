import { V2_ColDiv } from "../v2_layout/col-div";
import { Line } from "./divider.style";
import { DividerProps } from "./types";

export const Divider = ({
    thickness = 1,
    lineStyle = "solid",
    layoutType = "flex",
    color,
    className,
    mobileCols = 4,
    tabletCols = 8,
    desktopCols = 12,
    ...otherProps
}: DividerProps) => {
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
    }
};
