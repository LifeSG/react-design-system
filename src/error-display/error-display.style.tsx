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
`;

export const Title = styled(Text.H1)`
    margin: 2rem 0 1rem;
    letter-spacing: -0.032rem !important;
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
    margin: 4rem auto 0;
    width: 21rem;

    ${MediaQuery.MaxWidth.mobileL} {
        width: 100%;
    }
`;
