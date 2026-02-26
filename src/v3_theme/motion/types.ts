import { V3_MotionScheme } from "../types";

export type V3_MotionSet = {
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

export type V3_MotionCollectionsMap = {
    [key in V3_MotionScheme]: V3_MotionSet;
};

export type V3_MotionSetOptions = Partial<V3_MotionSet>;
