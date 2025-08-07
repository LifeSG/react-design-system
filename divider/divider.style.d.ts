import { ThemeStyleProps } from "../theme/types";
import { DividerLineStyleType } from "./types";
interface StyleProps {
    $thickness: number;
    $color?: string | ((props: ThemeStyleProps) => string);
    $lineStyle?: DividerLineStyleType;
}
export declare const Line: import("styled-components").StyledComponent<"hr", import("styled-components").DefaultTheme, StyleProps, never>;
export {};
