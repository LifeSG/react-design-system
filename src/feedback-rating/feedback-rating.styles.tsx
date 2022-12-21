import { Button } from "src/button";
import { Color } from "src/color";
import styled from "styled-components";

export const Image = styled.img`
    width: 9.5rem;
    height: 9.5rem;
    margin-right: 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin-right: 0rem;
    }
`;

export const MainContainer = styled.div`
    border-top: 1px solid ${Color.Neutral[5]};
    border-bottom: 1px solid ${Color.Neutral[5]};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 0rem;
    @media screen and (max-width: 38rem) {
        padding-top: 2rem;
        flex-direction: column;
    }
`;

export const ChildContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    width: 100%;
    max-width: 26rem;
    text-align: center;
    @media screen and (max-width: 38rem) {
        max-width: calc(100% - 2.5rem);
    }
`;

export const SubmitButton = styled(Button.Default)`
    margin-top: 1rem;
    height: 3rem;
    width: 100%;
    @media screen and (max-width: 38rem) {
        max-width: 21rem;
    }
`;
