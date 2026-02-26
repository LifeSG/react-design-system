import { CSSProp } from "styled-components";
import { V3_StyledComponentProps, getCollection, getValue } from "../helpers";
import { V3_ThemeCollectionSpec } from "../internal-types";
import { V3_ShadowScheme } from "../types";
import { V3_DefaultShadowSet } from "./specs/default-shadow-set";
import { V3_ShadowCollectionsMap, V3_ShadowSet } from "./types";

const V3_ShadowSpec: V3_ThemeCollectionSpec<
    V3_ShadowCollectionsMap,
    V3_ShadowScheme
> = {
    collections: {
        default: V3_DefaultShadowSet,
    },
    defaultValue: "default",
};

export const getShadow = (key: keyof V3_ShadowSet) => {
    return (props: V3_StyledComponentProps): CSSProp => {
        const theme = props.theme;
        const shadowSet: V3_ShadowSet = getCollection(
            V3_ShadowSpec,
            theme?.shadowScheme
        );

        const shadowValue = theme?.overrides?.shadow
            ? getValue(shadowSet, key, theme.overrides.shadow)
            : shadowSet[key];

        // If function, resolve with props
        if (typeof shadowValue === "function") {
            return shadowValue(props);
        }

        return shadowValue;
    };
};

export const V3_ShadowValues: {
    [key in keyof V3_ShadowSet]: (props: V3_StyledComponentProps) => CSSProp;
} = {
    "xs-subtle": getShadow("xs-subtle"),
    "xs-strong": getShadow("xs-strong"),
    "xs-focus-strong": getShadow("xs-focus-strong"),
    "xs-error-strong": getShadow("xs-error-strong"),
    "sm-subtle": getShadow("sm-subtle"),
    "sm-strong": getShadow("sm-strong"),
    "md-subtle": getShadow("md-subtle"),
    "md-strong": getShadow("md-strong"),
    "lg-subtle": getShadow("lg-subtle"),
    "lg-strong": getShadow("lg-strong"),
};
