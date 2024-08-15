import { get } from "lodash";
import {
    ColorCollectionsMap,
    ColorScheme,
    ColorSet,
    ThemeCollectionSpec,
    ThemeContextKeys,
    ThemeSpec,
} from "../types";
import { BookingSgColorSet } from "./specs/bookingsg-color-set";
import { CCubeColorSet } from "./specs/ccube-color-set";
import { LifeSgColorSet } from "./specs/lifesg-color-set";
import { MyLegacyColorSet } from "./specs/mylegacy-color-set";
import { RBSColorSet } from "./specs/rbs-color-set";
import { getCollection, getValue } from "../helpers";

const ColorSpec: ThemeCollectionSpec<ColorCollectionsMap, ColorScheme> = {
    collections: {
        lifesg: LifeSgColorSet,
        bookingsg: BookingSgColorSet,
        rbs: RBSColorSet,
        mylegacy: MyLegacyColorSet,
        ccube: CCubeColorSet,
    },
    defaultValue: "lifesg",
};

export const getPrimitiveColor = (key: keyof ColorSet) => {
    return (props: any): string => {
        const theme = props.theme as ThemeSpec;
        const colorSet: ColorSet = getCollection(
            ColorSpec,
            theme[ThemeContextKeys.colorScheme]
        );

        if (theme.overrides && theme.overrides.color) {
            return getValue(colorSet, key, theme.overrides.color) as string;
        } else {
            return colorSet[key];
        }
    };
};

export const PrimitiveColor = {
    "primary-10": getPrimitiveColor("primary-10"),
    "primary-20": getPrimitiveColor("primary-20"),
    "primary-30": getPrimitiveColor("primary-30"),
    "primary-40": getPrimitiveColor("primary-40"),
    "primary-50": getPrimitiveColor("primary-50"),
    "primary-60": getPrimitiveColor("primary-60"),
    "primary-70": getPrimitiveColor("primary-70"),
    "primary-80": getPrimitiveColor("primary-80"),
    "primary-90": getPrimitiveColor("primary-90"),
    "primary-95": getPrimitiveColor("primary-95"),
    "primary-100": getPrimitiveColor("primary-100"),
    "secondary-10": getPrimitiveColor("secondary-10"),
    "secondary-20": getPrimitiveColor("secondary-20"),
    "secondary-30": getPrimitiveColor("secondary-30"),
    "secondary-40": getPrimitiveColor("secondary-40"),
    "secondary-50": getPrimitiveColor("secondary-50"),
    "secondary-60": getPrimitiveColor("secondary-60"),
    "secondary-70": getPrimitiveColor("secondary-70"),
    "secondary-80": getPrimitiveColor("secondary-80"),
    "secondary-90": getPrimitiveColor("secondary-90"),
    "secondary-95": getPrimitiveColor("secondary-95"),
    "secondary-100": getPrimitiveColor("secondary-100"),
    "neutral-10": getPrimitiveColor("neutral-10"),
    "neutral-20": getPrimitiveColor("neutral-20"),
    "neutral-30": getPrimitiveColor("neutral-30"),
    "neutral-40": getPrimitiveColor("neutral-40"),
    "neutral-50": getPrimitiveColor("neutral-50"),
    "neutral-60": getPrimitiveColor("neutral-60"),
    "neutral-70": getPrimitiveColor("neutral-70"),
    "neutral-80": getPrimitiveColor("neutral-80"),
    "neutral-90": getPrimitiveColor("neutral-90"),
    "neutral-95": getPrimitiveColor("neutral-95"),
    "neutral-100": getPrimitiveColor("neutral-100"),
    "success-10": getPrimitiveColor("success-10"),
    "success-20": getPrimitiveColor("success-20"),
    "success-30": getPrimitiveColor("success-30"),
    "success-40": getPrimitiveColor("success-40"),
    "success-50": getPrimitiveColor("success-50"),
    "success-60": getPrimitiveColor("success-60"),
    "success-70": getPrimitiveColor("success-70"),
    "success-80": getPrimitiveColor("success-80"),
    "success-90": getPrimitiveColor("success-90"),
    "success-95": getPrimitiveColor("success-95"),
    "success-100": getPrimitiveColor("success-100"),
    "warning-10": getPrimitiveColor("warning-10"),
    "warning-20": getPrimitiveColor("warning-20"),
    "warning-30": getPrimitiveColor("warning-30"),
    "warning-40": getPrimitiveColor("warning-40"),
    "warning-50": getPrimitiveColor("warning-50"),
    "warning-60": getPrimitiveColor("warning-60"),
    "warning-70": getPrimitiveColor("warning-70"),
    "warning-80": getPrimitiveColor("warning-80"),
    "warning-90": getPrimitiveColor("warning-90"),
    "warning-95": getPrimitiveColor("warning-95"),
    "warning-100": getPrimitiveColor("warning-100"),
    "error-10": getPrimitiveColor("error-10"),
    "error-20": getPrimitiveColor("error-20"),
    "error-30": getPrimitiveColor("error-30"),
    "error-40": getPrimitiveColor("error-40"),
    "error-50": getPrimitiveColor("error-50"),
    "error-60": getPrimitiveColor("error-60"),
    "error-70": getPrimitiveColor("error-70"),
    "error-80": getPrimitiveColor("error-80"),
    "error-90": getPrimitiveColor("error-90"),
    "error-95": getPrimitiveColor("error-95"),
    "error-100": getPrimitiveColor("error-100"),
    "information-10": getPrimitiveColor("information-10"),
    "information-20": getPrimitiveColor("information-20"),
    "information-30": getPrimitiveColor("information-30"),
    "information-40": getPrimitiveColor("information-40"),
    "information-50": getPrimitiveColor("information-50"),
    "information-60": getPrimitiveColor("information-60"),
    "information-70": getPrimitiveColor("information-70"),
    "information-80": getPrimitiveColor("information-80"),
    "information-90": getPrimitiveColor("information-90"),
    "information-95": getPrimitiveColor("information-95"),
    "information-100": getPrimitiveColor("information-100"),
    white: getPrimitiveColor("white"),
    black: getPrimitiveColor("black"),
};
