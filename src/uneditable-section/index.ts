import { UneditableItemSection } from "./item-section";
import { UneditableSectionItem } from "./section-item";
import { UneditableSectionBase } from "./uneditable-section";

export * from "./types";

// @catalog
/**
 * A read-only summary section for displaying labeled field values.
 *
 * Use `UneditableSection` to present a group of non-editable field–value pairs
 * in a responsive grid layout
 *
 * Sub-components:
 * - `UneditableSection.Item` — a standalone labeled read-only field with optional masking.
 * - `UneditableSection.ItemSection` — a standalone grid list for composing items.
 */
export const UneditableSection = Object.assign(UneditableSectionBase, {
    /**
     * A standalone grid list for rendering `UneditableSection.Item` elements
     * outside the full section wrapper.
     */
    ItemSection: UneditableItemSection,
    /** A standalone labeled read-only field with optional masking support. */
    Item: UneditableSectionItem,
});
