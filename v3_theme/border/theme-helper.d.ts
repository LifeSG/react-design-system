import type { V3_StyledComponentProps } from "../helpers";
export declare const getBorderWidth: (key: "width-005" | "width-010" | "width-020" | "width-040") => (props: V3_StyledComponentProps) => string;
export declare const getBorder: (key: "solid") => (props: V3_StyledComponentProps) => string;
export declare const V3_BorderValues: {
    "width-005": (props: V3_StyledComponentProps) => string;
    "width-010": (props: V3_StyledComponentProps) => string;
    "width-020": (props: V3_StyledComponentProps) => string;
    "width-040": (props: V3_StyledComponentProps) => string;
    solid: (props: V3_StyledComponentProps) => string;
};
