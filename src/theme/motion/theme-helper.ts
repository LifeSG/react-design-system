import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { MotionScheme, ThemeCollectionSpec } from "../types";
import { LifeSgMotionSet } from "./specs/lifesg-animation-set";
import { MotionCollectionsMap, MotionSet } from "./types";

const MotionSpec: ThemeCollectionSpec<MotionCollectionsMap, MotionScheme> = {
    collections: {
        lifesg: LifeSgMotionSet,
    },
    defaultValue: "lifesg",
};

export const getMotion = (key: keyof MotionSet) => {
    return (props: StyledComponentProps): string => {
        const theme = props.theme;
        const motionSet: MotionSet = getCollection(MotionSpec, theme.motion);

        if (theme.overrides && theme.overrides.motion) {
            return getValue(motionSet, key, theme.overrides.motion);
        } else {
            return motionSet[key];
        }
    };
};

export const MotionValues = {
    "duration-150": getMotion("duration-150"),
    "duration-250": getMotion("duration-250"),
    "duration-350": getMotion("duration-350"),
    "duration-500": getMotion("duration-500"),
    "duration-800": getMotion("duration-800"),
    "duration-1000": getMotion("duration-1000"),

    "ease-default": getMotion("ease-default"),
    "ease-standard": getMotion("ease-standard"),
    "ease-entrance": getMotion("ease-entrance"),
    "ease-exit": getMotion("ease-exit"),
};
