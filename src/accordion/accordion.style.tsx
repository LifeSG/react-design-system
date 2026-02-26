import styled, { css } from "styled-components";
import { Button } from "../button";
import { V3_Border, V3_Colour, V3_Font, V3_MediaQuery } from "../v3_theme";
import { TitleStyleProps, TitleWrapperStyleProps } from "./types";

// ============================================================================
// STYLING
// =============================================================================
export const Content = styled.div`
    width: 100%;
    border-bottom: ${V3_Border["width-010"]} ${V3_Border.solid}
        ${V3_Colour.border};
`;

export const TitleWrapper = styled.div<TitleWrapperStyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${V3_MediaQuery.MaxWidth.sm} {
        justify-content: flex-end;
    }

    ${(props) => {
        if (!props.$showTitleInMobile && !props.$hasExpandAll) {
            return css`
                ${V3_MediaQuery.MaxWidth.sm} {
                    display: none;
                }
            `;
        }
    }}
`;

export const Title = styled.h2<TitleStyleProps>`
    display: flex;
    align-self: flex-start;
    flex: 1;

    ${V3_Font["heading-md-bold"]}
    color: ${V3_Colour["text"]};

    ${V3_MediaQuery.MaxWidth.sm} {
        text-align: left;
    }

    ${(props) => {
        if (!props.$showInMobile) {
            return css`
                ${V3_MediaQuery.MaxWidth.sm} {
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
