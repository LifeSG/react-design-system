import { V3_StyledComponentProps, getCollection, getValue } from "../helpers";
import { V3_ThemeCollectionSpec } from "../internal-types";
import { V3_BorderScheme } from "../types";
import { V3_DefaultBorderSet } from "./specs/default-border-set";
import { V3_BorderCollectionMap, V3_BorderSet } from "./types";

const V3_BorderSpec: V3_ThemeCollectionSpec<
    V3_BorderCollectionMap,
    V3_BorderScheme
> = {
    collections: {
        default: V3_DefaultBorderSet,
    },
    defaultValue: "default",
};

export const getBorderWidth = (
    key: "width-005" | "width-010" | "width-020" | "width-040"
) => {
    return (props: V3_StyledComponentProps) => {
        const theme = props.theme;
        const borderSet: V3_BorderSet = getCollection(
            V3_BorderSpec,
            theme?.borderScheme
        );

        if (theme?.overrides?.border) {
            return `${getValue(borderSet, key, theme.overrides.border)}px`;
        } else {
            return `${borderSet[key]}px`;
        }
    };
};

export const getBorder = (key: "solid") => {
    return (props: V3_StyledComponentProps): string => {
        const theme = props.theme;
        const borderSet: V3_BorderSet = getCollection(
            V3_BorderSpec,
            theme?.borderScheme
        );

        // check for an override
        const borderValue = theme?.overrides?.border
            ? getValue(borderSet, key, theme.overrides.border)
            : borderSet[key];

        // If function, resolve with props
        if (typeof borderValue === "function") {
            return (borderValue as (props: any) => string)(props);
        }

        return borderValue as string;
    };
};

export const V3_BorderValues = {
    "width-005": getBorderWidth("width-005"),
    "width-010": getBorderWidth("width-010"),
    "width-020": getBorderWidth("width-020"),
    "width-040": getBorderWidth("width-040"),
    solid: getBorder("solid"),
};
