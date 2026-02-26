import { V3_StyledComponentProps, getCollection, getValue } from "../helpers";
import { V3_ThemeCollectionSpec } from "../internal-types";
import { V3_RadiusScheme } from "../types";
import { V3_DefaultRadiusSet } from "./specs/default-radius-set";
import { V3_SPFRadiusSet } from "./specs/spf-radius-set";
import { V3_RadiusCollectionsMap, V3_RadiusSet } from "./types";

const V3_RadiusSpec: V3_ThemeCollectionSpec<
    V3_RadiusCollectionsMap,
    V3_RadiusScheme
> = {
    collections: {
        default: V3_DefaultRadiusSet,
        spf: V3_SPFRadiusSet,
    },
    defaultValue: "default",
};

export const getRadius = (key: keyof V3_RadiusSet) => {
    return (props: V3_StyledComponentProps): string => {
        const theme = props.theme;
        const radiusSet: V3_RadiusSet = getCollection(
            V3_RadiusSpec,
            theme?.radiusScheme
        );

        if (theme?.overrides?.radius) {
            return `${getValue(radiusSet, key, theme.overrides.radius)}px`;
        } else {
            return `${radiusSet[key]}px`;
        }
    };
};

export const V3_RadiusValues: {
    [key in keyof V3_RadiusSet]: (props: V3_StyledComponentProps) => string;
} = {
    none: getRadius("none"),
    xs: getRadius("xs"),
    sm: getRadius("sm"),
    md: getRadius("md"),
    lg: getRadius("lg"),
    full: getRadius("full"),
};
