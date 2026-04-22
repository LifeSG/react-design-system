import { TextList } from "src/text-list";
import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
export const CustomOrderedList = styled(TextList.Ol)`
    margin-left: 2em;

    li {
        margin-left: 1em;
    }

    li:before {
        content: counters(list, ".") ".";
        left: -3em;
    }
`;

CustomOrderedList.displayName = "CustomOrderedList";
