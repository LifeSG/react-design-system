/** @deprecated */
export type V2_TextSizeType =
    | "D1"
    | "D2"
    | "D3"
    | "D4"
    | "DBody"
    | "H1"
    | "H2"
    | "H3"
    | "H4"
    | "H5"
    | "H6"
    | "Body"
    | "BodySmall"
    | "XSmall";

/** @deprecated */
export type V2_TextLinkSizeType =
    | "Body" // Default
    | "BodySmall"; // Small

/** @deprecated */
export interface V2_TextStyleSpec {
    fontFamily?: string | undefined;
    fontSize?: number | undefined;
    fontWeight?: number | undefined;
    lineHeight?: number | undefined;
    letterSpacing?: number | undefined;
    fontVariant?: string | undefined;
}

/** @deprecated */
export type V2_TextStyleSetType = {
    [key in V2_TextSizeType]: V2_TextStyleSpec;
};

/** @deprecated */
export type V2_TextStyleSetOptionsType = Partial<V2_TextStyleSetType>;

/** @deprecated */
export type V2_TextWeight =
    | "regular"
    | "semibold"
    | "bold"
    | "light"
    | "black"
    | 400
    | 600
    | 700
    | 300
    | 900;

export enum RedirectScope {
    Subpage, // Pages we specified the routes (within this proj folder)
    Domain, // Pages not in the project but under the same domain name
}

/** @deprecated */
export interface V2_TextProps extends React.HTMLAttributes<HTMLElement> {
    weight?: V2_TextWeight | undefined;
    inline?: boolean | undefined;
    /** This is applicable only to non-headers */
    paragraph?: boolean | undefined;
    /** Specify the number of lines visible, the additional lines will be truncated  */
    maxLines?: number | undefined;
}

/** @deprecated */
export interface V2_TextLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    weight?: V2_TextWeight | undefined;
    /** Specifying this will add the external indicator */
    external?: boolean | undefined;
}

/** @deprecated */
export interface V2_TextLinkStyleProps extends V2_TextLinkProps {
    textStyle: V2_TextLinkSizeType;
}
