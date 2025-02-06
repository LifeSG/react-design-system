import styled, { css } from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { ClickableIcon } from "../shared/clickable-icon";
import { Text } from "../text";

export const HeaderArrowButton = styled(ClickableIcon)`
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
    margin: 0.5rem 0.5rem;
    border-radius: 0.25rem;
    outline: 1px solid ${Color.Neutral[5]};
    background-color: ${Color.Neutral[8]};
    :hover {
        background-color: ${Color.Neutral[7]};
    };
    :disabled {
        cursor: not-allowed;
        background-color: ${Color.Neutral[6]};
    };
`;

export const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${Color.Neutral[7]};
    min-width: 320px;
    height: 56px;
    width: 368px;
    border-radius: 0.25rem;
    ${MediaQuery.MaxWidth.tablet} {
        width: 100vw;
    }
`;

export const StyledDateText = styled(Text.H4) <{ $enableDateClick?: boolean }>`
    color: ${(props) => (props.$enableDateClick ? Color.Primary : Color.Neutral[1])};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    ${(props) => {
        if (props.$enableDateClick) {
            return css`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }
            `;
        }
    }}
`;