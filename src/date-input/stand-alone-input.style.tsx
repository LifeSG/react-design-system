import styled, { css } from "styled-components";
import { MediaQuery } from "../media";
import { Color } from "../color";
import { TextStyleHelper } from "../text/helper";
import { Text } from "../text/text";
import { DateInputVariant } from "./types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface SectionStyleProps {
    $readOnly?: boolean;
    $variant?: VariantStyleProps;
}

interface PlaceholderStyleProps {
    $isDirty?: boolean;
    $disabled?: boolean;
    $variant?: VariantStyleProps;
}
interface LabelStyleProps {
    $hide?: boolean;
    $compress?: boolean;
    $addGap?: boolean;
}

interface InputContainerStyleProps {
    $isHover?: boolean;
}

/**
 * input elements selector
 * @param single only render one input element
 * @param start start date input element in range calendar
 * @param range end date input element in range calendar
 */
export type VariantStyleProps = DateInputVariant | "start";

// =============================================================================
// STYLING
// =============================================================================
export const InputSection = styled.div<SectionStyleProps>`
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
    height: 100%;
    left: ${(props) => (props.$readOnly ? "-0.5rem" : "")};

    ${(props) => {
        if (props.$variant === "start") {
            return css`
                ${VariantInputStyle}
                left: ${props.$readOnly ? "0" : ""};
            `;
        } else if (props.$variant === "range") {
            return css`
                ${VariantInputStyle}
                left: ${props.$readOnly ? "0" : "1rem"};
            `;
        }
    }}

    @media screen and (max-width: 374px) {
        position: absolute;
        height: 1.625rem;

        ${(props) => {
            if (props.$variant === "start") {
                return css`
                    top: 0.75rem;
                    height: 1.625rem;
                    width: 50%;
                `;
            } else if (props.$variant === "range") {
                return css`
                    bottom: 0.75rem;
                    height: 1.625rem;
                    width: calc(100% - 1rem); // paddingLeft is 1rem
                `;
            }
        }}
    }

    ${MediaQuery.MaxWidth.mobileS} {
        ${(props) => {
            if (props.$variant === "start") {
                return css`
                    width: 75%;
                `;
            }
        }}
    }
`;

export const InputContainer = styled.div<InputContainerStyleProps>`
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;

    ${(props) => {
        if (props.$isHover) {
            return css`
                ${BaseInput}, ${Divider} {
                    color: ${Color.Neutral[4]};
                }
            `;
        }
    }}
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
                color: ${Color.Neutral[3](props)};
            `;
        }
    }}
`;

export const Placeholder = styled.div<PlaceholderStyleProps>`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    background-color: ${Color.Neutral[8]};
    color: ${Color.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: calc(100% - 0.5rem); // 0.5rem is the focus blur shadow area
    height: calc(100% - 0.5rem); // 0.5rem is the focus blur shadow area
    cursor: pointer;

    ${MediaQuery.MaxWidth.mobileM} {
        width: 100%;

        ${(props) => {
            switch (props.$variant) {
                case "range":
                    return css`
                        width: calc(100% - 0.5rem);
                    `;
            }
        }}
    }

    ${(props) => {
        if (props.$disabled) {
            return css`
                background-color: ${Color.Neutral[6](props)};
                cursor: not-allowed;
            `;
        } else if (props.$isDirty) {
            return css`
                display: none;
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
