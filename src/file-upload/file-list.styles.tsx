import styled from "styled-components";
import { V3_Border, V3_Colour, V3_Spacing } from "../v3_theme";

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
        props.$readOnly ? "0" : V3_Spacing["spacing-32"]};
`;

export const EditableItemsContainer = styled.li`
    border-top: ${V3_Border["width-010"]} ${V3_Border.solid} ${V3_Colour.border};
    border-bottom: ${V3_Border["width-010"]} ${V3_Border.solid}
        ${V3_Colour.border};

    &:not(:last-child) {
        margin-bottom: ${V3_Spacing["spacing-32"]};
    }

    &:not(:first-child) {
        margin-top: ${V3_Spacing["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`;
