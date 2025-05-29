import { getCollection, getValue } from "../helpers";
import { ThemeCollectionSpec } from "../internal-types";
import { MotionScheme, ThemeStyleProps } from "../types";
import { DefaultMotionSet } from "./specs/default-motion-set";
import { MotionCollectionsMap, MotionSet } from "./types";

const MotionSpec: ThemeCollectionSpec<MotionCollectionsMap, MotionScheme> = {
    collections: {
        default: DefaultMotionSet,
    },
    defaultValue: "default",
};

export const getMotion = (key: keyof MotionSet) => {
    return (props: ThemeStyleProps): string => {
        const theme = props.theme;
        const motionSet: MotionSet = getCollection(
            MotionSpec,
            theme?.motionScheme
        );

        if (theme?.overrides?.motion) {
            return getValue(motionSet, key, theme.overrides.motion);
        } else {
            return motionSet[key];
        }
    };
};

export const MotionValues: {
    [key in keyof MotionSet]: (props: ThemeStyleProps) => string;
} = {
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
