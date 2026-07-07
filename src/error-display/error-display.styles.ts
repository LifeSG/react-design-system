import { css } from "@linaria/core";

import { Colour, MediaQuery, Spacing } from "../theme";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const img = css`
    position: relative;
    width: 400px;
    height: auto;

    ${MediaQuery.MaxWidth.sm} {
        width: 320px;
    }

    ${MediaQuery.MaxWidth.xs} {
        width: 288px;
    }

    ${MediaQuery.MaxWidth.xxs} {
        width: 240px;
    }
`;

export const textContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`;

export const title = css`
    margin: ${Spacing["spacing-32"]} 0 ${Spacing["spacing-16"]};
    text-align: center;
`;

export const descriptionContainer = css`
    color: ${Colour.text};
    text-align: center;

    p + p {
        margin-top: ${Spacing["spacing-16"]};
    }
`;

export const actionButton = css`
    margin: ${Spacing["spacing-32"]} auto 0;
    width: 21rem;

    ${MediaQuery.MaxWidth.sm} {
        width: 100%;
    }
`;
