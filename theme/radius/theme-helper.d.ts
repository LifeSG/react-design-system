import { StyledComponentProps } from "../helpers";
import { RadiusSet } from "./types";
export declare const getRadius: (key: keyof RadiusSet) => (props: StyledComponentProps) => string;
export declare const RadiusValues: {
    [key in keyof RadiusSet]: (props: StyledComponentProps) => string;
};
