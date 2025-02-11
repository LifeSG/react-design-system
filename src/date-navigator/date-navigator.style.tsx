import styled, { css } from "styled-components";
import { Button } from "../button";
import { Color } from "../color";
import { ClickableIcon } from "../shared/clickable-icon";

interface StyledDateTextProps {
    $enableDateClick?: boolean;
}

export const HeaderArrowButton = styled(ClickableIcon)`
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
    margin: 0.5rem 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${Color.Neutral[5]};
    background-color: ${Color.Neutral[8]};
    :hover {
        background-color: ${Color.Neutral[7]};
    }
    :disabled {
        cursor: not-allowed;
        background-color: ${Color.Neutral[6]};
    }
`;

export const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${Color.Neutral[7]};
    border-radius: 0.25rem;
`;

export const StyledDateTextButton = styled(Button.Default)<StyledDateTextProps>`
    color: ${(props) =>
        props.$enableDateClick ? Color.Primary : Color.Neutral[1]};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0.5rem 0;
    padding: 0;
    ${(props) => {
        if (props.$enableDateClick) {
            return css`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `;
        }
        return css`
            background-color: ${Color.Neutral[7]};
            :hover {
                cursor: default;
            }
        `;
    }}
`;
