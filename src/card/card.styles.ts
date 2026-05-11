import { css } from "@linaria/core";

import { Border, Colour, Radius, Shadow, Spacing } from "../theme";

export const card = css`
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
    background: ${Colour.bg};
    border-radius: ${Radius["md"]};
`;

export const cardDarkMode = css`
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;

export const cardLightMode = css`
    box-shadow: ${Shadow["md-subtle"]};
`;
