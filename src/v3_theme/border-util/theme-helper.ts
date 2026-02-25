import { CSSProp } from "styled-components";
import { StyledComponentProps, getCollection } from "../helpers";
import { ThemeCollectionSpec } from "../internal-types";
import { BorderScheme } from "../types";
import { DefaultBorderUtilSet } from "./specs/default-border-util-set";
import { BorderUtilCollectionMap, BorderUtilSet } from "./types";

const BorderUtilSpec: ThemeCollectionSpec<
    BorderUtilCollectionMap,
    BorderScheme
> = {
    collections: {
        default: DefaultBorderUtilSet,
    },
    defaultValue: "default",
};

const isStyledProps = (args: any): args is [StyledComponentProps] =>
    args.length === 1 && "theme" in args[0];

export const getBorderStyle = (key: keyof BorderUtilSet) => {
    return (
            ...args:
                | Parameters<BorderUtilSet[typeof key]>
                | [StyledComponentProps]
        ) =>
        (props: StyledComponentProps): CSSProp => {
            const resolvedOptions = isStyledProps(args) ? [] : args;
            const resolvedStyledProps = isStyledProps(args) ? args[0] : props;

            const theme = resolvedStyledProps.theme;
            const borderUtilSet: BorderUtilSet = getCollection(
                BorderUtilSpec,
                theme?.borderScheme
            );

            const borderValue = borderUtilSet[key];
            return borderValue(...resolvedOptions)(resolvedStyledProps);
        };
};

export const BorderUtilValues = {
    solid: getBorderStyle("solid"),
    "dashed-default": getBorderStyle("dashed-default"),
};
