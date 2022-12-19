import { MediaQuery } from "src/media";
import { Button } from "src/button";
import { Color } from "src/color";
import styled from "styled-components";

export const Image = styled.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 1rem;
    ${MediaQuery.MaxWidth.mobileL} {
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
    ${MediaQuery.MaxWidth.mobileL} {
        padding: 1.5rem 0rem;
        flex-direction: column;
    }
`;

export const ChildContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    ${MediaQuery.MaxWidth.mobileL} {
        margin: 0.5rem;
        width: 21rem;
    }
`;

export const SubmitButton = styled(Button.Default)`
    margin-top: 1rem;
    height: 3rem;
    width: 26.5rem;
    ${MediaQuery.MaxWidth.mobileL} {
        width: 21rem;
    }
`;
