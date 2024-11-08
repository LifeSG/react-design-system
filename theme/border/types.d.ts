import { CSSProp } from "styled-components";
import { BorderScheme } from "../types";
import { StyledComponentProps } from "../helpers";
export interface BorderSet {
    "width-010": number;
    "width-020": number;
    solid: string;
    "dashed-default": (thickness?: number | ((props: StyledComponentProps) => number), colour?: string | ((props: StyledComponentProps) => string)) => (props: StyledComponentProps) => CSSProp;
}
export type BorderCollectionMap = {
    [key in BorderScheme]: BorderSet;
};
export type BorderSetOptions = Partial<BorderSet>;
