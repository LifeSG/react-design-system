import { css } from "@linaria/core";

import { Colour } from "../../theme";

export const placeholder = css`
    background-color: ${Colour["bg-stronger"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 48px;
        width: 18%;
        height: auto;
        color: ${Colour["icon-subtle"]};
    }
`;
