import { MotionScheme } from "../types";
export type MotionSet = {
    "duration-150": string;
    "duration-250": string;
    "duration-350": string;
    "duration-500": string;
    "duration-800": string;
    "duration-1000": string;
    "ease-default": string;
    "ease-standard": string;
    "ease-entrance": string;
    "ease-exit": string;
};
export type MotionCollectionsMap = {
    [key in MotionScheme]: MotionSet;
};
export type MotionSetOptions = Partial<MotionSet>;
