import styled from "styled-components";
import { V2_Color } from "../../v2_color";

export const Placeholder = styled.div`
    background-color: ${V2_Color.Neutral[6]};
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
