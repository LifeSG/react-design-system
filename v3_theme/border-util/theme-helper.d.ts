import type { CSSProp } from "styled-components";
import type { V3_StyledComponentProps } from "../helpers";
import type { V3_BorderUtilSet } from "./types";
export declare const getBorderStyle: (key: keyof V3_BorderUtilSet) => (...args: Parameters<V3_BorderUtilSet[typeof key]> | [V3_StyledComponentProps]) => (props: V3_StyledComponentProps) => CSSProp;
export declare const V3_BorderUtilValues: {
    solid: (...args: Parameters<V3_BorderUtilSet[keyof V3_BorderUtilSet]> | [V3_StyledComponentProps]) => (props: V3_StyledComponentProps) => CSSProp;
    "dashed-default": (...args: Parameters<V3_BorderUtilSet[keyof V3_BorderUtilSet]> | [V3_StyledComponentProps]) => (props: V3_StyledComponentProps) => CSSProp;
};
