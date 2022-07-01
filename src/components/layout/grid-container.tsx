import styled from "styled-components";
import { MediaQuery } from "../styles/spec";

export const GridContainer = styled.div`
    column-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    height: auto;
    width: 100%;

    & > *:last-child {
        margin-bottom: 0;
    }

    ${MediaQuery.MaxWidth.tablet} {
        column-gap: 1.5rem;
        grid-template-columns: repeat(8, minmax(0, 1fr));
    }

    ${MediaQuery.MaxWidth.mobileL} {
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`;
