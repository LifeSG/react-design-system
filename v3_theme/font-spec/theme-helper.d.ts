import type { V3_StyledComponentProps } from "../helpers";
import type { V3_FontSpecSet } from "./types";
export declare const getFontSpec: (key: keyof V3_FontSpecSet) => (props: V3_StyledComponentProps) => string;
export declare const V3_FontSpecValues: {
    [key in keyof V3_FontSpecSet]: (props: V3_StyledComponentProps) => string;
};
