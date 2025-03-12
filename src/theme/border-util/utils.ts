import { css } from "styled-components";
import { BorderValues } from "../border/theme-helper";
import { ColourSemantic } from "../colour-semantic/theme-helper";
import { StyledComponentProps } from "../helpers";

export const solidBorderStyle =
    (options?: {
        thickness?: number | ((props: StyledComponentProps) => string);
        radius?: number | ((props: StyledComponentProps) => string);
        colour?: string | ((props: StyledComponentProps) => string);
    }) =>
    (props: StyledComponentProps) => {
        const { thickness, radius, colour } = options || {};
        // Resolve design tokens to their underlying value
        const resolvedThickness =
            (typeof thickness === "function" ? thickness(props) : thickness) ??
            BorderValues["width-010"](props);
        const resolvedRadius =
            (typeof radius === "function" ? radius(props) : radius) ?? 0;
        const resolvedColor =
            (typeof colour === "function" ? colour(props) : colour) ??
            ColourSemantic.border(props);
        const style = BorderValues["solid"];

        return css`
            border: ${resolvedThickness} ${style} ${resolvedColor};
            border-radius: ${resolvedRadius};
        `;
    };

export const dashedBorderStyle =
    (options?: {
        thickness?: number | ((props: StyledComponentProps) => string);
        radius?: number | ((props: StyledComponentProps) => string);
        colour?: string | ((props: StyledComponentProps) => string);
    }) =>
    (props: StyledComponentProps) => {
        const { thickness, radius, colour } = options || {};
        // Resolve design tokens to their underlying value
        const resolvedThickness =
            (typeof thickness === "function" ? thickness(props) : thickness) ??
            BorderValues["width-010"](props);
        const resolvedRadius =
            (typeof radius === "function" ? radius(props) : radius) ?? 0;
        const resolvedColor =
            (typeof colour === "function" ? colour(props) : colour) ??
            ColourSemantic.border(props);

        const svg = `<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${resolvedRadius}' ry='${resolvedRadius}' stroke='${resolvedColor}' stroke-width='${resolvedThickness}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`;
        const encodedSvg = encodeURIComponent(svg);

        return css`
            background-image: url("data:image/svg+xml,${encodedSvg}");
            border-radius: ${resolvedRadius};
        `;
    };
