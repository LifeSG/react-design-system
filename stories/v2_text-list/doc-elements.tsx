import styled from "styled-components";
import { V2_MediaQuery } from "../../src/v2_media";
import { V2_TextList } from "../../src/v2_text-list";

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

export const CustomOrderedList = styled(V2_TextList.Ol)`
    margin-left: 2rem;

    li {
        margin-left: 1rem;
    }

    li:before {
        content: counters(list, ".") ".";
        left: -3rem;
    }

    ${V2_MediaQuery.MaxWidth.mobileL} {
        li {
            margin-left: 1rem;
        }
        li:before {
            left: -3rem;
        }
    }
`;
