import { css } from "@linaria/core";

import { Colour, MediaQuery, Spacing } from "../theme";

export const container = css`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const containerWithDashedBorder = css`
    padding: ${Spacing["spacing-32"]};

    ${MediaQuery.MaxWidth.md} {
        padding: ${Spacing["spacing-32"]} ${Spacing["spacing-20"]};
    }
`;

export const hiddenInput = css`
    display: none;
`;

export const dragOverlay = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const overlayText = css`
    color: ${Colour["text-primary"]};
    text-align: center;
`;

export const overlayIcon = css`
    color: ${Colour["icon-primary"]};
    height: 4rem;
    width: 4rem;
`;
