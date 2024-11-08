import { RadiusScheme } from "../types";
export type RadiusSet = {
    none: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    full: number;
};
export type RadiusSetOptions = Partial<RadiusSet>;
export type RadiusCollectionsMap = {
    [key in RadiusScheme]: RadiusSet;
};
