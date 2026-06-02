import { css } from "@linaria/core";

import { Border, Colour, MediaQuery, Spacing } from "../theme";

export const item = css`
    display: flex;
    flex-direction: column;
    padding: ${Spacing["spacing-32"]} 0;
    background: transparent;

    &:not(:last-child) {
        border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    }
`;

export const contentSection = css`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${Spacing["spacing-16"]};
    width: 100%;
`;

export const detailsSection = css`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const nameSection = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.md} {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export const fileNameText = css`
    display: flex;
    flex: 1;
    margin-right: ${Spacing["spacing-16"]};

    ${MediaQuery.MaxWidth.md} {
        margin-right: 0;
        margin-bottom: ${Spacing["spacing-8"]};
    }
`;

export const actionButtonsSection = css`
    display: flex;

    ${MediaQuery.MaxWidth.md} {
        flex-direction: column;
    }
`;

export const actionButtonsSectionWithThumbnail = css`
    margin-left: calc(
        96px + ${Spacing["spacing-32"]}
    ); // thumbnail width + right margin

    ${MediaQuery.MaxWidth.md} {
        margin-left: 0;
    }
`;

export const actionButton = css`
    width: 7.5rem;

    &:not(:last-of-type) {
        margin-right: ${Spacing["spacing-16"]};
    }

    ${MediaQuery.MaxWidth.md} {
        width: 100%;

        &:not(:last-of-type) {
            margin-bottom: ${Spacing["spacing-16"]};
        }
    }
`;
