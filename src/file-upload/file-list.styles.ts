import { css } from "@linaria/core";

import { Border, Colour, Spacing } from "../theme";

export const listWrapper = css`
    list-style-type: none;
    margin-bottom: ${Spacing["spacing-32"]};
`;

export const listWrapperReadOnly = css`
    margin-bottom: 0;
`;

export const editableItemsContainer = css`
    border-top: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour.border};

    &:not(:last-child) {
        margin-bottom: ${Spacing["spacing-32"]};
    }

    &:not(:first-child) {
        margin-top: ${Spacing["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`;
