import type { V3_TypographySizeType } from "../v3_theme/font/types";
import type { TypographyWeight } from "./types";
export declare const getTextStyle: (type: V3_TypographySizeType, weight: TypographyWeight, paragraph?: boolean) => import("styled-components").RuleSet<object>;
export declare const getDisplayStyle: (inline?: boolean, paragraph?: boolean, maxLines?: number | undefined) => import("styled-components").RuleSet<object>;
export declare const createTypographyStyles: (textStyle: V3_TypographySizeType, weight: TypographyWeight | undefined, inline: boolean | undefined, paragraph: boolean | undefined, maxLines: number | undefined) => import("styled-components").RuleSet<object>;
