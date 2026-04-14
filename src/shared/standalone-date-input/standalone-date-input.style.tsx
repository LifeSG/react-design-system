import styled, { css } from "styled-components";

import { V3_Colour, V3_Font, V3_Spacing } from "../../v3_theme";
import { BasicInput } from "../input-wrapper";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================

interface PlaceholderStyleProps {
    $hide?: boolean;
    $disabled?: boolean;
}

interface DividerStyleProps {
    $inactive?: boolean;
}

interface InputContainerStyleProps {
    $hover?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const InputSection = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`;

export const InputContainer = styled.div<InputContainerStyleProps>`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-4"]};

    ${(props) => {
        if (props.$hover) {
            return css`
                ${BaseInput}, ${Divider} {
                    color: ${V3_Colour["text-subtler"]};
                }
            `;
        }
    }}
`;

const InputSizerBase = styled.span`
    display: inline-block;
    position: relative;

    &::after {
        ${Font["body-baseline-regular"]}
        visibility: hidden;
        pointer-events: none;
        white-space: pre;
    }
`;

export const DayInputSizer = styled(InputSizerBase)`
    &::after {
        content: "DD";
    }
`;

export const MonthInputSizer = styled(InputSizerBase)`
    &::after {
        content: "MM";
    }
`;

export const YearInputSizer = styled(InputSizerBase)`
    &::after {
        content: "YYYY";
    }
`;

const BaseInput = styled(BasicInput)`
    background: transparent;
    text-align: center;
    position: absolute;
    inset: 0;
`;

export const DayInput = styled(BaseInput)``;
export const MonthInput = styled(BaseInput)``;
export const YearInput = styled(BaseInput)``;

export const Divider = styled.span<DividerStyleProps>`
    ${V3_Font["body-baseline-regular"]}
    ${(props) => {
        if (props.$inactive) {
            return css`
                color: ${V3_Colour["text"]};
            `;
        }
    }}
`;

export const Placeholder = styled.div<PlaceholderStyleProps>`
    ${V3_Font["body-baseline-regular"]}
    background-color: ${V3_Colour["bg"]};
    color: ${V3_Colour["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${(props) => {
        if (props.$disabled) {
            return css`
                background-color: ${V3_Colour["bg-disabled"]};
                cursor: not-allowed;
            `;
        } else if (props.$hide) {
            return css`
                display: none;
            `;
        }
    }}
`;
