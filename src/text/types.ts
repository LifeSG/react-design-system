export type TextSizeType =
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

export type TextLinkSizeType =
    | "Body" // Default
    | "BodySmall"; // Small

export interface TextStyleSpec {
    fontFamily?: string | undefined;
    fontSize?: number | undefined;
    fontWeight?: number | undefined;
    lineHeight?: number | undefined;
    letterSpacing?: number | undefined;
    fontVariant?: string | undefined;
}

export type TextStyleSetType = { [key in TextSizeType]: TextStyleSpec };

export type TextStyleSetOptionsType = Partial<TextStyleSetType>;

export type TextWeight =
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

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
    weight?: TextWeight | undefined;
    inline?: boolean | undefined;
    /** This is applicable only to non-headers */
    paragraph?: boolean | undefined;
    /** Specify the number of lines visible, the additional lines will be truncated  */
    maxLines?: number | undefined;
}

export interface TextLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    weight?: TextWeight | undefined;
    /** Specifying this will add the external indicator */
    external?: boolean | undefined;
}

export interface TextLinkStyleProps extends TextLinkProps {
    textStyle: TextLinkSizeType;
}
