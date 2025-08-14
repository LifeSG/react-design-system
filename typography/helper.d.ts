import { TypographySizeType } from "../theme/font/types";
import { TypographyProps, TypographyWeight } from "./types";
export declare const getTextStyle: (type: TypographySizeType, weight: TypographyWeight, paragraph?: boolean) => import("styled-components").RuleSet<object>;
export declare const getDisplayStyle: (inline?: boolean, paragraph?: boolean, maxLines?: number | undefined) => import("styled-components").RuleSet<object>;
export declare const createTypographyStyles: (textStyle: TypographySizeType, props: TypographyProps) => import("styled-components").RuleSet<object>;
