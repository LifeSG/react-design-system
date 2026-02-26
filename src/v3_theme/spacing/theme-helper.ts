import { V3_StyledComponentProps, getCollection, getValue } from "../helpers";
import { V3_ThemeCollectionSpec } from "../internal-types";
import { V3_SpacingScheme } from "../types";
import { V3_DefaultSpacingSet } from "./specs/default-spacing-set";
import { V3_SpacingCollectionsMap, V3_SpacingSet } from "./types";

const V3_SpacingSpec: V3_ThemeCollectionSpec<
    V3_SpacingCollectionsMap,
    V3_SpacingScheme
> = {
    collections: {
        default: V3_DefaultSpacingSet,
    },
    defaultValue: "default",
};

export const getSpace = (key: keyof V3_SpacingSet) => {
    return (props: V3_StyledComponentProps): string => {
        const theme = props.theme;
        const spacingSet: V3_SpacingSet = getCollection(
            V3_SpacingSpec,
            theme?.spacingScheme
        );

        if (theme?.overrides?.spacing) {
            return `${getValue(spacingSet, key, theme.overrides.spacing)}px`;
        } else {
            return `${spacingSet[key]}px`;
        }
    };
};

export const V3_SpacingValues: {
    [key in keyof V3_SpacingSet]: (props: V3_StyledComponentProps) => string;
} = {
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
