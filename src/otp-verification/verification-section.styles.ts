import { css } from "@linaria/core";

import { Colour, MediaQuery, Spacing } from "../theme";

export const verificationSectionWrapper = css`
    display: flex;
    align-items: center;
    background-color: ${Colour["bg-strong"]};
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-32"]};
    gap: ${Spacing["spacing-32"]};

    ${MediaQuery.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${Spacing["spacing-16"]};
        padding: ${Spacing["spacing-16"]};
    }
`;

export const sectionContainer = css`
    display: flex;
    flex-direction: column;
    gap: ${Spacing["spacing-16"]};
`;

export const resendMessage = css`
    color: ${Colour["text-subtlest"]};
`;

export const verifyInputWrapper = css`
    display: flex;
    gap: ${Spacing["spacing-8"]};
    max-width: 472px;
`;

export const verifyButton = css`
    flex-shrink: 0;
    width: 83px;
`;
