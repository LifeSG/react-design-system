import { StyledComponentProps } from "../helpers";
import { RadiusSet } from "./types";
export declare const getRadius: (key: keyof RadiusSet) => (props: StyledComponentProps) => string;
export declare const RadiusValues: {
    none: (props: StyledComponentProps) => string;
    xs: (props: StyledComponentProps) => string;
    sm: (props: StyledComponentProps) => string;
    md: (props: StyledComponentProps) => string;
    lg: (props: StyledComponentProps) => string;
    full: (props: StyledComponentProps) => string;
};
