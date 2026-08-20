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
export declare const Layout: {
    /** Renders a `<div>` that occupies a responsive column span within a grid `Container`. */
    ColDiv: (props: import("./types").ColDivProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null;
    /** Renders a flex or grid layout wrapper constrained to the content width. */
    Container: (props: import("./types").ContainerProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null;
    /** The primary content block — composes a `Section` with an inner `Container`. */
    Content: (props: import("./types").ContentProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null;
    /** Renders a full-width semantic `<section>` page region. */
    Section: (props: import("./types").SectionProps & import("react").RefAttributes<HTMLDivElement>) => React.ReactElement | null;
};
export * from "./types";
