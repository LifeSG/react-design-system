import { UneditableSectionBase } from "./uneditable-section";
import { GridUl } from "./uneditable-section.styles";
import { UneditableSectionItem } from "./section-item";

export * from "./types";
export const UneditableSection = Object.assign(UneditableSectionBase, {
    ItemSection: GridUl,
    Item: UneditableSectionItem,
});
