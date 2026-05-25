import styled from "styled-components";

import { Border, Colour, Spacing } from "../theme";

export const listWrapperReadOnly = "fileUploadListWrapperReadOnly";

// =============================================================================
// STYLING
// =============================================================================
export const ListWrapper = styled.ul`
    list-style-type: none;
    margin-bottom: ${Spacing["spacing-32"]};

    &.${listWrapperReadOnly} {
        margin-bottom: 0;
    }
`;

export const EditableItemsContainer = styled.li`
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
