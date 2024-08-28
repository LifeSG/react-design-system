import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { AnimationScheme, ThemeCollectionSpec } from "../types";
import { LifeSgAnimationSet } from "./specs/lifesg-animation-set";
import { AnimationSet, AnimationSetCollectionsMap } from "./types";

const AnimationSpec: ThemeCollectionSpec<
    AnimationSetCollectionsMap,
    AnimationScheme
> = {
    collections: {
        lifesg: LifeSgAnimationSet,
    },
    defaultValue: "lifesg",
};

export const getAnimationSet = (key: keyof AnimationSet) => {
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

export const AnimationSetValues = {
    "duration-150": getAnimationSet("duration-150"),
    "duration-250": getAnimationSet("duration-250"),
    "duration-350": getAnimationSet("duration-350"),
    "duration-500": getAnimationSet("duration-500"),
    "duration-800": getAnimationSet("duration-800"),
    "duration-1000": getAnimationSet("duration-1000"),

    "ease-default": getAnimationSet("ease-default"),
    "ease-standard": getAnimationSet("ease-standard"),
    "ease-entrance": getAnimationSet("ease-entrance"),
    "ease-exit": getAnimationSet("ease-exit"),
};
