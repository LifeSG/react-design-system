import { ColDiv } from "./col-div";
import { Container } from "./container";
import { Content } from "./content";
import { Section } from "./section";

/**
 * A set of structural layout primitives for composing page regions.
 *
 * Use `Layout` sub-components to establish full-width page sections, centred
 * content areas, and responsive grid columns. Sub-components:
 * - `Layout.ColDiv` — a `<div>` that occupies a responsive column span within a grid `Container`.
 * - `Layout.Container` — a flex or grid layout wrapper constrained to the content width.
 * - `Layout.Content` — the primary content block, composes of `Section` + `Container`. Use `Section` and `Container` directly for more granular control.
 * - `Layout.Section` — a full-width semantic `<section>` page region.
 */
export const Layout = {
    /** Renders a `<div>` that occupies a responsive column span within a grid `Container`. */
    ColDiv,
    /** Renders a flex or grid layout wrapper constrained to the content width. */
    Container,
    /** The primary content block — composes a `Section` with an inner `Container`. */
    Content,
    /** Renders a full-width semantic `<section>` page region. */
    Section,
};

export * from "./types";
