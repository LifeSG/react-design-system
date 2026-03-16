import type { V3_RadiusScheme } from "../types";

export type V3_RadiusSet = {
    none: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    full: number;
};

export type V3_RadiusSetOptions = Partial<V3_RadiusSet>;

export type V3_RadiusCollectionsMap = {
    [key in V3_RadiusScheme]: V3_RadiusSet;
};
