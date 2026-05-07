import { css } from "@linaria/core";

import { Colour } from "../../theme";

export const placeholder = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: ${Colour["bg-stronger"]};

    svg {
        width: 18%;
        min-width: 48px;
        height: auto;
        color: ${Colour["icon-subtle"]};
    }
`;
