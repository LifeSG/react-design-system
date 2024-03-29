import styled from "styled-components";
import { Button } from "../button";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { Text, TextStyleHelper } from "../text";

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

    ${MediaQuery.MaxWidth.mobileL} {
        width: 20rem;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        width: 18rem;
    }

    ${MediaQuery.MaxWidth.mobileS} {
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

export const Title = styled(Text.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`;

export const DescriptionContainer = styled.div`
    ${TextStyleHelper.getTextStyle(
        "Body",
        "regular"
    )} // Follow styling of Text.Body
    color: ${Color.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${TextStyleHelper.getFontFamily("Body", "semibold")}
    }

    a {
        ${TextStyleHelper.getTextStyle("Body", "semibold")}
        color: ${Color.Primary};

        :hover,
        :active,
        :focus {
            color: ${Color.Secondary};
        }
    }
`;

export const ActionButton = styled(Button.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${MediaQuery.MaxWidth.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`;
