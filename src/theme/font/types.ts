import { CSSProp } from "styled-components";
import { FontScheme } from "../types";

export type FontCollectionMap = {
    [key in FontScheme]: FontSet;
};

export type FontSetOptions = Partial<FontSet>;

export type TypographySizeType =
    | "header-xxl"
    | "header-xl"
    | "header-lg"
    | "header-md"
    | "header-sm"
    | "header-xs"
    | "body-baseline"
    | "body-md"
    | "body-sm"
    | "body-xs";

export type FontSet = {
    "header-xxl-light": CSSProp | string;
    "header-xxl-regular": CSSProp | string;
    "header-xxl-semibold": CSSProp | string;
    "header-xxl-bold": CSSProp | string;

    "header-xl-light": CSSProp | string;
    "header-xl-regular": CSSProp | string;
    "header-xl-semibold": CSSProp | string;
    "header-xl-bold": CSSProp | string;

    "header-lg-light": CSSProp | string;
    "header-lg-regular": CSSProp | string;
    "header-lg-semibold": CSSProp | string;
    "header-lg-bold": CSSProp | string;

    "header-md-light": CSSProp | string;
    "header-md-regular": CSSProp | string;
    "header-md-semibold": CSSProp | string;
    "header-md-bold": CSSProp | string;

    "header-sm-light": CSSProp | string;
    "header-sm-regular": CSSProp | string;
    "header-sm-semibold": CSSProp | string;
    "header-sm-bold": CSSProp | string;

    "header-xs-light": CSSProp | string;
    "header-xs-regular": CSSProp | string;
    "header-xs-semibold": CSSProp | string;
    "header-xs-bold": CSSProp | string;

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
