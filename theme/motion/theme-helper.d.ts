import { StyledComponentProps } from "../helpers";
import { MotionSet } from "./types";
export declare const getMotion: (key: keyof MotionSet) => (props: StyledComponentProps) => string;
export declare const MotionValues: {
    [key in keyof MotionSet]: (props: StyledComponentProps) => string;
};
