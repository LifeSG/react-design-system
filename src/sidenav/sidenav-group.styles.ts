import { css } from "@linaria/core";

import { Colour } from "../theme";

//=============================================================================
// STYLING
//=============================================================================
export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`;

export const divider = css`
    margin-top: 1rem;
    width: 6.5rem;
    height: 1px;
    background-color: ${Colour["border"]};
`;
