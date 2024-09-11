import { RadiusScheme } from "../types";

export type RadiusSet = {
    none: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    full: string;
};

export type RadiusSetOptions = Partial<RadiusSet>;

export type RadiusCollectionsMap = {
    [key in RadiusScheme]: RadiusSet;
};
