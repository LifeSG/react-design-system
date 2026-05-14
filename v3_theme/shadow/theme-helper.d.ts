import type { CSSProp } from "styled-components";
import type { V3_StyledComponentProps } from "../helpers";
import type { V3_ShadowSet } from "./types";
export declare const getShadow: (key: keyof V3_ShadowSet) => (props: V3_StyledComponentProps) => CSSProp;
export declare const V3_ShadowValues: {
    [key in keyof V3_ShadowSet]: (props: V3_StyledComponentProps) => CSSProp;
};
