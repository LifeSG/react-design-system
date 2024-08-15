import { get } from "lodash";
import {
    ColourCollectionsMap,
    ColourScheme,
    ColourSet,
    ThemeCollectionSpec,
    ThemeContextKeys,
    ThemeSpec,
} from "../types";
import { BookingSgColourSet } from "./specs/bookingsg-color-set";
import { CCubeColourSet } from "./specs/ccube-color-set";
import { LifeSgColourSet } from "./specs/lifesg-color-set";
import { MyLegacyColourSet } from "./specs/mylegacy-color-set";
import { RBSColourSet } from "./specs/rbs-color-set";
import { getCollection, getValue } from "../helpers";

const ColourSpec: ThemeCollectionSpec<ColourCollectionsMap, ColourScheme> = {
    collections: {
        lifesg: LifeSgColourSet,
        bookingsg: BookingSgColourSet,
        rbs: RBSColourSet,
        mylegacy: MyLegacyColourSet,
        ccube: CCubeColourSet,
    },
    defaultValue: "lifesg",
};

export const getPrimitiveColour = (key: keyof ColourSet) => {
    return (props: any): string => {
        const theme = props.theme as ThemeSpec;
        const colorSet: ColourSet = getCollection(
            ColourSpec,
            theme[ThemeContextKeys.colourScheme]
        );

        if (theme.overrides && theme.overrides.color) {
            const a = getValue(colorSet, key, theme.overrides.color);
            return a;
        } else {
            return colorSet[key];
        }
    };
};

export const PrimitiveColour = {
    "primary-10": getPrimitiveColour("primary-10"),
    "primary-20": getPrimitiveColour("primary-20"),
    "primary-30": getPrimitiveColour("primary-30"),
    "primary-40": getPrimitiveColour("primary-40"),
    "primary-50": getPrimitiveColour("primary-50"),
    "primary-60": getPrimitiveColour("primary-60"),
    "primary-70": getPrimitiveColour("primary-70"),
    "primary-80": getPrimitiveColour("primary-80"),
    "primary-90": getPrimitiveColour("primary-90"),
    "primary-95": getPrimitiveColour("primary-95"),
    "primary-100": getPrimitiveColour("primary-100"),
    "secondary-10": getPrimitiveColour("secondary-10"),
    "secondary-20": getPrimitiveColour("secondary-20"),
    "secondary-30": getPrimitiveColour("secondary-30"),
    "secondary-40": getPrimitiveColour("secondary-40"),
    "secondary-50": getPrimitiveColour("secondary-50"),
    "secondary-60": getPrimitiveColour("secondary-60"),
    "secondary-70": getPrimitiveColour("secondary-70"),
    "secondary-80": getPrimitiveColour("secondary-80"),
    "secondary-90": getPrimitiveColour("secondary-90"),
    "secondary-95": getPrimitiveColour("secondary-95"),
    "secondary-100": getPrimitiveColour("secondary-100"),
    "neutral-10": getPrimitiveColour("neutral-10"),
    "neutral-20": getPrimitiveColour("neutral-20"),
    "neutral-30": getPrimitiveColour("neutral-30"),
    "neutral-40": getPrimitiveColour("neutral-40"),
    "neutral-50": getPrimitiveColour("neutral-50"),
    "neutral-60": getPrimitiveColour("neutral-60"),
    "neutral-70": getPrimitiveColour("neutral-70"),
    "neutral-80": getPrimitiveColour("neutral-80"),
    "neutral-90": getPrimitiveColour("neutral-90"),
    "neutral-95": getPrimitiveColour("neutral-95"),
    "neutral-100": getPrimitiveColour("neutral-100"),
    "success-10": getPrimitiveColour("success-10"),
    "success-20": getPrimitiveColour("success-20"),
    "success-30": getPrimitiveColour("success-30"),
    "success-40": getPrimitiveColour("success-40"),
    "success-50": getPrimitiveColour("success-50"),
    "success-60": getPrimitiveColour("success-60"),
    "success-70": getPrimitiveColour("success-70"),
    "success-80": getPrimitiveColour("success-80"),
    "success-90": getPrimitiveColour("success-90"),
    "success-95": getPrimitiveColour("success-95"),
    "success-100": getPrimitiveColour("success-100"),
    "warning-10": getPrimitiveColour("warning-10"),
    "warning-20": getPrimitiveColour("warning-20"),
    "warning-30": getPrimitiveColour("warning-30"),
    "warning-40": getPrimitiveColour("warning-40"),
    "warning-50": getPrimitiveColour("warning-50"),
    "warning-60": getPrimitiveColour("warning-60"),
    "warning-70": getPrimitiveColour("warning-70"),
    "warning-80": getPrimitiveColour("warning-80"),
    "warning-90": getPrimitiveColour("warning-90"),
    "warning-95": getPrimitiveColour("warning-95"),
    "warning-100": getPrimitiveColour("warning-100"),
    "error-10": getPrimitiveColour("error-10"),
    "error-20": getPrimitiveColour("error-20"),
    "error-30": getPrimitiveColour("error-30"),
    "error-40": getPrimitiveColour("error-40"),
    "error-50": getPrimitiveColour("error-50"),
    "error-60": getPrimitiveColour("error-60"),
    "error-70": getPrimitiveColour("error-70"),
    "error-80": getPrimitiveColour("error-80"),
    "error-90": getPrimitiveColour("error-90"),
    "error-95": getPrimitiveColour("error-95"),
    "error-100": getPrimitiveColour("error-100"),
    "information-10": getPrimitiveColour("information-10"),
    "information-20": getPrimitiveColour("information-20"),
    "information-30": getPrimitiveColour("information-30"),
    "information-40": getPrimitiveColour("information-40"),
    "information-50": getPrimitiveColour("information-50"),
    "information-60": getPrimitiveColour("information-60"),
    "information-70": getPrimitiveColour("information-70"),
    "information-80": getPrimitiveColour("information-80"),
    "information-90": getPrimitiveColour("information-90"),
    "information-95": getPrimitiveColour("information-95"),
    "information-100": getPrimitiveColour("information-100"),
    white: getPrimitiveColour("white"),
    black: getPrimitiveColour("black"),
};
