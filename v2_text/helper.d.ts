import { V2_TextLinkSizeType, V2_TextSizeType, V2_TextWeight } from "./types";
/** @deprecated */
export declare const V2_TextStyleHelper: {
    getFontFamily: (type: V2_TextSizeType | V2_TextLinkSizeType, weight?: V2_TextWeight) => (props: any) => import("styled-components").RuleSet<object>;
    getTextStyle: (type: V2_TextSizeType | V2_TextLinkSizeType, weight: V2_TextWeight | undefined, paragraph?: boolean) => (props: any) => import("styled-components").RuleSet<object>;
    getDisplayStyle: (inline?: boolean, paragraph?: boolean, maxLines?: number | undefined) => import("styled-components").RuleSet<object>;
};
