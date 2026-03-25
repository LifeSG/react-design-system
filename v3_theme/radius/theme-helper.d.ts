import type { V3_StyledComponentProps } from "../helpers";
import type { V3_RadiusSet } from "./types";
export declare const getRadius: (key: keyof V3_RadiusSet) => (props: V3_StyledComponentProps) => string;
export declare const V3_RadiusValues: {
    [key in keyof V3_RadiusSet]: (props: V3_StyledComponentProps) => string;
};
