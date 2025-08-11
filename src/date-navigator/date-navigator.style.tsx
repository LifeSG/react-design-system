import styled, { css } from "styled-components";
import { Button } from "../button";
import { IconButton } from "../icon-button";
import { Colour, Radius, Spacing } from "../theme";

interface StyledDateTextProps {
    $enableDateClick?: boolean;
}

export const HeaderArrowButton = styled(IconButton)`
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

export const StyledDateTextButton = styled(Button.Default)<StyledDateTextProps>`
    color: ${(props) =>
        props.$enableDateClick ? Colour["text-primary"] : Colour["text"]};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0;
    padding: 0;
    background: transparent;
    height: unset;
    cursor: default;

    ${(props) => {
        if (props.$enableDateClick) {
            return css`
                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `;
        }
    }}
`;
