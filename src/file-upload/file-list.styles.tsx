import styled, { css } from "styled-components";
import { Color } from "../color";

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
    margin-bottom: ${(props) => (props.$readOnly ? "0" : "2rem")};
`;

export const EditableItemsContainer = styled.li`
    border-top: 1px solid ${Color.Neutral[5]};
    border-bottom: 1px solid ${Color.Neutral[5]};

    :not(:last-child) {
        margin-bottom: 2rem;
    }

    :not(:first-child) {
        margin-top: 2rem;
    }

    ul {
        list-style-type: none;
    }
`;
