import styled, { css } from "styled-components";
import { Color } from "../color";
import { FadeWrapper } from "../shared/fade-wrapper";
import { Text } from "../text";
import { MediaQuery } from "../media";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface LabelStyleProps {
    $active?: boolean;
}

interface ChainStyleProps {
    $fullWidthIndicatorLine?: boolean;
}

interface ChainItemStyleProps {
    $active?: boolean;
    $width?: string;
}

// =============================================================================
// STYLING
// =============================================================================
export const Chain = styled.ul<ChainStyleProps>`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${(props) => {
        if (props.$fullWidthIndicatorLine) {
            return css`
                ::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: 4px solid ${Color.Neutral[5]};
                }
            `;
        }
    }}
`;

export const ChainItem = styled.li<ChainItemStyleProps>`
    display: flex;
    flex-shrink: 0;
    border-bottom: 4px solid ${Color.Neutral[5]};

    ${(props) => {
        if (props.$width) {
            return css`
                width: ${props.$width};
                justify-content: center;
            `;
        }
    }}

    ${(props) => {
        if (props.$active) {
            return css`
                border-bottom: 4px solid ${Color.Primary};
            `;
        }
    }}

    ${MediaQuery.MaxWidth.mobileL} {
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

export const Label = styled(Text.Body)<LabelStyleProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${Color.Neutral[3]};
    opacity: 1;

    ${(props) => {
        if (props.$active) {
            return css`
                opacity: 0;
            `;
        }
    }}
`;

export const BoldLabel = styled(Text.Body)<LabelStyleProps>`
    color: ${Color.Primary};
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
