import { CellType, LabelType } from "./types";
interface StyleProps {
    $type?: CellType;
    $shadow?: boolean;
}
interface LabelStyleProps {
    $type: LabelType;
    $disabled: boolean;
    $interactive: boolean;
}
export declare const Cell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const LeftHalf: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const RightHalf: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const LeftHalfShadow: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const RightHalfShadow: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const Circle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const LeftCircle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const RightCircle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyleProps, never>;
export declare const Label: import("styled-components").StyledComponent<"h5", import("styled-components").DefaultTheme, import("../../../text").TextProps & LabelStyleProps, never>;
export {};
