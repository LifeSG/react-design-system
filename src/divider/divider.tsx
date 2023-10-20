import { ColDiv } from "../layout/col-div";
import { DashedLine, Line } from "./divider.style";
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
    let LineComponent;

    switch (lineStyle) {
        case "dashed":
            LineComponent = DashedLine;
            break;
        case "solid":
            LineComponent = Line;
    }

    switch (layoutType) {
        case "flex":
            return (
                <LineComponent
                    className={className}
                    $thickness={thickness}
                    $lineStyle={lineStyle}
                    $color={color}
                    {...otherProps}
                />
            );
        case "grid":
            return (
                <ColDiv
                    className={className}
                    mobileCols={mobileCols}
                    tabletCols={tabletCols}
                    desktopCols={desktopCols}
                    {...otherProps}
                >
                    <LineComponent
                        $thickness={thickness}
                        $lineStyle={lineStyle}
                        $color={color}
                    />
                </ColDiv>
            );
    }
};
