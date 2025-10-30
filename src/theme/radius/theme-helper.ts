import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { ThemeCollectionSpec } from "../internal-types";
import { RadiusScheme } from "../types";
import { DefaultRadiusSet } from "./specs/default-radius-set";
import { SPFRadiusSet } from "./specs/spf-radius-set";
import { RadiusCollectionsMap, RadiusSet } from "./types";

const RadiusSpec: ThemeCollectionSpec<RadiusCollectionsMap, RadiusScheme> = {
    collections: {
        default: DefaultRadiusSet,
        spf: SPFRadiusSet,
    },
    defaultValue: "default",
};

export const getRadius = (key: keyof RadiusSet) => {
    return (props: StyledComponentProps): string => {
        const theme = props.theme;
        const radiusSet: RadiusSet = getCollection(
            RadiusSpec,
            theme?.radiusScheme
        );

        if (theme?.overrides?.radius) {
            return `${getValue(radiusSet, key, theme.overrides.radius)}px`;
        } else {
            return `${radiusSet[key]}px`;
        }
    };
};

export const RadiusValues: {
    [key in keyof RadiusSet]: (props: StyledComponentProps) => string;
} = {
    none: getRadius("none"),
    xs: getRadius("xs"),
    sm: getRadius("sm"),
    md: getRadius("md"),
    lg: getRadius("lg"),
    full: getRadius("full"),
};
