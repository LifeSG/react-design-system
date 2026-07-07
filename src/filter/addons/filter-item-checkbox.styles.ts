import { css } from "@linaria/core";

import { Colour, Font, MediaQuery, Spacing } from "../../theme";

export const tokens = {
    item: {
        level: "--fds-internal-filterItemCheckbox-item-level",
    },
} as const;

export const filterItem = css`
    padding: 0 0 ${Spacing["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${Spacing["spacing-8"]} ${Spacing["spacing-8"]} 0;

        ${MediaQuery.MaxWidth.lg} {
            padding: ${Spacing["spacing-16"]} ${Spacing["spacing-20"]}
                ${Spacing["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${Spacing["spacing-8"]} ${Spacing["spacing-20"]} 0;
    }
`;

export const group = css`
    display: flex;
    flex-direction: column;

    ${MediaQuery.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0;
    }
`;

export const groupMobileToggleMode = css`
    ${MediaQuery.MaxWidth.lg} {
        gap: ${Spacing["spacing-16"]};
    }
`;

export const item = css`
    ${tokens.item.level}: 0;

    display: flex;
    align-items: flex-start;

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${Spacing["spacing-8"]} ${Spacing["spacing-12"]};
    padding-left: calc(
        ${Spacing["spacing-12"]} + var(${tokens.item.level}) *
            ${Spacing["spacing-32"]}
    );

    cursor: pointer;
    ${Font["body-md-regular"]}
    color: ${Colour["text"]};

    ${MediaQuery.MaxWidth.lg} {
        padding: ${Spacing["spacing-8"]};
        padding-left: calc(
            ${Spacing["spacing-8"]} + var(${tokens.item.level}) *
                ${Spacing["spacing-32"]}
        );
    }
`;

export const itemHidden = css`
    display: none;
`;

export const itemSelected = css`
    color: ${Colour["text-selected"]};
`;

export const checkbox = css`
    flex-shrink: 0;
    margin-right: ${Spacing["spacing-8"]};
`;

export const toggle = css`
    min-width: 5rem;
`;

export const toggleHidden = css`
    visibility: hidden;
`;

export const selectAllButton = css`
    height: fit-content;
    padding: 0;
    margin: ${Spacing["spacing-16"]} 0 ${Spacing["spacing-8"]}
        ${Spacing["spacing-12"]};

    ${MediaQuery.MaxWidth.lg} {
        margin: 0 0 ${Spacing["spacing-16"]} 0;
    }
`;
