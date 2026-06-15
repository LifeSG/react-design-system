import { css } from "@linaria/core";

import { Colour, MediaQuery, Radius, Shadow, Spacing } from "../theme";

export const tokens = {
    buttonTopInset: "--fds-internal-modal-box-closeButton-topInset",
    buttonRightInset: "--fds-internal-modal-box-closeButton-rightInset",
};

export const box = css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Colour.bg};
    box-shadow: ${Shadow["lg-strong"]};
    border-radius: ${Radius["lg"]};
    overflow: hidden;

    ${MediaQuery.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`;

export const closeButton = css`
    ${tokens.buttonTopInset}: initial;
    ${tokens.buttonRightInset}: initial;

    position: absolute;
    top: var(${tokens.buttonTopInset}, ${Spacing["spacing-16"]});
    right: var(${tokens.buttonRightInset}, ${Spacing["spacing-16"]});
    padding: 0;
    color: ${Colour.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${MediaQuery.MaxWidth.sm} {
        right: var(${tokens.buttonRightInset}, ${Spacing["spacing-20"]});
    }
`;
