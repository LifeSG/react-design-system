export type PrimitiveColourSet = {
    "brand-10": string;
    "brand-20": string;
    "brand-30": string;
    "brand-40": string;
    "brand-50": string;
    "brand-60": string;
    "brand-70": string;
    "brand-80": string;
    "brand-90": string;
    "brand-95": string;
    "brand-100": string;
    "primary-10": string;
    "primary-20": string;
    "primary-30": string;
    "primary-40": string;
    "primary-50": string;
    "primary-60": string;
    "primary-70": string;
    "primary-80": string;
    "primary-90": string;
    "primary-95": string;
    "primary-100": string;
    "secondary-10": string;
    "secondary-20": string;
    "secondary-30": string;
    "secondary-40": string;
    "secondary-50": string;
    "secondary-60": string;
    "secondary-70": string;
    "secondary-80": string;
    "secondary-90": string;
    "secondary-95": string;
    "secondary-100": string;
    "neutral-10": string;
    "neutral-20": string;
    "neutral-30": string;
    "neutral-40": string;
    "neutral-50": string;
    "neutral-60": string;
    "neutral-70": string;
    "neutral-80": string;
    "neutral-90": string;
    "neutral-95": string;
    "neutral-100": string;
    "success-10": string;
    "success-20": string;
    "success-30": string;
    "success-40": string;
    "success-50": string;
    "success-60": string;
    "success-70": string;
    "success-80": string;
    "success-90": string;
    "success-95": string;
    "success-100": string;
    "warning-10": string;
    "warning-20": string;
    "warning-30": string;
    "warning-40": string;
    "warning-50": string;
    "warning-60": string;
    "warning-70": string;
    "warning-80": string;
    "warning-90": string;
    "warning-95": string;
    "warning-100": string;
    "error-10": string;
    "error-20": string;
    "error-30": string;
    "error-40": string;
    "error-50": string;
    "error-60": string;
    "error-70": string;
    "error-80": string;
    "error-90": string;
    "error-95": string;
    "error-100": string;
    "info-10": string;
    "info-20": string;
    "info-30": string;
    "info-40": string;
    "info-50": string;
    "info-60": string;
    "info-70": string;
    "info-80": string;
    "info-90": string;
    "info-95": string;
    "info-100": string;
    white: string;
    black: string;
};

export type SemanticColourValue = string | ((props: any) => string);

export type SemanticColourSet = {
    text: SemanticColourValue;
    "text-hover": SemanticColourValue;
    "text-selected": SemanticColourValue;
    "text-disabled": SemanticColourValue;
    "text-success": SemanticColourValue;
    "text-inverse": SemanticColourValue;
    "text-subtle": SemanticColourValue;
    "text-subtler": SemanticColourValue;
    "text-subtlest": SemanticColourValue;
    "text-disabled-subtle": SemanticColourValue;
    "text-disabled-subtlest": SemanticColourValue;
    "text-selected-disabled": SemanticColourValue;
    "text-warning": SemanticColourValue;
    "text-error": SemanticColourValue;
    "text-info": SemanticColourValue;

    icon: SemanticColourValue;
    "icon-hover": SemanticColourValue;
    "icon-selected": SemanticColourValue;
    "icon-disabled": SemanticColourValue;
    "icon-success": SemanticColourValue;
    "icon-inverse": SemanticColourValue;
    "icon-subtle": SemanticColourValue;
    "icon-strongest": SemanticColourValue;
    "icon-primary": SemanticColourValue;
    "icon-primary-subtle": SemanticColourValue;
    "icon-primary-subtlest": SemanticColourValue;
    "icon-disabled-subtle": SemanticColourValue;
    "icon-selected-disabled": SemanticColourValue;
    "icon-warning": SemanticColourValue;
    "icon-error": SemanticColourValue;
    "icon-error-strong": SemanticColourValue;
    "icon-info": SemanticColourValue;

    border: SemanticColourValue;
    "border-hover": SemanticColourValue;
    "border-selected": SemanticColourValue;
    "border-disabled": SemanticColourValue;
    "border-success": SemanticColourValue;
    "border-inverse": SemanticColourValue;
    "border-strong": SemanticColourValue;
    "border-primary": SemanticColourValue;
    "border-primary-subtle": SemanticColourValue;
    "border-hover-strong": SemanticColourValue;
    "border-selected-subtle": SemanticColourValue;
    "border-selected-subtlest": SemanticColourValue;
    "border-focus": SemanticColourValue;
    "border-focus-strong": SemanticColourValue;
    "border-selected-disabled": SemanticColourValue;
    "border-warning": SemanticColourValue;
    "border-error": SemanticColourValue;
    "border-error-focus": SemanticColourValue;
    "border-info": SemanticColourValue;

    background: SemanticColourValue;
    "background-hover": SemanticColourValue;
    "background-selected": SemanticColourValue;
    "background-disabled": SemanticColourValue;
    "background-success": SemanticColourValue;
    "background-inverse": SemanticColourValue;
    "background-strong": SemanticColourValue;
    "background-stronger": SemanticColourValue;
    "background-hover-strong": SemanticColourValue;
    "background-hover-subtle": SemanticColourValue;
    "background-hover-neutral": SemanticColourValue;
    "background-primary": SemanticColourValue;
    "background-primary-hover": SemanticColourValue;
    "background-primary-subtle": SemanticColourValue;
    "background-primary-subtlest": SemanticColourValue;
    "background-primary-subtlest-hover": SemanticColourValue;
    "background-primary-subtlest-selected": SemanticColourValue;
    "background-selected-strong": SemanticColourValue;
    "background-selected-hover": SemanticColourValue;
    "background-selected-disabled": SemanticColourValue;
    "background-warning": SemanticColourValue;
    "background-error": SemanticColourValue;
    "background-info": SemanticColourValue;
    "background-error-strong": SemanticColourValue;
    "background-error-strong-hover": SemanticColourValue;

    "overlay-strong": SemanticColourValue;
    "overlay-subtle": SemanticColourValue;
    "overlay-inverse-gradient": SemanticColourValue;

    hyperlink: SemanticColourValue;
    "hyperlink-inverse": SemanticColourValue;
    "focus-ring": SemanticColourValue;
    "focus-ring-inverse": SemanticColourValue;
};

export type ColourScheme =
    | "lifesg"
    | "bookingsg"
    | "rbs"
    | "mylegacy"
    | "ccube";

export type ColourCollectionsMap = {
    [key in ColourScheme]: PrimitiveColourSet;
};

export type SematicColourCollectionMap = {
    [key in ColourScheme]: SemanticColourSet;
};

export enum ThemeContextKeys {
    colourScheme = "colourScheme",
}

export type ColourSetOptions = Partial<PrimitiveColourSet>;
export type SematicColourSetOptions = Partial<SemanticColourSet>;

export interface ThemeSpecOptions {
    colour?: ColourSetOptions | undefined;
    sematiccolour?: SematicColourSetOptions | undefined;
}

export interface ThemeSpec {
    [ThemeContextKeys.colourScheme]: ColourScheme;
    overrides?: ThemeSpecOptions | undefined;
}

export interface ThemeCollectionSpec<T, V> {
    collections: T;
    defaultValue: V;
}
