import styled, { css } from "styled-components";
import { FadeWrapper } from "../shared/fade-wrapper";
import {
    V3_Border,
    V3_Colour,
    V3_MediaQuery,
    V3_Radius,
    V3_Spacing,
} from "../v3_theme";

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

interface ChainLinkStyleProps {
    $reversed: boolean;
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
                &::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: ${V3_Border["width-040"]} ${V3_Border.solid}
                        ${V3_Colour.border};
                }
            `;
        }
    }}
`;

export const ChainItem = styled.li<ChainItemStyleProps>`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    border-bottom: ${V3_Border["width-040"]} ${V3_Border.solid}
        ${V3_Colour.border};

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
                border-color: ${V3_Colour["border-primary"]};
            `;
        }
    }}

    ${V3_MediaQuery.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`;

/* keep this separate to contain the ts-styled error */
const padding = css`
    padding: ${V3_Spacing["spacing-16"]} ${V3_Spacing["spacing-16"]}
        ${V3_Spacing["spacing-20"]};
`;

const flexRow = css`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ChainLink = styled.div<ChainLinkStyleProps>`
    /* position: relative; */
    ${flexRow}
    flex-direction: ${(props) => (props.$reversed ? "row-reverse" : "row")};
    gap: 0.5rem;
    ${padding}
    cursor: pointer;
    width: 100%;
    justify-content: center;

    &:has(button:focus-visible) {
        outline: 2px solid ${V3_Colour["focus-ring"]};
        outline-offset: -2px;
        border-radius: ${V3_Radius.sm};
    }
`;

export const LabelContainer = styled.div`
    position: relative;
`;

const buttonBase = css`
    ${flexRow}
    border: none;
    background: none;
`;

export const Label = styled.div<LabelStyleProps>`
    ${buttonBase}
    position: absolute;
    color: ${V3_Colour["text-subtler"]};
    opacity: 1;

    ${(props) => {
        if (props.$active) {
            return css`
                opacity: 0;
            `;
        }
    }}
`;

export const BoldLabel = styled.button<LabelStyleProps>`
    ${buttonBase}
    color: ${V3_Colour["text-primary"]};
    opacity: 0;
    outline: none;

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
        margin-bottom: ${V3_Spacing["spacing-4"]};
    }
`;
