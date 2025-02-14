import { SpacingScheme } from "../types";
export type SpacingSet = {
    "spacing-0": number;
    "spacing-4": number;
    "spacing-8": number;
    "spacing-12": number;
    "spacing-16": number;
    "spacing-20": number;
    "spacing-24": number;
    "spacing-32": number;
    "spacing-40": number;
    "spacing-48": number;
    "spacing-64": number;
    "spacing-72": number;
    "layout-xs": number;
    "layout-sm": number;
    "layout-md": number;
    "layout-lg": number;
    "layout-xl": number;
    "layout-xxl": number;
    "layout-xxxl": number;
};
export type SpacingSetOptions = Partial<SpacingSet>;
export type SpacingCollectionsMap = {
    [key in SpacingScheme]: SpacingSet;
};
