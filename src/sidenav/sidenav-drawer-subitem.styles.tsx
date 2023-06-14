import styled from "styled-components";
import { Button } from "../button";
import { Color } from "../color";

export const Container = styled.li``;

export const LinkButton = styled(Button.Default)`
    width: 13.5rem;
    height: unset;
    justify-content: flex-start;
    border-radius: 0.5rem;

    span {
        font-family: Open Sans;
        font-size: 1rem !important;
        color: ${Color.Neutral[1]} !important;
    }

    :hover,
    :focus {
        background-color: ${Color.Accent.Light[5]};
        span {
            font-family: Open Sans Semibold;
            color: ${Color.Primary} !important;
        }
    }
`;
