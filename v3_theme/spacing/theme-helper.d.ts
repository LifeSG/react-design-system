import type { V3_StyledComponentProps } from "../helpers";
import type { V3_SpacingSet } from "./types";
export declare const getSpace: (key: keyof V3_SpacingSet) => (props: V3_StyledComponentProps) => string;
export declare const V3_SpacingValues: {
    [key in keyof V3_SpacingSet]: (props: V3_StyledComponentProps) => string;
};
