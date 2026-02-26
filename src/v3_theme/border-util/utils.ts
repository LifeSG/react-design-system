import { css } from "styled-components";
import { V3_BorderValues } from "../border/theme-helper";
import { V3_ColourSemantic } from "../colour-semantic/theme-helper";
import { V3_StyledComponentProps } from "../helpers";

export const solidBorderStyle =
    (options?: {
        thickness?: number | ((props: V3_StyledComponentProps) => string);
        radius?: number | ((props: V3_StyledComponentProps) => string);
        colour?: string | ((props: V3_StyledComponentProps) => string);
    }) =>
    (props: V3_StyledComponentProps) => {
        const { thickness, radius, colour } = options || {};
        // Resolve design tokens to their underlying value
        const resolvedThickness =
            (typeof thickness === "function"
                ? thickness(props)
                : thickness + "px") ?? V3_BorderValues["width-010"](props);
        const resolvedRadius =
            (typeof radius === "function" ? radius(props) : radius + "px") ?? 0;
        const resolvedColor =
            (typeof colour === "function" ? colour(props) : colour) ??
            V3_ColourSemantic.border(props);
        const style = V3_BorderValues["solid"];

        return css`
            border: ${resolvedThickness} ${style} ${resolvedColor};
            border-radius: ${resolvedRadius};
        `;
    };

export const dashedBorderStyle =
    (options?: {
        thickness?: number | ((props: V3_StyledComponentProps) => string);
        radius?: number | ((props: V3_StyledComponentProps) => string);
        colour?: string | ((props: V3_StyledComponentProps) => string);
    }) =>
    (props: V3_StyledComponentProps) => {
        const { thickness, radius, colour } = options || {};
        // Resolve design tokens to their underlying value
        const resolvedThickness =
            (typeof thickness === "function" ? thickness(props) : thickness) ??
            V3_BorderValues["width-010"](props);
        const resolvedRadius =
            (typeof radius === "function" ? radius(props) : radius) ?? 0;
        const resolvedColor =
            (typeof colour === "function" ? colour(props) : colour) ??
            V3_ColourSemantic.border(props);

        const svg = `<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${resolvedRadius}' ry='${resolvedRadius}' stroke='${resolvedColor}' stroke-width='${resolvedThickness}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`;
        const encodedSvg = encodeURIComponent(svg);

        return css`
            background-image: url("data:image/svg+xml,${encodedSvg}");
            border-radius: ${resolvedRadius};
        `;
    };
