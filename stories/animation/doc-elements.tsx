import styled from "styled-components";
import { Color, MediaQuery } from "../../src";

export const AnimationDisplay = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 1.25rem;

    ${MediaQuery.MaxWidth.mobileL} {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;

export const AnimationItem = styled.div`
    grid-column: span 1;
    display: flex;
    flex-direction: column;
`;

export const AnimationPane = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Color.Accent.Light[6]};
    height: 18rem;
`;

export const Content = styled.div`
    margin-top: 1rem;
    font-family: "Nunito Sans";
    padding: 0 0.5rem;

    code {
        display: flex;
        padding: 0.5rem;
        margin-bottom: 1rem;
    }
`;
