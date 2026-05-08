import styled from "styled-components";

import { Button } from "../button";
import { Colour, Radius, Spacing } from "../theme";

export const HeaderArrowButton = styled(Button)`
    margin: ${Spacing["spacing-8"]};
`;

export const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${Colour["bg-strong"]};
    border-radius: ${Radius["sm"]};
`;

export const StyledDateTextButton = styled(Button.Default)`
    color: ${Colour["text"]};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0;
    padding: 0;
    background: transparent;
    height: unset;
    cursor: default;

    &.styledDateTextButtonEnableDateClick {
        color: ${Colour["text-primary"]};

        &:hover {
            cursor: pointer;
            text-decoration: underline;
            text-underline-position: under;
        }
    }
`;
