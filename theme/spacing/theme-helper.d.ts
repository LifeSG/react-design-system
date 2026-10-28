import { StyledComponentProps } from "../helpers";
import { SpacingSet } from "./types";
export declare const getSpace: (key: keyof SpacingSet) => (props: StyledComponentProps) => string;
export declare const SpacingValues: {
    [key in keyof SpacingSet]: (props: StyledComponentProps) => string;
};
