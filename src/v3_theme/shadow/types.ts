import type { CSSProp } from "styled-components";

import type { V3_StyledComponentProps } from "../helpers";
import type { V3_ShadowScheme } from "../types";

type V3_ShadowValue = string | ((props: V3_StyledComponentProps) => CSSProp);

export type V3_ShadowSet = {
    "xs-subtle": V3_ShadowValue;
    "xs-strong": V3_ShadowValue;
    "xs-focus-strong": V3_ShadowValue;
    "xs-error-strong": V3_ShadowValue;
    "sm-subtle": V3_ShadowValue;
    "sm-strong": V3_ShadowValue;
    "md-subtle": V3_ShadowValue;
    "md-strong": V3_ShadowValue;
    "lg-subtle": V3_ShadowValue;
    "lg-strong": V3_ShadowValue;
};

export type V3_ShadowCollectionsMap = {
    [key in V3_ShadowScheme]: V3_ShadowSet;
};

export type V3_ShadowSetOptions = Partial<V3_ShadowSet>;
