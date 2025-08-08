import { CSSProp } from "styled-components";
import { ShadowScheme } from "../types";
import { StyledComponentProps } from "../helpers";

type ShadowValue = (props: StyledComponentProps) => CSSProp;

export type ShadowSet = {
    "xs-subtle": ShadowValue;
    "xs-strong": ShadowValue;
    "xs-focus-strong": ShadowValue;
    "xs-error-strong": ShadowValue;
    "sm-subtle": ShadowValue;
    "sm-strong": ShadowValue;
    "md-subtle": ShadowValue;
    "md-strong": ShadowValue;
    "lg-subtle": ShadowValue;
    "lg-strong": ShadowValue;
};

export type ShadowCollectionsMap = {
    [key in ShadowScheme]: ShadowSet;
};

export type ShadowSetOptions = Partial<ShadowSet>;
