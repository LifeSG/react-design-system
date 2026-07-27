/**
 * A collection of pre-styled text components covering headings, body copy, and
 * hyperlinks.
 *
 * Use `Typography` sub-components to render consistently sized and weighted
 * text.
 *
 * Sub-components:
 * - Heading variants (`HeadingXXL` through `HeadingXS`) render semantic heading elements by default.
 * - Body variants (`BodyBL`, `BodyMD`, `BodySM`, `BodyXS`) render `p` elements.
 * - Link variants (`LinkBL`, `LinkMD`, `LinkSM`, `LinkXS`) render `a` elements .
 *
 * @remarks All text variants accept an `as` prop to
 * override the rendered element for semantic flexibility.
 */
export declare const Typography: {
    /** Renders the largest heading (`h1`). */
    HeadingXXL: (props: Omit<any, "ref"> & {
        weight?: import("./types").TypographyWeight | undefined;
        inline?: boolean | undefined;
        paragraph?: boolean | undefined;
        maxLines?: number | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & import("react").RefAttributes<HTMLHeadingElement>) => React.ReactElement | null;
    /** Renders an extra-large heading (`h2`). */
    HeadingXL: (props: Omit<any, "ref"> & {
        weight?: import("./types").TypographyWeight | undefined;
        inline?: boolean | undefined;
        paragraph?: boolean | undefined;
        maxLines?: number | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & import("react").RefAttributes<HTMLHeadingElement>) => React.ReactElement | null;
    /** Renders a large heading (`h3`). */
    HeadingLG: (props: Omit<any, "ref"> & {
        weight?: import("./types").TypographyWeight | undefined;
        inline?: boolean | undefined;
        paragraph?: boolean | undefined;
        maxLines?: number | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & import("react").RefAttributes<HTMLHeadingElement>) => React.ReactElement | null;
    /** Renders a medium heading (`h4`). */
    HeadingMD: (props: Omit<any, "ref"> & {
        weight?: import("./types").TypographyWeight | undefined;
        inline?: boolean | undefined;
        paragraph?: boolean | undefined;
        maxLines?: number | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & import("react").RefAttributes<HTMLHeadingElement>) => React.ReactElement | null;
    /** Renders a small heading (`h5`). */
    HeadingSM: (props: Omit<any, "ref"> & {
        weight?: import("./types").TypographyWeight | undefined;
        inline?: boolean | undefined;
        paragraph?: boolean | undefined;
        maxLines?: number | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & import("react").RefAttributes<HTMLHeadingElement>) => React.ReactElement | null;
    /** Renders the smallest heading (`h6`). */
    HeadingXS: (props: Omit<any, "ref"> & {
        weight?: import("./types").TypographyWeight | undefined;
        inline?: boolean | undefined;
        paragraph?: boolean | undefined;
        maxLines?: number | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & import("react").RefAttributes<HTMLHeadingElement>) => React.ReactElement | null;
    /** Renders baseline body text (`p`). */
    BodyBL: (props: Omit<any, "ref"> & {
        weight?: import("./types").TypographyWeight | undefined;
        inline?: boolean | undefined;
        paragraph?: boolean | undefined;
        maxLines?: number | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & import("react").RefAttributes<HTMLParagraphElement>) => React.ReactElement | null;
    /** Renders medium body text (`p`). */
    BodyMD: (props: Omit<any, "ref"> & {
        weight?: import("./types").TypographyWeight | undefined;
        inline?: boolean | undefined;
        paragraph?: boolean | undefined;
        maxLines?: number | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & import("react").RefAttributes<HTMLParagraphElement>) => React.ReactElement | null;
    /** Renders small body text (`p`). */
    BodySM: (props: Omit<any, "ref"> & {
        weight?: import("./types").TypographyWeight | undefined;
        inline?: boolean | undefined;
        paragraph?: boolean | undefined;
        maxLines?: number | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & import("react").RefAttributes<HTMLParagraphElement>) => React.ReactElement | null;
    /** Renders extra-small body text (`p`). */
    BodyXS: (props: Omit<any, "ref"> & {
        weight?: import("./types").TypographyWeight | undefined;
        inline?: boolean | undefined;
        paragraph?: boolean | undefined;
        maxLines?: number | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & import("react").RefAttributes<HTMLParagraphElement>) => React.ReactElement | null;
    /** Renders a baseline-size hyperlink (`a`). */
    LinkBL: (props: import("./types").TypographyLinkProps & import("react").RefAttributes<HTMLAnchorElement>) => React.ReactElement | null;
    /** Renders a medium-size hyperlink (`a`). */
    LinkMD: (props: import("./types").TypographyLinkProps & import("react").RefAttributes<HTMLAnchorElement>) => React.ReactElement | null;
    /** Renders a small-size hyperlink (`a`). */
    LinkSM: (props: import("./types").TypographyLinkProps & import("react").RefAttributes<HTMLAnchorElement>) => React.ReactElement | null;
    /** Renders an extra-small hyperlink (`a`). */
    LinkXS: (props: import("./types").TypographyLinkProps & import("react").RefAttributes<HTMLAnchorElement>) => React.ReactElement | null;
};
export * from "./types";
