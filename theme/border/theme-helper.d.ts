import { StyledComponentProps } from "../helpers";
export declare const getBorderWidth: (key: "width-005" | "width-010" | "width-020" | "width-040") => (props: StyledComponentProps) => string;
export declare const getBorder: (key: "solid") => (props: StyledComponentProps) => string;
export declare const BorderValues: {
    "width-005": (props: StyledComponentProps) => string;
    "width-010": (props: StyledComponentProps) => string;
    "width-020": (props: StyledComponentProps) => string;
    "width-040": (props: StyledComponentProps) => string;
    solid: (props: StyledComponentProps) => string;
};
