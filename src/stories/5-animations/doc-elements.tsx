import { MediaQuery } from "src/components/styles/spec";
import { Color } from "src/components/styles/theme";
import styled from "styled-components";

export const AnimationDisplay = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 1rem;

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
`;
