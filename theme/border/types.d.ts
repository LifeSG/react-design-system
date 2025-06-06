import { BorderScheme } from "../types";
export interface BorderSet {
    "width-005": number;
    "width-010": number;
    "width-020": number;
    "width-040": number;
    solid: string;
}
export type BorderCollectionMap = {
    [key in BorderScheme]: BorderSet;
};
export type BorderSetOptions = Partial<BorderSet>;
