import { CSSProp } from "styled-components";
import { StyledComponentProps } from "../helpers";
import { BorderSet } from "./types";
export declare const getBorderWidth: (key: "width-010" | "width-020" | "width-040") => (props: StyledComponentProps) => string;
export declare const getBorder: (key: "solid") => (props: StyledComponentProps) => string;
export declare const getBorderStyle: (key: "dashed-default") => (...args: [StyledComponentProps] | [options?: {
    thickness?: number | ((props: StyledComponentProps) => string);
    radius?: number | ((props: StyledComponentProps) => string);
    colour?: string | ((props: StyledComponentProps) => string);
}]) => (props: StyledComponentProps) => CSSProp;
export declare const BorderValues: {
    "width-010": (props: StyledComponentProps) => string;
    "width-020": (props: StyledComponentProps) => string;
    "width-040": (props: StyledComponentProps) => string;
    solid: (props: StyledComponentProps) => string;
    "dashed-default": (...args: [StyledComponentProps] | [options?: {
        thickness?: number | ((props: StyledComponentProps) => string);
        radius?: number | ((props: StyledComponentProps) => string);
        colour?: string | ((props: StyledComponentProps) => string);
    }]) => (props: StyledComponentProps) => CSSProp;
};
