import styled from "styled-components";
import { Color } from "../color";

export const ListWrapper = styled.ul`
    list-style-type: none;
    margin-bottom: 2rem;
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
