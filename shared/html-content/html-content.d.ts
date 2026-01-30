import { TypographySizeType } from "../../theme/font/types";
export interface HtmlContentStyleOptions {
    textSize?: TypographySizeType | undefined;
}
export declare const applyHtmlContentStyle: (options?: HtmlContentStyleOptions) => import("styled-components").RuleSet<object>;
