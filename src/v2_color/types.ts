/** @deprecated */
export interface v2_ValidationElementAttributes {
    Text: string;
    Icon?: string | undefined;
    Border?: string | undefined;
    Background?: string | undefined;
    Badge?: string | undefined;
}

/** @deprecated */
export interface v2_ValidationTypes {
    Green: v2_ValidationElementAttributes;
    Orange: v2_ValidationElementAttributes;
    Red: v2_ValidationElementAttributes;
    Blue: v2_ValidationElementAttributes;
}

/** @deprecated */
export interface v2_ColorSet {
    Brand: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    Primary: string;
    PrimaryDark?: string | undefined;
    Secondary: string;
    Accent: {
        Dark: {
            1: string;
            2: string;
            3: string;
        };
        Light: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
    };
    Neutral: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
    };
    Validation: v2_ValidationTypes;
    Shadow: {
        Accent: string;
        Red: string;
        Elevation: string;
    };
}

/** @deprecated */
export type v2_ColorSetOptions = Partial<v2_ColorSet>;
