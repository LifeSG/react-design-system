import { StyledComponentProps } from "../helpers";
import { BorderSet } from "./types";
export declare const getBorder: (key: keyof BorderSet) => (...args: any[]) => (props: StyledComponentProps) => string | import("styled-components").FlattenSimpleInterpolation;
export declare const BorderValues: {
    "width-010": (...args: any[]) => (props: StyledComponentProps) => string | import("styled-components").FlattenSimpleInterpolation;
    "width-020": (...args: any[]) => (props: StyledComponentProps) => string | import("styled-components").FlattenSimpleInterpolation;
    solid: (...args: any[]) => (props: StyledComponentProps) => string | import("styled-components").FlattenSimpleInterpolation;
    "dashed-default": (...args: any[]) => (props: StyledComponentProps) => string | import("styled-components").FlattenSimpleInterpolation;
};
