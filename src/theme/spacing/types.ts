import { SpacingScheme } from "../types";

export type SpacingSetType = {
    "spacing-0": string;
    "spacing-4": string;
    "spacing-8": string;
    "spacing-12": string;
    "spacing-16": string;
    "spacing-20": string;
    "spacing-24": string;
    "spacing-32": string;
    "spacing-40": string;
    "spacing-48": string;
    "spacing-64": string;
    "spacing-72": string;

    "layout-xs": string;
    "layout-sm": string;
    "layout-md": string;
    "layout-lg": string;
    "layout-xl": string;
    "layout-xxl": string;
    "layout-xxxl": string;
};

export type SpacingSetOptions = Partial<SpacingSetType>;

export type SpacingCollectionsMap = {
    [key in SpacingScheme]: SpacingSetType;
};
