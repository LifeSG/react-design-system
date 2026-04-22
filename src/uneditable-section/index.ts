import { UneditableItemSection } from "./item-section";
import { UneditableSectionItem } from "./section-item";
import { UneditableSectionBase } from "./uneditable-section";

export * from "./types";
export const UneditableSection = Object.assign(UneditableSectionBase, {
    ItemSection: UneditableItemSection,
    Item: UneditableSectionItem,
});
