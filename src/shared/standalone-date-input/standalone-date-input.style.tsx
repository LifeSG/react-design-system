import styled, { css } from "styled-components";
import { v2_Color } from "../../v2_color";
import { BasicInput } from "../input-wrapper/input-wrapper";
import { v2_TextStyleHelper } from "../../v2_text/helper";
import { v2_Text } from "../../v2_text/text";

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

    ${(props) => {
        if (props.$hover) {
            return css`
                ${BaseInput}, ${Divider} {
                    color: ${v2_Color.Neutral[4]};
                }
            `;
        }
    }}
`;

const BaseInput = styled(BasicInput)`
    background: transparent;
    text-align: center;
`;

export const DayInput = styled(BaseInput)`
    width: 2rem;
    margin-right: 0.25rem;
`;

export const MonthInput = styled(BaseInput)`
    width: 2.5rem;
`;

export const YearInput = styled(BaseInput)`
    width: 3rem;
    margin-left: 0.25rem;
`;

export const Divider = styled(v2_Text.Body)<DividerStyleProps>`
    ${(props) => {
        if (props.$inactive) {
            return css`
                color: ${v2_Color.Neutral[3](props)};
            `;
        }
    }}
`;

export const Placeholder = styled.div<PlaceholderStyleProps>`
    ${v2_TextStyleHelper.getTextStyle("Body", "regular")}
    background-color: ${v2_Color.Neutral[8]};
    color: ${v2_Color.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${(props) => {
        if (props.$disabled) {
            return css`
                background-color: ${v2_Color.Neutral[6](props)};
                cursor: not-allowed;
            `;
        } else if (props.$hide) {
            return css`
                display: none;
            `;
        }
    }}
`;
