import { ColDiv } from "../layout/col-div";
import { DashedLineFlex, DashedLineGrid, Line } from "./divider.style";
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
    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderForGridLayout = () => {
        switch (lineStyle) {
            case "dashed":
                return (
                    <DashedLineGrid
                        className={className}
                        mobileCols={mobileCols}
                        tabletCols={tabletCols}
                        desktopCols={desktopCols}
                        $thickness={thickness}
                        $lineStyle={lineStyle}
                        $color={color}
                        {...otherProps}
                    />
                );
            case "solid":
                return (
                    <ColDiv
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
                            data-id="divider"
                        />
                    </ColDiv>
                );
        }
    };

    const renderForFlexLayout = () => {
        let LineComponent;

        switch (lineStyle) {
            case "dashed":
                LineComponent = DashedLineFlex;
                break;
            case "solid":
                LineComponent = Line;
        }

        return (
            <LineComponent
                className={className}
                $thickness={thickness}
                $lineStyle={lineStyle}
                $color={color}
                {...otherProps}
            />
        );
    };

    switch (layoutType) {
        case "flex":
            return renderForFlexLayout();
        case "grid":
            return renderForGridLayout();
    }
};
