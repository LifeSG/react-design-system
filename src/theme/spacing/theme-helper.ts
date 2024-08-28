import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { SpacingScheme, ThemeCollectionSpec } from "../types";
import { LifeSgSpacingSet } from "./specs/lifesg-spacing-set";
import { SpacingCollectionsMap, SpacingSetType } from "./types";

const SpacingSpec: ThemeCollectionSpec<SpacingCollectionsMap, SpacingScheme> = {
    collections: {
        lifesg: LifeSgSpacingSet,
    },
    defaultValue: "lifesg",
};

export const getSpaceValue = (key: keyof SpacingSetType) => {
    return (props: StyledComponentProps): string => {
        const theme = props.theme;
        const spacingset: SpacingSetType = getCollection(
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

export const SpacingSetValue = {
    "spacing-0": getSpaceValue("spacing-0"),
    "spacing-4": getSpaceValue("spacing-4"),
    "spacing-8": getSpaceValue("spacing-8"),
    "spacing-12": getSpaceValue("spacing-12"),
    "spacing-16": getSpaceValue("spacing-16"),
    "spacing-20": getSpaceValue("spacing-20"),
    "spacing-24": getSpaceValue("spacing-24"),
    "spacing-32": getSpaceValue("spacing-32"),
    "spacing-40": getSpaceValue("spacing-40"),
    "spacing-48": getSpaceValue("spacing-48"),
    "spacing-64": getSpaceValue("spacing-64"),
    "spacing-72": getSpaceValue("spacing-72"),

    "layout-xs": getSpaceValue("layout-xs"),
    "layout-sm": getSpaceValue("layout-sm"),
    "layout-md": getSpaceValue("layout-md"),
    "layout-lg": getSpaceValue("layout-lg"),
    "layout-xl": getSpaceValue("layout-xl"),
    "layout-xxl": getSpaceValue("layout-xxl"),
    "layout-xxxl": getSpaceValue("layout-xxxl"),
};
