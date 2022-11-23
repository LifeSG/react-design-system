import { TextLinkSizeType, TextSizeType, TextWeight } from "./types";
export declare const TextStyleHelper: {
    getFontFamily: (type: TextSizeType | TextLinkSizeType, weight?: TextWeight) => (props: any) => import("styled-components").FlattenSimpleInterpolation;
    getTextStyle: (type: TextSizeType | TextLinkSizeType, weight: TextWeight, paragraph?: boolean) => (props: any) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
    getDisplayStyle: (inline?: boolean, paragraph?: boolean) => import("styled-components").FlattenSimpleInterpolation;
};
