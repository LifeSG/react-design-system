import {
    BodyBL,
    BodyMD,
    BodySM,
    BodyXS,
    HeadingLG,
    HeadingMD,
    HeadingSM,
    HeadingXL,
    HeadingXS,
    HeadingXXL,
    LinkBL,
    LinkMD,
    LinkSM,
    LinkXS,
} from "./typography";

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
export const Typography = {
    /** Renders the largest heading (`h1`). */
    HeadingXXL,
    /** Renders an extra-large heading (`h2`). */
    HeadingXL,
    /** Renders a large heading (`h3`). */
    HeadingLG,
    /** Renders a medium heading (`h4`). */
    HeadingMD,
    /** Renders a small heading (`h5`). */
    HeadingSM,
    /** Renders the smallest heading (`h6`). */
    HeadingXS,
    /** Renders baseline body text (`p`). */
    BodyBL,
    /** Renders medium body text (`p`). */
    BodyMD,
    /** Renders small body text (`p`). */
    BodySM,
    /** Renders extra-small body text (`p`). */
    BodyXS,
    /** Renders a baseline-size hyperlink (`a`). */
    LinkBL,
    /** Renders a medium-size hyperlink (`a`). */
    LinkMD,
    /** Renders a small-size hyperlink (`a`). */
    LinkSM,
    /** Renders an extra-small hyperlink (`a`). */
    LinkXS,
};

export * from "./types";
