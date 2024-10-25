import styled, { css } from "styled-components";
import { FadeWrapper } from "../shared/fade-wrapper";
import { Colour, MediaQuery } from "../theme";
import { Typography } from "../typography/typography";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface LabelStyleProps {
    $active?: boolean;
}

interface ChainStyleProps {
    $active?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Chain = styled.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;
`;

export const ChainItem = styled.li<ChainStyleProps>`
    display: flex;
    flex-shrink: 0;
    border-bottom: 4px solid ${Colour.border};

    ${(props) => {
        if (props.$active) {
            return css`
                border-bottom: 4px solid ${Colour["border-primary"]};
            `;
        }
    }}

    ${MediaQuery.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`;

export const ChainLink = styled.button`
    position: relative;
    padding: 1rem 1rem 1.25rem;
    border: none;
    background: none;
    cursor: pointer;
`;

export const Label = styled(Typography.BodyBL)<LabelStyleProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${Colour["text-subtler"]};
    opacity: 1;

    ${(props) => {
        if (props.$active) {
            return css`
                opacity: 0;
            `;
        }
    }}
`;

export const BoldLabel = styled(Typography.BodyBL)<LabelStyleProps>`
    color: ${Colour["text-primary"]};
    opacity: 0;
    ${(props) => {
        if (props.$active) {
            return css`
                opacity: 1;
            `;
        }
    }}
`;

export const CustomFadeWrapper = styled(FadeWrapper)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: 4px;
    }
`;
