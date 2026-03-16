import type { V3_BorderScheme } from "../types";

export interface V3_BorderSet {
    "width-005": number;
    "width-010": number;
    "width-020": number;
    "width-040": number;
    solid: string;
}

export type V3_BorderCollectionMap = {
    [key in V3_BorderScheme]: V3_BorderSet;
};

export type V3_BorderSetOptions = Partial<V3_BorderSet>;
