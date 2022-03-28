import { TTextLinkSizeType } from "../styles/spec/types";

export type TextWeight = "regular" | "semibold" | "bold" | "light";

export enum RedirectScope {
    Subpage, // Pages we specified the routes (within this proj folder)
    Domain, // Pages not in the project but under the same domain name
}

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
    weight?: TextWeight;
    inline?: boolean;
    /** This is applicable only to non-headers */
    paragraph?: boolean;
}

export interface TextLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    weight?: TextWeight;
    external?: boolean;
}

export interface TextLinkStyleProps extends TextLinkProps {
    textStyle: TTextLinkSizeType;
}
