import { CSSProp } from "styled-components";
import { BorderScheme } from "../types";

export interface BorderSet {
    "width-010": number;
    "width-020": number;
    solid: string;
    "dashed-default": (
        thickness?: number,
        color?: string | ((props: any) => string)
    ) => (props: any) => CSSProp;
}

export interface StyleProps {
    $thickness?: number | ((props: any) => string);
    $color?: string | ((props: any) => string);
}

export type BorderCollectionMap = {
    [key in BorderScheme]: BorderSet;
};

export type BorderSetOptions = Partial<BorderSet>;
