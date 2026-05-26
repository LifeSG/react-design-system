import { css } from "@linaria/core";

import { Colour } from "../theme";

export const hashContainer = css`
    margin-right: 0.5rem;
`;

export const input = css`
    input {
        text-align: center;
    }
`;

export const floorInput = css`
    width: 2.5rem;
`;

export const unitInput = css`
    /* Cheat to balance the placeholder look while ensuring enough width */
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`;

export const unitNumberDivider = css`
    margin: 0 0.25rem;
`;

export const unitNumberDividerInactive = css`
    color: ${Colour["text-disabled"]};
`;

export const readOnlyContainer = css`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); /* exclude top and bottom borders */
`;
