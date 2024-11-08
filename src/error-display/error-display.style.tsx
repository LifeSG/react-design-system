import styled from "styled-components";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { Button } from "../button";
import { Colour, Font, MediaQuery } from "../theme";
import { Typography } from "../typography";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Img = styled.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${MediaQuery.MaxWidth.sm} {
        width: 20rem;
    }

    ${MediaQuery.MaxWidth.xs} {
        width: 18rem;
    }

    ${MediaQuery.MaxWidth.xxs} {
        width: 15rem;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`;

export const Title = styled(Typography.HeaderMD)`
    margin: 2rem 0 1rem;
    text-align: center;
`;

export const DescriptionContainer = styled.div`
    ${Font["body-baseline-regular"]} // Follow styling of Text.Body
    color: ${Colour.text};
    text-align: center;

    ${applyHtmlContentStyle({ textSize: "body-baseline" })}
`;

export const ActionButton = styled(Button.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${MediaQuery.MaxWidth.sm} {
        width: 100%;
        margin: 2rem auto 0;
    }
`;
