export type TypographyWeight = "regular" | "semibold" | "bold" | "light";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    /** The font weight */
    weight?: TypographyWeight | undefined;
    /** Specifies if text is displayed inline */
    inline?: boolean | undefined;
    /** Specifies if text has a bottom margin */
    paragraph?: boolean | undefined;
    /** Specify the number of lines visible, the additional lines will be truncated */
    maxLines?: number | undefined;
}

export interface TypographyLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** The font weight */
    weight?: TypographyWeight | undefined;
    /** Displays indicator to signal that link leads to an external site */
    external?: boolean | undefined;
}
