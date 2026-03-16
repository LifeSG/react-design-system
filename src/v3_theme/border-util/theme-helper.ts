import type { CSSProp } from "styled-components";

import type { V3_StyledComponentProps } from "../helpers";
import { getCollection } from "../helpers";
import type { V3_ThemeCollectionSpec } from "../internal-types";
import type { V3_BorderScheme } from "../types";
import { V3_DefaultBorderUtilSet } from "./specs/default-border-util-set";
import type { V3_BorderUtilCollectionMap, V3_BorderUtilSet } from "./types";

const V3_BorderUtilSpec: V3_ThemeCollectionSpec<
    V3_BorderUtilCollectionMap,
    V3_BorderScheme
> = {
    collections: {
        default: V3_DefaultBorderUtilSet,
    },
    defaultValue: "default",
};

const isStyledProps = (args: any): args is [V3_StyledComponentProps] =>
    args.length === 1 && "theme" in args[0];

export const getBorderStyle = (key: keyof V3_BorderUtilSet) => {
    return (
            ...args:
                | Parameters<V3_BorderUtilSet[typeof key]>
                | [V3_StyledComponentProps]
        ) =>
        (props: V3_StyledComponentProps): CSSProp => {
            const resolvedOptions = isStyledProps(args) ? [] : args;
            const resolvedStyledProps = isStyledProps(args) ? args[0] : props;

            const theme = resolvedStyledProps.theme;
            const borderUtilSet: V3_BorderUtilSet = getCollection(
                V3_BorderUtilSpec,
                theme?.borderScheme
            );

            const borderValue = borderUtilSet[key];
            return borderValue(...resolvedOptions)(resolvedStyledProps);
        };
};

export const V3_BorderUtilValues = {
    solid: getBorderStyle("solid"),
    "dashed-default": getBorderStyle("dashed-default"),
};
