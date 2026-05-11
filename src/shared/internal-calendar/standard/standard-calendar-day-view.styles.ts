import { css } from "@linaria/core";

import { Colour, Font } from "../../../theme";

export const wrapper = css`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
    width: 100%;
`;

export const headerCell = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;

    ${Font["body-sm-semibold"]}
    color: ${Colour["text"]};
    pointer-events: none;
    user-select: none;
`;

export const rowDayCell = css`
    display: flex;
    grid-column: 1 / -1;
`;
