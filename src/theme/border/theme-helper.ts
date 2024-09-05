import { css } from "styled-components";
import { StyledComponentProps, getCollection, getValue } from "../helpers";
import { BorderScheme, ThemeCollectionSpec } from "../types";
import { BorderCollectionMap, BorderSet, StyleProps } from "./types";
import { LifeSgBorderSet } from "./specs/lifesg-border-set";

const BorderSpec: ThemeCollectionSpec<BorderCollectionMap, BorderScheme> = {
    collections: {
        lifesg: LifeSgBorderSet,
    },
    defaultValue: "lifesg",
};

export const dashedBorderStyle =
    (
        thickness: number | ((props: any) => string),
        color: string | ((props: any) => string)
    ) =>
    (props: StyleProps) => {
        // Resolve thickness
        const resolvedThickness =
            typeof thickness === "function"
                ? thickness(props)
                : `${thickness}px`;

        // Resolve color
        const resolvedColor =
            typeof color === "function" ? color(props) : color;

        const encodedColor = encodeURIComponent(resolvedColor);
        const strokeWidth = parseInt(resolvedThickness) + 1;

        return css`
            background-color: transparent;
            height: ${resolvedThickness};
            background-repeat: repeat-x;
            background-image: url('data:image/svg+xml,<svg width="8" height="${resolvedThickness}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${encodedColor}" stroke-width="${strokeWidth}" stroke-dasharray="4 4" /></svg>');
        `;
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
                const pixelBorderValue = `${borderValue}px`;
                return css`
                    ${pixelBorderValue}
                `;
            }

            return css`
                ${borderValue}
            `;
        };
};

export const BorderValues = {
    "width-010": getBorder("width-010"),
    "width-020": getBorder("width-020"),
    solid: getBorder("solid"),
    "dashed-default": getBorder("dashed-default"),
};
