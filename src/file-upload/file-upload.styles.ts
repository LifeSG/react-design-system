import { css } from "@linaria/core";

import { Colour, MediaQuery, Spacing } from "../theme";

export const textContainer = css`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Spacing["spacing-32"]};
    gap: ${Spacing["spacing-8"]};
`;

export const titleContainer = css`
    color: ${Colour.text};
`;

export const description = css`
    color: ${Colour["text-subtler"]};
`;

export const descriptionContainer = css`
    color: ${Colour.text};
`;

export const warningAlert = css`
    margin-bottom: ${Spacing["spacing-32"]};
`;

export const uploadButtonContainer = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${MediaQuery.MaxWidth.md} {
        align-items: flex-start;
    }
`;

export const uploadButton = css`
    width: 10rem;

    ${MediaQuery.MaxWidth.md} {
        width: 100%;
    }
`;

export const uploadButtonText = css`
    color: ${Colour["text-subtler"]};
    margin-top: ${Spacing["spacing-8"]};
    width: 10rem;
    text-align: center;

    ${MediaQuery.MaxWidth.md} {
        display: none;
        visibility: hidden;
    }
`;

export const errorAlert = css`
    margin-bottom: ${Spacing["spacing-32"]};
`;
