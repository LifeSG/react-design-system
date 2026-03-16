import styled, { css } from "styled-components";

import { Button } from "../button";
import { IconButton } from "../icon-button";
import { V3_Colour, V3_Radius, V3_Spacing } from "../v3_theme";

interface StyledDateTextProps {
    $enableDateClick?: boolean;
}

export const HeaderArrowButton = styled(IconButton)`
    margin: ${V3_Spacing["spacing-8"]};
`;

export const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${V3_Colour["bg-strong"]};
    border-radius: ${V3_Radius["sm"]};
`;

export const StyledDateTextButton = styled(Button.Default)<StyledDateTextProps>`
    color: ${(props) =>
        props.$enableDateClick ? V3_Colour["text-primary"] : V3_Colour["text"]};
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
