import { MediaQuery, TextList } from "src/components";
import styled from "styled-components";

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
