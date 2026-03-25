import type { V3_StyledComponentProps } from "../helpers";
import type { V3_MotionSet } from "./types";
export declare const getMotion: (key: keyof V3_MotionSet) => (props: V3_StyledComponentProps) => string;
export declare const V3_MotionValues: {
    [key in keyof V3_MotionSet]: (props: V3_StyledComponentProps) => string;
};
