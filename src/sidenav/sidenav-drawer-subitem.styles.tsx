import styled from "styled-components";
import { Button } from "../button";
import { Color } from "../color";
import { TextStyleHelper } from "../text";

export const Container = styled.li``;

export const LinkButton = styled(Button.Default)`
    width: 13.5rem;
    height: unset;
    justify-content: flex-start;
    border-radius: 0.5rem;
    outline-offset: -0.125rem;

    span {
        ${TextStyleHelper.getFontFamily("H5", "regular")}
        font-size: 1rem !important;
        color: ${Color.Neutral[1]} !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: initial;
    }

    :hover,
    :focus {
        background-color: ${Color.Accent.Light[5]};
        span {
            ${TextStyleHelper.getFontFamily("H5", "semibold")}
            color: ${Color.Primary} !important;
        }
    }
`;
