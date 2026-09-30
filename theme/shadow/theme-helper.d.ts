import { CSSProp } from "styled-components";
import { StyledComponentProps } from "../helpers";
import { ShadowSet } from "./types";
export declare const getShadow: (key: keyof ShadowSet) => (props: StyledComponentProps) => CSSProp;
export declare const ShadowValues: {
    [key in keyof ShadowSet]: (props: StyledComponentProps) => CSSProp;
};
