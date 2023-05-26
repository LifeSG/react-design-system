import styled from "styled-components";
import { MediaQuery } from "../media/media";

export const Container = styled.div`
    position: relative;
    width: 100%;
    padding: 1.5rem 1.25rem;
    display: flex;
    padding: 0rem;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    ${MediaQuery.MaxWidth.mobileL} {
        padding: 0 1.25rem;
    }
`;
