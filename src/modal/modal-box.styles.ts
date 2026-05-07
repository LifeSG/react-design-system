import { css } from "@linaria/core";

import { Colour, MediaQuery, Radius, Shadow, Spacing } from "../theme";

export const box = css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    overflow: hidden;
    background: ${Colour.bg};
    border-radius: ${Radius["lg"]};
    box-shadow: ${Shadow["lg-strong"]};

    ${MediaQuery.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`;

export const closeButton = css`
    position: absolute;
    top: var(--close-button-top-inset, ${Spacing["spacing-16"]});
    right: var(--close-button-right-inset, ${Spacing["spacing-16"]});
    padding: 0;
    color: ${Colour.icon};

    svg {
        width: 2rem;
        height: 2rem;
    }

    ${MediaQuery.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Spacing["spacing-20"]});
    }
`;
