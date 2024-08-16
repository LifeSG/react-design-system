import get from "lodash/get";
import { CSSProp } from "styled-components";

// For ColorSet:
export type ColourSet = {
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
    "information-10": string;
    "information-20": string;
    "information-30": string;
    "information-40": string;
    "information-50": string;
    "information-60": string;
    "information-70": string;
    "information-80": string;
    "information-90": string;
    "information-95": string;
    "information-100": string;
    white?: string | undefined;
    black?: string | undefined;
};

// For SematicColorSet:
export type SematicColourSet = {
    text: string | ((props: any) => string);
    "text-hover": string | ((props: any) => string);
    "text-selected": string | ((props: any) => string);
    "text-disabled": string | ((props: any) => string);
    "text-success": string | ((props: any) => string);
    "text-inverse": string | ((props: any) => string);
    "text-subtle": string | ((props: any) => string);
    "text-subtler": string | ((props: any) => string);
    "text-subtlest": string | ((props: any) => string);
    "text-disabled-subtle": string | ((props: any) => string);
    "text-disabled-subtlest": string | ((props: any) => string);
    "text-selected-disabled": string | ((props: any) => string);
    "text-warning": string | ((props: any) => string);
    "text-error": string | ((props: any) => string);
    "text-info": string | ((props: any) => string);

    icon: string | ((props: any) => string);
    "icon-hover": string | ((props: any) => string);
    "icon-selected": string | ((props: any) => string);
    "icon-disabled": string | ((props: any) => string);
    "icon-success": string | ((props: any) => string);
    "icon-inverse": string | ((props: any) => string);
    "icon-subtle": string | ((props: any) => string);
    "icon-primary": string | ((props: any) => string);
    "icon-primary-subtle": string | ((props: any) => string);
    "icon-primary-subtlest": string | ((props: any) => string);
    "icon-disabled-subtle": string | ((props: any) => string);
    "icon-selected-disabled": string | ((props: any) => string);
    "icon-warning": string | ((props: any) => string);
    "icon-error": string | ((props: any) => string);
    "icon-info": string | ((props: any) => string);

    border: string | ((props: any) => string);
    "border-hover": string | ((props: any) => string);
    "border-selected": string | ((props: any) => string);
    "border-disabled": string | ((props: any) => string);
    "border-success": string | ((props: any) => string);
    "border-inverse": string | ((props: any) => string);
    "border-strong": string | ((props: any) => string);
    "border-primary": string | ((props: any) => string);
    "border-primary-subtle": string | ((props: any) => string);
    "border-hover-strong": string | ((props: any) => string);
    "border-selected-subtle": string | ((props: any) => string);
    "border-selected-subtlest": string | ((props: any) => string);
    "border-focus": string | ((props: any) => string);
    "border-focus-strong": string | ((props: any) => string);
    "border-selected-disabled": string | ((props: any) => string);
    "border-warning": string | ((props: any) => string);
    "border-error": string | ((props: any) => string);
    "border-error-focus": string | ((props: any) => string);
    "border-info": string | ((props: any) => string);

    background: string | ((props: any) => string);
    "background-hover": string | ((props: any) => string);
    "background-selected": string | ((props: any) => string);
    "background-disabled": string | ((props: any) => string);
    "background-success": string | ((props: any) => string);
    "background-inverse": string | ((props: any) => string);
    "background-subtle": string | ((props: any) => string);
    "background-hover-strong": string | ((props: any) => string);
    "background-hover-subtle": string | ((props: any) => string);
    "background-hover-neutral": string | ((props: any) => string);
    "background-primary": string | ((props: any) => string);
    "background-primary-hover": string | ((props: any) => string);
    "background-primary-subtle": string | ((props: any) => string);
    "background-primary-subtlest": string | ((props: any) => string);
    "background-primary-subtlest-hover": string | ((props: any) => string);
    "background-primary-subtlest-selected": string | ((props: any) => string);
    "background-selected-strong": string | ((props: any) => string);
    "background-selected-hover": string | ((props: any) => string);
    "background-selected-disabled": string | ((props: any) => string);
    "background-warning": string | ((props: any) => string);
    "background-error": string | ((props: any) => string);
    "background-info": string | ((props: any) => string);

    "overlay-strong": string | ((props: any) => string);
    "overlay-subtle": string | ((props: any) => string);
    "overlay-inverse-gradient": string | ((props: any) => string);

    hyperlink: string | ((props: any) => string);
    "hyperlink-inverse": string | ((props: any) => string);
    "focus-ring": string | ((props: any) => string);
    "focus-ring-inverse": string | ((props: any) => string);
};

export type ColourScheme =
    | "lifesg"
    | "bookingsg"
    | "rbs"
    | "mylegacy"
    | "ccube";

export type ColourCollectionsMap = {
    [key in ColourScheme]: ColourSet;
};

export type SematicColourCollectionMap = {
    [key in ColourScheme]: SematicColourSet;
};

export enum ThemeContextKeys {
    colourScheme = "colourScheme",
}

export type ColourSetOptions = Partial<ColourSet> | Partial<SematicColourSet>;

export interface ThemeSpecOptions {
    color?: ColourSetOptions | undefined;
}

export interface ThemeSpec {
    [ThemeContextKeys.colourScheme]?: ColourScheme;
    overrides?: ThemeSpecOptions | undefined;
}

export interface ThemeCollectionSpec<T, V> {
    collections: T;
    defaultValue: V;
}
