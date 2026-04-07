import { css } from "@linaria/core";

import { Border, Colour, Radius, Shadow, Spacing } from "../theme";

export const card = css`
    border-radius: ${Radius["md"]};
    background: ${Colour.bg};
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
`;

export const cardDarkMode = css`
    border: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;

export const cardLightMode = css`
    box-shadow: ${Shadow["md-subtle"]};
`;
