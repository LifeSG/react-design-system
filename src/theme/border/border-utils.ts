import { css } from "styled-components";
import { StyledComponentProps } from "../helpers";

export const dashedBorderStyle =
    (
        thickness: number | ((props: StyledComponentProps) => number),
        colour: string | ((props: StyledComponentProps) => string)
    ) =>
    (props: StyledComponentProps) => {
        // Resolve thickness
        const resolvedThickness =
            typeof thickness === "function" ? thickness(props) : thickness;

        // Resolve color
        const resolvedColor =
            typeof colour === "function" ? colour(props) : colour;

        const encodedColor = encodeURIComponent(resolvedColor);
        const strokeWidth = resolvedThickness + 1;

        return css`
            background-color: transparent;
            height: ${resolvedThickness}px;
            background-repeat: repeat-x;
            background-image: url('data:image/svg+xml,<svg width="8" height="${resolvedThickness}px" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${encodedColor}" stroke-width="${strokeWidth}" stroke-dasharray="4 4" /></svg>');
        `;
    };
