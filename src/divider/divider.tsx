import { useTheme } from "styled-components";
import { ColDiv } from "../layout/col-div";
import { V2_ColDiv } from "../v2_layout/col-div";
import { Line } from "./divider.style";
import { DividerProps } from "./types";
import { Breakpoint } from "../theme";

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
    mobileCols = 4,
    tabletCols = 8,
    desktopCols = 12,
    ...otherProps
}: DividerProps) => {
    const theme = useTheme();
    const isV2Layout =
        mobileCols !== undefined ||
        tabletCols !== undefined ||
        desktopCols !== undefined;

    const colProps = {
        xxsCols: xxsCols ?? Breakpoint["xxs-column"]({ theme }),
        xsCols: xsCols ?? Breakpoint["xs-column"]({ theme }),
        smCols: smCols ?? Breakpoint["sm-column"]({ theme }),
        mdCols: mdCols ?? Breakpoint["md-column"]({ theme }),
        lgCols: lgCols ?? Breakpoint["lg-column"]({ theme }),
        xlCols: xlCols ?? Breakpoint["xl-column"]({ theme }),
        xxlCols: xxlCols ?? Breakpoint["xxl-column"]({ theme }),
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
                    <ColDiv className={className} {...colProps} {...otherProps}>
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
