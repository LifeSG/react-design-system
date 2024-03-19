import { TextLinkSizeType, TextSizeType } from "../../text";
interface HtmlContentStyleOptions {
    textColor?: string | ((props: any) => string);
}
export declare const applyHtmlContentStyle: (textStyle: TextSizeType | TextLinkSizeType, options?: HtmlContentStyleOptions) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export {};
