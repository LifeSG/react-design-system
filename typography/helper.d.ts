import { TypographySizeType } from "../theme/font/types";
import { TypographyProps, TypographyWeight } from "./types";
export declare const getTextStyle: (type: TypographySizeType, weight: TypographyWeight, paragraph?: boolean) => import("styled-components").FlattenSimpleInterpolation;
export declare const getDisplayStyle: (inline?: boolean, paragraph?: boolean) => import("styled-components").FlattenSimpleInterpolation;
export declare const createTypographyStyles: (textStyle: TypographySizeType, props: TypographyProps) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
