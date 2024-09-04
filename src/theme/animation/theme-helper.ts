import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { AnimationScheme, ThemeCollectionSpec } from "../types";
import { LifeSgAnimationSet } from "./specs/lifesg-animation-set";
import { AnimationCollectionsMap, AnimationSet } from "./types";

const AnimationSpec: ThemeCollectionSpec<
    AnimationCollectionsMap,
    AnimationScheme
> = {
    collections: {
        lifesg: LifeSgAnimationSet,
    },
    defaultValue: "lifesg",
};

export const getAnimation = (key: keyof AnimationSet) => {
    return (props: StyledComponentProps): string => {
        const theme = props.theme;
        const animationSet: AnimationSet = getCollection(
            AnimationSpec,
            theme.animationScheme
        );

        if (theme.overrides && theme.overrides.animation) {
            return getValue(animationSet, key, theme.overrides.animation);
        } else {
            return animationSet[key];
        }
    };
};

export const AnimationValues = {
    "duration-150": getAnimation("duration-150"),
    "duration-250": getAnimation("duration-250"),
    "duration-350": getAnimation("duration-350"),
    "duration-500": getAnimation("duration-500"),
    "duration-800": getAnimation("duration-800"),
    "duration-1000": getAnimation("duration-1000"),

    "ease-default": getAnimation("ease-default"),
    "ease-standard": getAnimation("ease-standard"),
    "ease-entrance": getAnimation("ease-entrance"),
    "ease-exit": getAnimation("ease-exit"),
};
