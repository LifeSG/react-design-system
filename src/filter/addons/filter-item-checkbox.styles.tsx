import { MediaQuery } from "src/media";
import styled from "styled-components";

export const Group = styled.div`
    position: relative; // to get the item position relative to this parent
    display: flex;
    flex-direction: column;

    ${MediaQuery.MaxWidth.mobileL} {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const Item = styled.div<{ $visible: boolean }>`
    ${(props) => !props.$visible && "display: none;"}
`;
