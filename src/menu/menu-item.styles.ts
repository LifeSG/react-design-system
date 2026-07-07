import { css } from "@linaria/core";

import { Colour, Spacing } from "../theme/tokens";

export const menuItemDiv = css`
    display: flex;
    flex-direction: column;
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-16"]};
`;

export const text = css`
    color: ${Colour["text"]};
`;

export const subLabel = css`
    color: ${Colour["text-subtler"]};
`;
