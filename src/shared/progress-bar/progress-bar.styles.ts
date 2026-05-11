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
    border-color: var(${tokens.barColour});
    border-style: ${Border["solid"]};
    border-width: ${Border["width-010"]};
    border-radius: ${Radius["sm"]};

    progress {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    &::after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: var(${tokens.barWidth});
        content: "";
        background: var(${tokens.barColour});
        border-radius: inherit;
    }
`;
