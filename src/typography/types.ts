import type { FontSize } from "../theme";

// @storybookSection Heading/Body, Link
/** Font weight variant applied to a typography element. */
export type TypographyWeight = "regular" | "semibold" | "bold" | "light";

// @storybookSkipProps
/**
 * Text size token for a typography element.
 */
export type TypographySize = Exclude<
    FontSize,
    "form-label" | "form-description"
>;

// @storybookSection Heading/Body
/**
 * Props shared by all non-link typography variants.
 *
 * The generic `T` narrows the element type for the `as` prop and ensures
 * forwarded HTML attributes match the rendered element.
 */
export type TypographyProps<T extends React.ElementType = React.ElementType> =
    React.ComponentPropsWithoutRef<T> & {
        /**
         * Font weight of the rendered text.
         *
         * @default "regular"
         */
        weight?: TypographyWeight | undefined;
        /**
         * Renders the element as an inline `span`. When `true`, the `as` prop
         * is ignored and `maxLines` clamping is disabled.
         */
        inline?: boolean | undefined;
        /**
         * Adds a bottom margin to separate the element from following content.
         */
        paragraph?: boolean | undefined;
        /**
         * Clamps visible text to the given number of lines, truncating the
         * remainder.
         *
         * @remarks Has no effect when `inline` is `true`.
         */
        maxLines?: number | undefined;
        /**
         * Overrides the rendered HTML element, e.g. `"h2"`.
         *
         * @remarks Has no effect when `inline` is `true`.
         */
        as?: T | undefined;
    };

// @storybookSection Link
/** Text-decoration style applied to a link typography element. */
export type TypographyUnderlineStyle = "none" | "underline";

// @storybookSection Link
/**
 * Props for all link typography variants.
 */
export interface TypographyLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * Font weight of the link text.
     *
     * @default "regular"
     */
    weight?: TypographyWeight | undefined;
    /**
     * Appends an external-link icon after the link text to signal that the
     * destination is outside the current site.
     */
    external?: boolean | undefined;
    /**
     * Text-decoration style for the link.
     *
     * @default "underline"
     */
    underlineStyle?: TypographyUnderlineStyle | undefined;
}
