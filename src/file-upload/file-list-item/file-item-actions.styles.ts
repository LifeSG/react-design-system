import { css } from "@linaria/core";

import { MediaQuery, Spacing } from "../../theme";

export const actionContainer = css`
    width: 6rem;
    margin-left: ${Spacing["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${MediaQuery.MaxWidth.md} {
        width: fit-content;
    }

    &[data-mobile-layout="loading"] {
        ${MediaQuery.MaxWidth.md} {
            margin-left: 0;
            margin-top: ${Spacing["spacing-16"]};
            width: 100%;
        }
    }

    &[data-mobile-layout="editable"] {
        ${MediaQuery.MaxWidth.md} {
            margin-left: 0;
            margin-top: ${Spacing["spacing-16"]};
            align-self: flex-end;
        }
    }
`;

export const inlineActionContainer = css`
    width: 100%;
    margin-top: ${Spacing["spacing-16"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const actionButtonsSection = css`
    display: flex;
    justify-content: flex-end;

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

export const iconButton = css`
    min-width: unset;

    &:not(:last-child) {
        margin-right: ${Spacing["spacing-8"]};
    }
`;
