import styled from "styled-components";
import { Button } from "../button";
import { v2_Color } from "../v2_color";
import { TextStyleHelper } from "../text";

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
        ${TextStyleHelper.getFontFamily("H5", "regular")}
        font-size: 1rem !important;
        color: ${v2_Color.Neutral[1]} !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: initial;
    }

    :hover,
    :focus {
        background-color: ${v2_Color.Accent.Light[5]};
        span {
            ${TextStyleHelper.getFontFamily("H5", "semibold")}
            color: ${v2_Color.Primary} !important;
        }
    }
`;
