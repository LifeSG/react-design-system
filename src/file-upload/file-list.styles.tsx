import styled from "styled-components";
import { Border, Colour, Spacing } from "../theme";

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
    border-top: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour.border};

    :not(:last-child) {
        margin-bottom: ${Spacing["spacing-32"]};
    }

    :not(:first-child) {
        margin-top: ${Spacing["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`;
