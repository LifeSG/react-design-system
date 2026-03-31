import { css } from "@linaria/core";

import { Border, Radius } from "../../theme";

export const tokens = {
    barColour: "--fds-internal-progressBar-colour",
    barWidth: "--fds-internal-progressBar-width",
};

export const bar = css`
    position: relative;
    width: 100%;
    height: 8px;
    background: transparent;

    border-style: ${Border["solid"]};
    border-width: ${Border["width-010"]};
    border-radius: ${Radius["sm"]};
    border-color: var(${tokens.barColour});

    progress {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    &:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        background: var(${tokens.barColour});
        width: var(${tokens.barWidth});
    }
`;
