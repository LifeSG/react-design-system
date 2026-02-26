import { V3_StyledComponentProps, getCollection, getValue } from "../helpers";
import { V3_ThemeCollectionSpec } from "../internal-types";
import { V3_MotionScheme } from "../types";
import { V3_DefaultMotionSet } from "./specs/default-motion-set";
import { V3_MotionCollectionsMap, V3_MotionSet } from "./types";

const V3_MotionSpec: V3_ThemeCollectionSpec<
    V3_MotionCollectionsMap,
    V3_MotionScheme
> = {
    collections: {
        default: V3_DefaultMotionSet,
    },
    defaultValue: "default",
};

export const getMotion = (key: keyof V3_MotionSet) => {
    return (props: V3_StyledComponentProps): string => {
        const theme = props.theme;
        const motionSet: V3_MotionSet = getCollection(
            V3_MotionSpec,
            theme?.motionScheme
        );

        if (theme?.overrides?.motion) {
            return getValue(motionSet, key, theme.overrides.motion);
        } else {
            return motionSet[key];
        }
    };
};

export const V3_MotionValues: {
    [key in keyof V3_MotionSet]: (props: V3_StyledComponentProps) => string;
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
