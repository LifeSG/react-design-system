import { css } from "@linaria/core";

import { Colour, Font, MediaQuery, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================

export const container = css`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const containerBordered = css`
    padding: ${Spacing["spacing-32"]};

    ${MediaQuery.MaxWidth.sm} {
        padding: ${Spacing["spacing-32"]} ${Spacing["spacing-20"]};
    }
`;

export const textContainer = css`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Spacing["spacing-32"]};
`;

export const title = css`
    ${Font["heading-xs-regular"]}
    color: ${Colour["text"]};
    margin-bottom: ${Spacing["spacing-8"]};
`;

export const titleContainer = css`
    color: ${Colour["text"]};
`;

export const description = css`
    ${Font["body-md-regular"]}
    color: ${Colour["text-subtler"]};
`;

export const descriptionContainer = css`
    color: ${Colour["text-subtler"]};
`;

export const listWrapper = css`
    list-style-type: none;
`;
