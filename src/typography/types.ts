import type { FontSize } from "../theme";

export type TypographyWeight = "regular" | "semibold" | "bold" | "light";
export type TypographySize = Exclude<
    FontSize,
    "form-label" | "form-description"
>;

export type TypographyProps<T extends React.ElementType = React.ElementType> =
    React.ComponentPropsWithoutRef<T> & {
        /** The font weight */
        weight?: TypographyWeight | undefined;
        /** Specifies if text is displayed inline */
        inline?: boolean | undefined;
        /** Specifies if text has a bottom margin */
        paragraph?: boolean | undefined;
        /** Specify the number of lines visible, the additional lines will be truncated */
        maxLines?: number | undefined;
        /** Overrides rendered element, e.g. `h2` for semantic hierarchy */
        as?: T | undefined;
    };

export type TypographyUnderlineStyle = "none" | "underline";

export interface TypographyLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** The font weight */
    weight?: TypographyWeight | undefined;
    /** Displays indicator to signal that link leads to an external site */
    external?: boolean | undefined;
    /** Toggle text decoration for hyperlinks, underline by default */
    underlineStyle?: TypographyUnderlineStyle | undefined;
}
