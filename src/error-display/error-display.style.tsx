import styled from "styled-components";
import { Button } from "../button";
import { v2_Color } from "../v2_color";
import { v2_MediaQuery } from "../v2_media";
import { v2_Text, v2_TextStyleHelper } from "../v2_text";

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

    ${v2_MediaQuery.MaxWidth.mobileL} {
        width: 20rem;
    }

    ${v2_MediaQuery.MaxWidth.mobileM} {
        width: 18rem;
    }

    ${v2_MediaQuery.MaxWidth.mobileS} {
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

export const Title = styled(v2_Text.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`;

export const DescriptionContainer = styled.div`
    ${v2_TextStyleHelper.getTextStyle(
        "Body",
        "regular"
    )} // Follow styling of Text.Body
    color: ${v2_Color.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${v2_TextStyleHelper.getFontFamily("Body", "semibold")}
    }

    a {
        ${v2_TextStyleHelper.getTextStyle("Body", "semibold")}
        color: ${v2_Color.Primary};

        :hover,
        :active,
        :focus {
            color: ${v2_Color.Secondary};
        }
    }
`;

export const ActionButton = styled(Button.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${v2_MediaQuery.MaxWidth.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`;
