import { CellType, LabelType } from "./types";
interface StyleProps {
    $type?: CellType;
}
interface LabelStyleProps {
    $type: LabelType;
    $disabled: boolean;
    $interactive: boolean | null;
}
interface IndicatorStyleProps {
    $disabled: boolean;
}
export declare const Cell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const LeftHalf: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const RightHalf: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const Circle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const LeftCircle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const RightCircle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const Label: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, LabelStyleProps, never>;
export declare const Indicator: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, IndicatorStyleProps, never>;
export {};
