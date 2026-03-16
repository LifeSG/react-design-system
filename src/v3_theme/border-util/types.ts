import type { CSSProp } from "styled-components";

import type { V3_StyledComponentProps } from "../helpers";
import type { V3_BorderScheme } from "../types";

export interface V3_BorderUtilSet {
    solid: (options?: {
        thickness?: number | ((props: V3_StyledComponentProps) => string);
        radius?: number | ((props: V3_StyledComponentProps) => string);
        colour?: string | ((props: V3_StyledComponentProps) => string);
    }) => (props: V3_StyledComponentProps) => CSSProp;
    "dashed-default": (options?: {
        thickness?: number | ((props: V3_StyledComponentProps) => string);
        radius?: number | ((props: V3_StyledComponentProps) => string);
        colour?: string | ((props: V3_StyledComponentProps) => string);
    }) => (props: V3_StyledComponentProps) => CSSProp;
}

export type V3_BorderUtilCollectionMap = {
    [key in V3_BorderScheme]: V3_BorderUtilSet;
};

export type V3_BorderUtilSetOptions = Partial<V3_BorderUtilSet>;
