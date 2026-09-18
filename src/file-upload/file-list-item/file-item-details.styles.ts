import { css } from "@linaria/core";

import { Colour, Font, MediaQuery, Spacing } from "../../theme";

export const nameSection = css`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`;

export const extendedNameSection = css`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;

    ${MediaQuery.MaxWidth.md} {
        width: 100%;
    }
`;

export const itemDescriptionLabel = css`
    ${Font["form-label"]}
    font-weight: ${Font.Spec["weight-semibold"]};
    color: ${Colour["text-subtle"]};
    margin-top: ${Spacing["spacing-16"]};
`;

export const itemDescriptionText = css`
    margin-top: ${Spacing["spacing-4"]};
    overflow-wrap: anywhere;
`;

export const descriptionFileSizeText = css`
    color: ${Colour["text-subtler"]};
    margin-top: ${Spacing["spacing-16"]};
`;

export const errorIcon = css`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${Colour["icon-error-strong"]};
`;

export const errorMessage = css`
    color: ${Colour["text-error"]};
    margin-top: ${Spacing["spacing-4"]};
    display: flex;
    gap: ${Spacing["spacing-4"]};
`;
