import { StyledComponentProps } from "../helpers";
import { FontSpecSet } from "./types";
export declare const getFontSpec: (key: keyof FontSpecSet) => (props: StyledComponentProps) => string;
export declare const FontSpecValues: {
    [key in keyof FontSpecSet]: (props: StyledComponentProps) => string;
};
