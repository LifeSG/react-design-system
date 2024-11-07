import { css } from "styled-components";
import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { BorderScheme, ThemeCollectionSpec } from "../types";
import { BorderCollectionMap, BorderSet } from "./types";
import { LifeSgBorderSet } from "./specs/lifesg-border-set";

const BorderSpec: ThemeCollectionSpec<BorderCollectionMap, BorderScheme> = {
    collections: {
        lifesg: LifeSgBorderSet,
    },
    defaultValue: "lifesg",
};

export const getBorder = (key: keyof BorderSet) => {
    return (...args: any[]) =>
        (props: StyledComponentProps) => {
            const theme = props.theme;
            const borderSet: BorderSet = getCollection(
                BorderSpec,
                theme.borderScheme
            );

            // Check for an override
            const borderValue =
                theme.overrides && theme.overrides.border
                    ? getValue(borderSet, key, theme.overrides.border)
                    : borderSet[key];

            // If function resolve it with props
            if (typeof borderValue === "function") {
                // Check if props being passed as the arg
                const isArgsProps = args.length === 1 && "theme" in args[0];
                const resolvedArgs = isArgsProps
                    ? [undefined, undefined]
                    : args;

                const result = (borderValue as (...args: any[]) => any)(
                    ...(resolvedArgs.length
                        ? resolvedArgs
                        : [undefined, undefined])
                )(props);

                return css`
                    ${result}
                `;
            }

            // If number make it return a pixel string
            if (typeof borderValue === "number") {
                return `${borderValue}px`;
            }

            return borderValue;
        };
};

export const BorderValues = {
    "width-010": getBorder("width-010"),
    "width-020": getBorder("width-020"),
    solid: getBorder("solid"),
    "dashed-default": getBorder("dashed-default"),
};
