import styled from "styled-components";
import { Spacing } from "../theme";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ListWrapperStyleProps {
    $readOnly?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const ListWrapper = styled.ul<ListWrapperStyleProps>`
    list-style-type: none;
    margin-bottom: ${(props) =>
        props.$readOnly ? "0" : Spacing["spacing-32"]};
`;

export const EditableItemsContainer = styled.li`
    &:not(:last-child) {
        margin-bottom: ${Spacing["spacing-16"]};
    }

    ul {
        list-style-type: none;
    }
`;
