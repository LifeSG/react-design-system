import { MediaQuery } from "src/media";
import { Button } from "src/button";
import { Color } from "src/color";
import styled from "styled-components";

export const Image = styled.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0.5rem;
    }
`;

export const MainContainer = styled.div`
    border-top: 1px solid ${Color.Neutral[5]};
    border-bottom: 1px solid ${Color.Neutral[5]};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1rem 0rem;
    @media screen and (max-width: 38rem) {
        padding: 1.5rem 0rem;
        flex-direction: column;
    }
`;

export const ChildContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    @media screen and (max-width: 38rem) {
        margin: 0.5rem;
        width: 21rem;
    }
    ${MediaQuery.MaxWidth.mobileM} {
        margin: 0.5rem;
        width: 18rem;
    }
    ${MediaQuery.MaxWidth.mobileS} {
        width: 16rem;
    }
`;

export const SubmitButton = styled(Button.Default)`
    margin-top: 1rem;
    height: 3rem;
    width: 26.5rem;
    @media screen and (max-width: 38rem) {
        width: 21rem;
    }
    ${MediaQuery.MaxWidth.mobileM} {
        width: 18rem;
    }
    ${MediaQuery.MaxWidth.mobileS} {
        width: 16rem;
    }
`;
