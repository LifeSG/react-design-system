/// <reference types="react" />
export declare type TextSizeType = "D1" | "D2" | "D3" | "D4" | "DBody" | "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "Body" | "BodySmall" | "XSmall";
export declare type TextLinkSizeType = "Body" | "BodySmall";
export interface TextStyleSpec {
    fontFamily?: string | undefined;
    fontSize?: number | undefined;
    fontWeight?: number | undefined;
    lineHeight?: number | undefined;
    letterSpacing?: number | undefined;
}
export declare type TextStyleSetType = {
    [key in TextSizeType]: TextStyleSpec;
};
export declare type TextStyleSetOptionsType = Partial<TextStyleSetType>;
export declare type TextWeight = "regular" | "semibold" | "bold" | "light" | "black" | 400 | 600 | 700 | 300 | 900;
export declare enum RedirectScope {
    Subpage = 0,
    Domain = 1
}
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
    weight?: TextWeight | undefined;
    inline?: boolean | undefined;
    /** This is applicable only to non-headers */
    paragraph?: boolean | undefined;
}
export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    weight?: TextWeight | undefined;
    /** Specifying this will add the external indicator */
    external?: boolean | undefined;
}
export interface TextLinkStyleProps extends TextLinkProps {
    textStyle: TextLinkSizeType;
}
