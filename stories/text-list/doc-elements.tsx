import { TextList } from "src/text-list";
import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
export const CustomOrderedList = styled(TextList.Ol)`
    margin-left: 2rem;

    li {
        margin-left: 1rem;
    }

    li:before {
        content: counters(list, ".") ".";
        left: -3rem;
    }
`;

CustomOrderedList.displayName = "CustomOrderedList";
