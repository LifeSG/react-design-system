import { CSSProp } from "styled-components";
import { FontScheme } from "../types";

export type FontCollectionMap = {
    [key in FontScheme]: FontSet;
};

export type FontSetOptions = Partial<FontSet>;

export type TypographySizeType =
    | "heading-xxl"
    | "heading-xl"
    | "heading-lg"
    | "heading-md"
    | "heading-sm"
    | "heading-xs"
    | "body-baseline"
    | "body-md"
    | "body-sm"
    | "body-xs";

export type FontSet = {
    "heading-xxl-light": CSSProp | string;
    "heading-xxl-regular": CSSProp | string;
    "heading-xxl-semibold": CSSProp | string;
    "heading-xxl-bold": CSSProp | string;

    "heading-xl-light": CSSProp | string;
    "heading-xl-regular": CSSProp | string;
    "heading-xl-semibold": CSSProp | string;
    "heading-xl-bold": CSSProp | string;

    "heading-lg-light": CSSProp | string;
    "heading-lg-regular": CSSProp | string;
    "heading-lg-semibold": CSSProp | string;
    "heading-lg-bold": CSSProp | string;

    "heading-md-light": CSSProp | string;
    "heading-md-regular": CSSProp | string;
    "heading-md-semibold": CSSProp | string;
    "heading-md-bold": CSSProp | string;

    "heading-sm-light": CSSProp | string;
    "heading-sm-regular": CSSProp | string;
    "heading-sm-semibold": CSSProp | string;
    "heading-sm-bold": CSSProp | string;

    "heading-xs-light": CSSProp | string;
    "heading-xs-regular": CSSProp | string;
    "heading-xs-semibold": CSSProp | string;
    "heading-xs-bold": CSSProp | string;

    "body-baseline-light": CSSProp | string;
    "body-baseline-regular": CSSProp | string;
    "body-baseline-semibold": CSSProp | string;
    "body-baseline-bold": CSSProp | string;

    "body-md-light": CSSProp | string;
    "body-md-regular": CSSProp | string;
    "body-md-semibold": CSSProp | string;
    "body-md-bold": CSSProp | string;

    "body-sm-light": CSSProp | string;
    "body-sm-regular": CSSProp | string;
    "body-sm-semibold": CSSProp | string;
    "body-sm-bold": CSSProp | string;

    "body-xs-light": CSSProp | string;
    "body-xs-regular": CSSProp | string;
    "body-xs-semibold": CSSProp | string;
    "body-xs-bold": CSSProp | string;

    "form-label": CSSProp | string;
    "form-description": CSSProp | string;
};

export type FontSetAdditionalOptions = {
    disableLigatures?: boolean;
};
