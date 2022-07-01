import styled, { css } from "styled-components";
import { MediaQuery } from "../styles/spec";
import { Color } from "../styles/theme";
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
    flex-direction: ${(props) => (props.hasTitle ? "row" : "column")};
    align-items: ${(props) => (props.hasTitle ? "center" : "flex-end")};
    padding-bottom: 1rem;

    ${MediaQuery.MaxWidth.mobileL} {
        justify-content: flex-end;
    }
`;

export const Title = styled(Text.H2)<TitleStyleProps>`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${MediaQuery.MaxWidth.mobileL} {
        text-align: left;
    }

    ${(props) => {
        if (!props.showInMobile) {
            return css`
                ${MediaQuery.MaxWidth.mobileL} {
                    display: none;
                    visibility: hidden;
                }
            `;
        }
    }}
`;

export const ExpandCollapseLink = styled(Text.Hyperlink.Small)`
    padding: 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0;
    white-space: nowrap;
`;
