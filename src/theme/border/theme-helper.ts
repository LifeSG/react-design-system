import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { ThemeCollectionSpec } from "../internal-types";
import { BorderScheme } from "../types";
import { DefaultBorderSet } from "./specs/default-border-set";
import { BorderCollectionMap, BorderSet } from "./types";

const BorderSpec: ThemeCollectionSpec<BorderCollectionMap, BorderScheme> = {
    collections: {
        default: DefaultBorderSet,
    },
    defaultValue: "default",
};

export const getBorderWidth = (
    key: "width-005" | "width-010" | "width-020" | "width-040"
) => {
    return (props: StyledComponentProps) => {
        const theme = props.theme;
        const borderSet: BorderSet = getCollection(
            BorderSpec,
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
    return (props: StyledComponentProps): string => {
        const theme = props.theme;
        const borderSet: BorderSet = getCollection(
            BorderSpec,
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

export const BorderValues = {
    "width-005": getBorderWidth("width-005"),
    "width-010": getBorderWidth("width-010"),
    "width-020": getBorderWidth("width-020"),
    "width-040": getBorderWidth("width-040"),
    solid: getBorder("solid"),
};
