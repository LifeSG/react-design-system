import { CSSProp } from "styled-components";
import { StyledComponentProps } from "../helpers";
import { BorderUtilSet } from "./types";
export declare const getBorderStyle: (key: keyof BorderUtilSet) => (...args: Parameters<BorderUtilSet[typeof key]> | [StyledComponentProps]) => (props: StyledComponentProps) => CSSProp;
export declare const BorderUtilValues: {
    solid: (...args: Parameters<BorderUtilSet[keyof BorderUtilSet]> | [StyledComponentProps]) => (props: StyledComponentProps) => CSSProp;
    "dashed-default": (...args: Parameters<BorderUtilSet[keyof BorderUtilSet]> | [StyledComponentProps]) => (props: StyledComponentProps) => CSSProp;
};
