import { MediaQuery } from "src/media";
import styled from "styled-components";

export const Group = styled.div`
    display: flex;
    flex-direction: column;

    ${MediaQuery.MaxWidth.mobileL} {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;
