import type { V3_TypographySizeType } from "../../v3_theme/font/types";
export interface HtmlContentStyleOptions {
    textSize?: V3_TypographySizeType | undefined;
}
export declare const applyHtmlContentStyle: (options?: HtmlContentStyleOptions) => import("styled-components").RuleSet<object>;
