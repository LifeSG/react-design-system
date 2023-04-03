export interface ValidationElementAttributes {
    Text: string;
    Icon?: string | undefined;
    Border?: string | undefined;
    Background?: string | undefined;
    Badge?: string | undefined;
}
export interface ValidationTypes {
    Green: ValidationElementAttributes;
    Orange: ValidationElementAttributes;
    Red: ValidationElementAttributes;
}
export interface ColorSet {
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
    Validation: ValidationTypes;
    Shadow: {
        Accent: string;
        Red: string;
        Elevation: string;
    };
}
export declare type ColorSetOptions = Partial<ColorSet>;
