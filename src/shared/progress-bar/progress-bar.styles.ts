import { css } from "@linaria/core";

import { Border, Radius } from "../../theme";

export const tokens = {
    barColour: "--fds-internal-progress-bar-colour",
    barWidth: "--fds-internal-progress-bar-width",
};

export const bar = css`
    position: relative;
    width: 100%;
    height: 8px;
    background: transparent;

    border-style: solid;
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
`;
export const dynamicBar = css`
    &:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        background: var(--bar-colour);
        width: var(--bar-width);
    }
`;
