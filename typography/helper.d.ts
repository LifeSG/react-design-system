import { TypographySizeType } from "../theme/font/types";
import { TypographyWeight } from "./types";
export declare const getTextStyle: (type: TypographySizeType, weight: TypographyWeight, paragraph?: boolean) => import("styled-components").RuleSet<object>;
export declare const getDisplayStyle: (inline?: boolean, paragraph?: boolean, maxLines?: number | undefined) => import("styled-components").RuleSet<object>;
export declare const createTypographyStyles: (textStyle: TypographySizeType, weight: TypographyWeight | undefined, inline: boolean | undefined, paragraph: boolean | undefined, maxLines: number | undefined) => import("styled-components").RuleSet<object>;
