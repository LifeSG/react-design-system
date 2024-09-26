import styled, { css } from "styled-components";
import { Button } from "../button";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { Text } from "../text/text";
import { TitleStyleProps, TitleWrapperStyleProps } from "./types";

// ============================================================================
// STYLING
// =============================================================================
export const Content = styled.div`
    width: 100%;
    border-bottom: 1px solid ${Color.Neutral[6]};
`;

export const TitleWrapper = styled.div<TitleWrapperStyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${MediaQuery.MaxWidth.mobileL} {
        justify-content: flex-end;
    }

    ${(props) => {
        if (!props.$showTitleInMobile && !props.$hasExpandAll) {
            return css`
                ${MediaQuery.MaxWidth.mobileL} {
                    display: none;
                }
            `;
        }
    }}
`;

export const Title = styled(Text.H2)<TitleStyleProps>`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${MediaQuery.MaxWidth.mobileL} {
        text-align: left;
    }

    ${(props) => {
        if (!props.$showInMobile) {
            return css`
                ${MediaQuery.MaxWidth.mobileL} {
                    display: none;
                    visibility: hidden;
                }
            `;
        }
    }}
`;

export const ExpandCollapseLink = styled(Button.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`;
