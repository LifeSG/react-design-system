import { CSSProp } from "styled-components";
import { BorderScheme } from "../types";
import { StyledComponentProps } from "../helpers";
export interface BorderSet {
    "width-005": number;
    "width-010": number;
    "width-020": number;
    "width-040": number;
    solid: string;
    "dashed-default": (options?: {
        thickness?: number | ((props: StyledComponentProps) => string);
        radius?: number | ((props: StyledComponentProps) => string);
        colour?: string | ((props: StyledComponentProps) => string);
    }) => (props: StyledComponentProps) => CSSProp;
}
export type BorderCollectionMap = {
    [key in BorderScheme]: BorderSet;
};
export type BorderSetOptions = Partial<BorderSet>;
