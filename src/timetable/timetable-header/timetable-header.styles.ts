import { css } from "@linaria/core";

import { Colour, Spacing } from "../../theme";

export const refreshButton = css`
    color: ${Colour["icon"]};

    @keyframes timetable-refresh-icon-spin {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;

export const refreshButtonLoading = css`
    svg {
        animation: timetable-refresh-icon-spin 4s linear infinite;
    }
`;

export const navigationHeaderWrapper = css`
    display: flex;
    padding-bottom: ${Spacing["spacing-16"]};
    justify-content: space-between;
    gap: ${Spacing["spacing-8"]};
`;

export const navigationHeaderSubtitleWrapper = css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${Spacing["spacing-8"]};
`;

export const resultText = css`
    color: ${Colour["text-subtler"]};
`;

export const dateNavigator = css`
    width: 400px;
`;
