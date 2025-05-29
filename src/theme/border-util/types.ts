import { CSSProp } from "styled-components";
import {
    BorderScheme,
    ThemeStyleInterpolation,
    ThemeStyleProps,
} from "../types";

export interface BorderUtilSet {
    solid: (options?: {
        thickness?: number | ThemeStyleInterpolation;
        radius?: number | ThemeStyleInterpolation;
        colour?: string | ThemeStyleInterpolation;
    }) => (props: ThemeStyleProps) => CSSProp;
    "dashed-default": (options?: {
        thickness?: number | ThemeStyleInterpolation;
        radius?: number | ThemeStyleInterpolation;
        colour?: string | ThemeStyleInterpolation;
    }) => (props: ThemeStyleProps) => CSSProp;
}

export type BorderUtilCollectionMap = {
    [key in BorderScheme]: BorderUtilSet;
};

export type BorderUtilSetOptions = Partial<BorderUtilSet>;
