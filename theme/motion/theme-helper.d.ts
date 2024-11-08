import { StyledComponentProps } from "../helpers";
import { MotionSet } from "./types";
export declare const getMotion: (key: keyof MotionSet) => (props: StyledComponentProps) => string;
export declare const MotionValues: {
    "duration-150": (props: StyledComponentProps) => string;
    "duration-250": (props: StyledComponentProps) => string;
    "duration-350": (props: StyledComponentProps) => string;
    "duration-500": (props: StyledComponentProps) => string;
    "duration-800": (props: StyledComponentProps) => string;
    "duration-1000": (props: StyledComponentProps) => string;
    "ease-default": (props: StyledComponentProps) => string;
    "ease-standard": (props: StyledComponentProps) => string;
    "ease-entrance": (props: StyledComponentProps) => string;
    "ease-exit": (props: StyledComponentProps) => string;
};
