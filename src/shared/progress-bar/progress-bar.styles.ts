import { css } from "@linaria/core";

import { Border, Radius } from "../../theme";

export const tokens = {
    barColour: "--fds-internal-progressBar-colour",
    barWidth: "--fds-internal-progressBar-width",
    progressColour: "--fds-internal-progress-colour",
    progressWidth: "--fds-internal-progress-width",
    borderColour: "--fds-internal-progressBar-borderColor",
};

export const bar = css`
    position: relative;
    width: 100%;
    height: 8px;
    background: transparent;

    border-style: solid;
    border-width: ${Border["width-010"]};
    border-radius: ${Radius["sm"]};
    border-color: var(${tokens.borderColour});

    progress {
        position: absolute;
        top: 0;
        left: 0;
        width: var(${tokens.progressWidth});
        height: 100%;
        opacity: 0;
        background: var(${tokens.progressColour});
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
