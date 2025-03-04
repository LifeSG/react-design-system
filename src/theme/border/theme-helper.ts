import { CSSProp } from "styled-components";
import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { BorderScheme, ThemeCollectionSpec } from "../types";
import { LifeSgBorderSet } from "./specs/lifesg-border-set";
import { BorderCollectionMap, BorderSet } from "./types";

const BorderSpec: ThemeCollectionSpec<BorderCollectionMap, BorderScheme> = {
    collections: {
        lifesg: LifeSgBorderSet,
    },
    defaultValue: "lifesg",
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

const isStyledProps = (args: any): args is [StyledComponentProps] =>
    args.length === 1 && "theme" in args[0];

export const getBorderStyle = (key: "dashed-default") => {
    return (
            ...args: Parameters<BorderSet[typeof key]> | [StyledComponentProps]
        ) =>
        (props: StyledComponentProps): CSSProp => {
            const resolvedOptions = isStyledProps(args) ? [] : args;
            const resolvedStyledProps = isStyledProps(args) ? args[0] : props;

            const theme = resolvedStyledProps.theme;
            const borderSet: BorderSet = getCollection(
                BorderSpec,
                theme?.borderScheme
            );

            const borderValue = theme?.overrides?.border
                ? getValue(borderSet, key, theme.overrides.border)
                : borderSet[key];

            return borderValue(...resolvedOptions)(resolvedStyledProps);
        };
};

export const BorderValues = {
    "width-005": getBorderWidth("width-005"),
    "width-010": getBorderWidth("width-010"),
    "width-020": getBorderWidth("width-020"),
    "width-040": getBorderWidth("width-040"),
    solid: getBorder("solid"),
    "dashed-default": getBorderStyle("dashed-default"),
};
