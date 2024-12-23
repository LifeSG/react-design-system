import styled from "styled-components";
import { Color } from "../color";

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
    margin: 0.5rem 0;
    width: 6.5rem;
    height: 1px;
    background-color: ${Color.Neutral[5]};
`;
