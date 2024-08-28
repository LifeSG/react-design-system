import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { RadiusScheme, ThemeCollectionSpec } from "../types";
import { LifeSgRadiusSet } from "./specs/lifesg-radius-set";
import { RadiusCollectionsMap, RadiusSet } from "./types";

const RadiusSpec: ThemeCollectionSpec<RadiusCollectionsMap, RadiusScheme> = {
    collections: {
        lifesg: LifeSgRadiusSet,
    },
    defaultValue: "lifesg",
};

export const getSpaceValue = (key: keyof RadiusSet) => {
    return (props: StyledComponentProps): string => {
        const theme = props.theme;
        const spacingset: RadiusSet = getCollection(
            RadiusSpec,
            theme.spacingScheme
        );

        if (theme.overrides && theme.overrides.radius) {
            return getValue(spacingset, key, theme.overrides.radius);
        } else {
            return spacingset[key];
        }
    };
};

export const RadiusSetValue = {
    none: getSpaceValue("none"),
    xs: getSpaceValue("xs"),
    sm: getSpaceValue("sm"),
    md: getSpaceValue("md"),
    lg: getSpaceValue("lg"),
    full: getSpaceValue("full"),
};
