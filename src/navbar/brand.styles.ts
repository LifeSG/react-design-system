import { css } from "@linaria/core";

import { Motion } from "../theme";

export const container = css`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
        object-fit: contain;
    }
`;
