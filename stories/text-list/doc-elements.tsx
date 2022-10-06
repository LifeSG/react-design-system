import styled from "styled-components";
import { MediaQuery } from "../../src/media";
import { TextList } from "../../src/text-list";

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    display: flex;

    ul,
    ol {
        :not(:last-of-type) {
            margin-right: 1.5rem;
        }
    }
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 1.5rem;
`;

export const CustomOrderedList = styled(TextList.Ol)`
    margin-left: 2rem;

    li {
        margin-left: 1rem;
    }

    li:before {
        content: counters(list, ".") ".";
        left: -3rem;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        li {
            margin-left: 1rem;
        }
        li:before {
            left: -3rem;
        }
    }
`;
