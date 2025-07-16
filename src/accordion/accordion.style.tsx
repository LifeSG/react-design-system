import styled, { css } from "styled-components";
import { Button } from "../button";
import { Border, Colour, Font, MediaQuery } from "../theme";
import { TitleStyleProps, TitleWrapperStyleProps } from "./types";

// ============================================================================
// STYLING
// =============================================================================
export const Content = styled.div`
    width: 100%;
    border-bottom: ${Border["width-010"]} ${Border.solid} ${Colour.border};
`;

export const TitleWrapper = styled.div<TitleWrapperStyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${MediaQuery.MaxWidth.sm} {
        justify-content: flex-end;
    }

    ${(props) => {
        if (!props.$showTitleInMobile && !props.$hasExpandAll) {
            return css`
                ${MediaQuery.MaxWidth.sm} {
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

    ${Font["heading-md-bold"]}
    color: ${Colour["text"]};

    ${MediaQuery.MaxWidth.sm} {
        text-align: left;
    }

    ${(props) => {
        if (!props.$showInMobile) {
            return css`
                ${MediaQuery.MaxWidth.sm} {
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
