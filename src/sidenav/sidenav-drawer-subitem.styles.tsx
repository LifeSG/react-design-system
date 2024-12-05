import styled from "styled-components";
import { Button } from "../button";
import { Colour, Font } from "../theme";

//=============================================================================
// STYLING
//=============================================================================
export const Container = styled.li``;

export const LinkButton = styled(Button.Default)`
    width: 100%;
    height: unset;
    justify-content: flex-start;
    border-radius: 0.5rem;
    outline-offset: -0.125rem;

    span {
        ${Font["body-md-regular"]};
        font-size: 1rem !important;
        color: ${Colour.text} !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: initial;
    }

    :hover,
    :focus {
        /* background-color: ${Colour["border-selected-hover"]}; */
        span {
            ${Font["body-md-regular"]};
            color: ${Colour["text-selected-hover"]} !important;
        }
    }
`;
