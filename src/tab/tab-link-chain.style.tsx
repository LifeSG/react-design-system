import styled, { css } from "styled-components";
import { FadeWrapper } from "../shared/fade-wrapper";
import { Border, Colour, MediaQuery, Spacing } from "@/theme";
import { Typography } from "../typography/typography";

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
                    border-bottom: ${Border["width-040"]} ${Border.solid}
                        ${Colour.border};
                }
            `;
        }
    }}
`;

export const ChainItem = styled.li<ChainItemStyleProps>`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: ${Border["width-040"]} ${Border.solid} ${Colour.border};

    ${(props) => {
        if (props.$width) {
            return css`
                width: ${props.$width};
            `;
        }
    }}

    ${(props) => {
        if (props.$active) {
            return css`
                border-color: ${Colour["border-primary"]};
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
    padding: ${Spacing["spacing-16"]} ${Spacing["spacing-16"]}
        ${Spacing["spacing-20"]};
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
        margin-bottom: ${Spacing["spacing-4"]};
    }
`;
