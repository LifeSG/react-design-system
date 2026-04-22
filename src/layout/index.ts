import { ColDiv } from "./col-div";
import { Container } from "./container";
import { Content } from "./content";
import { Section } from "./section";

/**
 * A collection of responsive layout primitives built on a 12-column grid.
 *
 * Use `Layout.Section`, `Layout.Container`, `Layout.Content`, and `Layout.ColDiv`
 * to compose page-level structure with consistent spacing and breakpoint behaviour.
 * @example
 * ```tsx
 * <Layout.Section>
 *   <Layout.Container>
 *     <Layout.ColDiv lgCols={6}>content</Layout.ColDiv>
 *   </Layout.Container>
 * </Layout.Section>
 * ```
 */
export const Layout = {
    Section: Section,
    Container: Container,
    Content: Content,
    ColDiv: ColDiv,
};

export * from "./types";
