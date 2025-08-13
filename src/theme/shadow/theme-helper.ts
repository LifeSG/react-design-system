import { CSSProp } from "styled-components";
import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { ThemeCollectionSpec } from "../internal-types";
import { ShadowScheme } from "../types";
import { DefaultShadowSet } from "./specs/default-shadow-set";
import { ShadowCollectionsMap, ShadowSet } from "./types";

const ShadowSpec: ThemeCollectionSpec<ShadowCollectionsMap, ShadowScheme> = {
    collections: {
        default: DefaultShadowSet,
    },
    defaultValue: "default",
};

export const getShadow = (key: keyof ShadowSet) => {
    return (props: StyledComponentProps): CSSProp => {
        const theme = props.theme;
        const shadowSet: ShadowSet = getCollection(
            ShadowSpec,
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

export const ShadowValues: {
    [key in keyof ShadowSet]: (props: StyledComponentProps) => CSSProp;
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
