import { TextSizeType } from "../../text";
export interface HtmlContentStyleOptions {
    textSize?: TextSizeType | undefined;
}
export declare const applyHtmlContentStyle: (options?: HtmlContentStyleOptions) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
