import { CSSProp } from "styled-components";
import { BorderScheme } from "../types";
import { StyledComponentProps } from "../helpers";
export interface BorderUtilSet {
    solid: (options?: {
        thickness?: number | ((props: StyledComponentProps) => string);
        radius?: number | ((props: StyledComponentProps) => string);
        colour?: string | ((props: StyledComponentProps) => string);
    }) => (props: StyledComponentProps) => CSSProp;
    "dashed-default": (options?: {
        thickness?: number | ((props: StyledComponentProps) => string);
        radius?: number | ((props: StyledComponentProps) => string);
        colour?: string | ((props: StyledComponentProps) => string);
    }) => (props: StyledComponentProps) => CSSProp;
}
export type BorderUtilCollectionMap = {
    [key in BorderScheme]: BorderUtilSet;
};
export type BorderUtilSetOptions = Partial<BorderUtilSet>;
