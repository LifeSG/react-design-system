import { MediaQuery } from "src/media";
import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text/helper";
import { Text } from "../text/text";
import { DateInputVariant } from "./types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface ContainerStyleProps {
    disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
    $variant?: VariantStyleProps;
}
interface LabelStyleProps {
    $hide?: boolean;
    $compress?: boolean;
    $addGap?: boolean;
}

/**
 * input elements selector
 * @param single default as only return one input element
 * @param start start date input element in range calendar
 * @param range end date input element in range calendar
 */
export type VariantStyleProps = DateInputVariant | "start";

// =============================================================================
// STYLING
// =============================================================================

export const InputContainer = styled.div<ContainerStyleProps>`
    position: absolute;
    top: 0;
    left: ${(props) => (props.$readOnly ? "-0.5rem" : "1rem")};
    height: 100%;
    display: flex;
    align-items: center;

    ${(props) => {
        if (props.$variant === "start") {
            return css`
                ${VariantInputStyle}
            `;
        } else if (props.$variant === "range") {
            return css`
                ${VariantInputStyle}
                left: calc(50% + 1rem);
            `;
        }
    }}

    ${MediaQuery.MaxWidth.mobileM} {
        ${(props) => {
            if (props.$variant === "start") {
                return css`
                    top: 0.75rem;
                    height: 26px;
                `;
            } else if (props.$variant === "range") {
                return css`
                    right: unset;
                    top: unset;
                    left: ${props.$readOnly ? "-0.5rem" : "1rem"};
                    bottom: 0.75rem;
                    height: 26px;
                `;
            }
        }}
    }
`;

const BaseInput = styled.input`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    background: transparent;
    height: 100%;
    border: none;
    text-align: center;
    padding: 0;

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;

    :focus,
    :active {
        outline: none;
    }

    ${(props) => {
        if (props.disabled) {
            return css`
                cursor: not-allowed;
            `;
        }
    }}
`;

export const DayInput = styled(BaseInput)`
    width: 2.5rem;
`;

export const MonthInput = styled(BaseInput)`
    width: 2.6rem;
`;

export const YearInput = styled(BaseInput)`
    width: 3.5rem;
`;

export const Divider = styled(Text.Body)<LabelStyleProps>`
    margin: 0.1rem 0.2rem 0 0.2rem;
    ${(props) => {
        if (props.$hide) {
            return css`
                color: ${Color.Neutral[3]};
            `;
        }
    }}
`;

const VariantInputStyle = css`
    ${DayInput} {
        width: 1.75rem;
    }
    ${DayInput} + ${Divider} {
        margin: 0.1rem 0 0 0.25rem;
    }
    ${MonthInput} {
        width: 2.5rem;
    }
    ${MonthInput} + ${Divider} {
        margin: 0.1rem 0.25rem 0 0;
    }
    ${YearInput} {
        width: 3rem;
    }
`;
