import styled from "styled-components";
import { Border, Colour } from "../theme";

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
    border-top: ${Border["width-010"]} ${Border.solid} ${Colour.border};
    border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour.border};

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
