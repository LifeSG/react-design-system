import { TypographySizeType } from "../../theme/font/types";
export interface HtmlContentStyleOptions {
    textSize?: TypographySizeType | undefined;
}
export declare const applyHtmlContentStyle: (options?: HtmlContentStyleOptions) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
