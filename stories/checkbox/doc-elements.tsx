import styled from "styled-components";
import { Colour } from "../../src";

// =============================================================================
// STYLING
// =============================================================================
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, min-content);
    gap: 0.5rem 1.5rem;
`;

export const SubOption = styled.div`
    display: flex;
    margin-left: 2rem;
    align-items: center;
    gap: 0.5rem;

    &:hover > div > svg {
        color: ${(props) => Colour["icon-hover"](props)};
    }
`;

export const Label = styled.label`
    cursor: pointer;
`;
