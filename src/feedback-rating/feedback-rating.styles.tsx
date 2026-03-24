import styled from "styled-components";
import { Button } from "../button";
import { Colour, MediaQuery } from "../theme";

export const Image = styled.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    ${MediaQuery.MaxWidth.md} {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`;

export const MainContainer = styled.div`
    border-top: 1px solid ${Colour.border};
    border-bottom: 1px solid ${Colour.border};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    ${MediaQuery.MaxWidth.md} {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`;

export const ChildContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    ${MediaQuery.MaxWidth.md} {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`;

export const SubmitButton = styled(Button.Default)`
    margin-top: 1rem;
    width: 100%;
`;
