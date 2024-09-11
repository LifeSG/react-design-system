import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { SpacingScheme, ThemeCollectionSpec } from "../types";
import { LifeSgSpacingSet } from "./specs/lifesg-spacing-set";
import { SpacingCollectionsMap, SpacingSet } from "./types";

const SpacingSpec: ThemeCollectionSpec<SpacingCollectionsMap, SpacingScheme> = {
    collections: {
        lifesg: LifeSgSpacingSet,
    },
    defaultValue: "lifesg",
};

export const getSpace = (key: keyof SpacingSet) => {
    return (props: StyledComponentProps): string => {
        const theme = props.theme;
        const spacingset: SpacingSet = getCollection(
            SpacingSpec,
            theme.spacingScheme
        );

        if (theme.overrides && theme.overrides.spacing) {
            return getValue(spacingset, key, theme.overrides.spacing);
        } else {
            return spacingset[key];
        }
    };
};

export const SpacingValues = {
    "spacing-0": getSpace("spacing-0"),
    "spacing-4": getSpace("spacing-4"),
    "spacing-8": getSpace("spacing-8"),
    "spacing-12": getSpace("spacing-12"),
    "spacing-16": getSpace("spacing-16"),
    "spacing-20": getSpace("spacing-20"),
    "spacing-24": getSpace("spacing-24"),
    "spacing-32": getSpace("spacing-32"),
    "spacing-40": getSpace("spacing-40"),
    "spacing-48": getSpace("spacing-48"),
    "spacing-64": getSpace("spacing-64"),
    "spacing-72": getSpace("spacing-72"),

    "layout-xs": getSpace("layout-xs"),
    "layout-sm": getSpace("layout-sm"),
    "layout-md": getSpace("layout-md"),
    "layout-lg": getSpace("layout-lg"),
    "layout-xl": getSpace("layout-xl"),
    "layout-xxl": getSpace("layout-xxl"),
    "layout-xxxl": getSpace("layout-xxxl"),
};
