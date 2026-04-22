import styled from "styled-components";
import { Colour } from "../theme";

//=============================================================================
// STYLING
//=============================================================================
export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`;

export const Divider = styled.li`
    margin-top: 1rem;
    width: 6.5rem;
    height: 1px;
    background-color: ${Colour.border};
`;
