import styled, { css } from "styled-components";
import { Button } from "../button";
import { v2_MediaQuery } from "../v2_media";
import { Color } from "../color";
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
    flex-direction: ${(props) => (props.$hasTitle ? "row" : "column")};
    align-items: ${(props) => (props.$hasTitle ? "center" : "flex-end")};
    padding-bottom: 1rem;

    ${v2_MediaQuery.MaxWidth.mobileL} {
        justify-content: flex-end;
    }
`;

export const Title = styled(Text.H2)<TitleStyleProps>`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${v2_MediaQuery.MaxWidth.mobileL} {
        text-align: left;
    }

    ${(props) => {
        if (!props.$showInMobile) {
            return css`
                ${v2_MediaQuery.MaxWidth.mobileL} {
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
