/** @deprecated */
export interface V2_ValidationElementAttributes {
    Text: string;
    Icon?: string | undefined;
    Border?: string | undefined;
    Background?: string | undefined;
    Badge?: string | undefined;
}

/** @deprecated */
export interface V2_ValidationTypes {
    Green: V2_ValidationElementAttributes;
    Orange: V2_ValidationElementAttributes;
    Red: V2_ValidationElementAttributes;
    Blue: V2_ValidationElementAttributes;
}

/** @deprecated */
export interface V2_ColorSet {
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
    Validation: V2_ValidationTypes;
    Shadow: {
        Accent: string;
        Red: string;
        Elevation: string;
    };
}

/** @deprecated */
export type V2_ColorSetOptions = Partial<V2_ColorSet>;
