import { AnimationScheme } from "../types";

export type AnimationSet = {
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

export type AnimationCollectionsMap = {
    [key in AnimationScheme]: AnimationSet;
};

export type AnimationSetOptions = Partial<AnimationSet>;
