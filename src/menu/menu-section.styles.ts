import { css } from "@linaria/core";

import { Border, Colour, Spacing } from "../theme/tokens";

export const section = css`
    padding: ${Spacing["spacing-8"]} 0;
    margin: 0;
    list-style: none;
`;
export const sectionWithDivider = css`
    border-top: ${Border["width-010"]} ${Border["solid"]} ${Colour["border"]};
`;

export const label = css`
    margin: 0 ${Spacing["spacing-16"]} ${Spacing["spacing-8"]};
    color: ${Colour["text-subtler"]};
`;
