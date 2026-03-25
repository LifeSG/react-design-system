import type { CSSProp } from "styled-components";
import type { V3_StyledComponentProps } from "../helpers";
import type { V3_FontSet } from "./types";
export declare const getFont: (key: keyof V3_FontSet) => (props: V3_StyledComponentProps) => CSSProp | string;
export declare const V3_FontValues: {
    [key in keyof V3_FontSet]: (props: V3_StyledComponentProps) => CSSProp;
};
