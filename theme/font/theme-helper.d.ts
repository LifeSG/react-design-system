import { CSSProp } from "styled-components";
import { StyledComponentProps } from "../helpers";
import { FontSet } from "./types";
export declare const getFont: (key: keyof FontSet) => (props: StyledComponentProps) => CSSProp | string;
export declare const FontValues: {
    [key in keyof FontSet]: (props: StyledComponentProps) => CSSProp;
};
