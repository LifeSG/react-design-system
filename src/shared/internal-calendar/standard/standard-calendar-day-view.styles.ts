import { css } from "@linaria/core";

import { Colour, Font } from "../../../theme";

export const wrapper = css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`;

export const headerCell = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Font["body-sm-semibold"]}
    color: ${Colour["text"]};
`;

export const rowDayCell = css`
    grid-column: 1 / -1;
    display: flex;
`;
