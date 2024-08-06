import styled from "styled-components";
import { v2_MediaQuery } from "../../src/v2_media";
import { StoryContainer } from "../storybook-common";

export const AnimationDisplay = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 1.25rem;

    ${v2_MediaQuery.MaxWidth.mobileL} {
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
    background: #fbfcfe;
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

export const StoryWrapper = styled(StoryContainer)`
    display: flex;
    justify-content: center;
`;

export const StoryAnimationItem = styled.div`
    display: flex;
    flex-direction: column;
`;
