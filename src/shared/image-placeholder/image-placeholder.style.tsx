import styled from "styled-components";
import { Color } from "../../color";

export const Placeholder = styled.div`
    background-color: ${Color.Neutral[6]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 3rem;
        width: 18%;
        height: auto;
    }
`;
