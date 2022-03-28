export interface IValidationElement {
    Text: string;
    Icon?: string;
    Border?: string;
    Background?: string;
    Badge?: string;
}

export interface IValidationTypes {
    Green: IValidationElement;
    Orange: IValidationElement;
    Red: IValidationElement;
}

export interface IColorSet {
    Brand: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    Primary: string;
    PrimaryDark?: string;
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
    Validation: IValidationTypes;
}
