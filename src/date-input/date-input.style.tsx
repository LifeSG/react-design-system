import { MediaQuery } from "src/media";
import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text/helper";
import { Text } from "../text/text";
import { DatePickerContainerProps } from "./types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================

export interface BaseDatePickerInput extends DatePickerContainerProps {
    isTransition?: boolean;
}

interface ContainerStyleProps extends BaseDatePickerInput {
    disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
}

export interface LabelStyleProps {
    $hide?: boolean;
    $compress?: boolean;
    $addGap?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<ContainerStyleProps>`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    background: ${Color.Neutral[8]};
    height: 3rem;
    width: 100%;
    padding: 0.1rem 1rem 0;

    :focus,
    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
    }

    ${(props) => {
        if (props.$readOnly) {
            return css`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `;
        } else if (props.disabled) {
            return css`
                background: ${Color.Neutral[6](props)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Color.Neutral[5](props)};
                    box-shadow: none;
                }
            `;
        } else if (props.$error) {
            return css`
                border: 1px solid ${Color.Validation.Red.Border(props)};

                :focus-within {
                    border: 1px solid ${Color.Validation.Red.Border(props)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `;
        }
    }}

    ${(props) => {
        if (props.theme.name === "LifeSG") {
            return css`
                &:focus,
                :focus-within {
                    box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
                }
            `;
        }
        if (props.theme.name === "BookingSG") {
            return css`
                &:focus,
                :focus-within {
                    box-shadow: inset 0px 0px 4px 1px rgba(161, 87, 255, 0.5);
                }
            `;
        }
    }}
    
    ${(props) => {
        if (props.type === "range") {
            return css`
                padding: 0.1rem 15px 0;

                ${MediaQuery.MaxWidth.mobileL} {
                    height: 100%;
                }
            `;
        }
    }}
`;

const InputTextColor = (color: any) => {
    return css`
        input[name="day"] {
            color: ${color};
        }
        input[name="month"] {
            color: ${color};
        }
        input[name="year"] {
            color: ${color};
        }
        p {
            color: ${color};
        }
    `;
};

export const InputContainer = styled.div<ContainerStyleProps>`
    position: absolute;
    top: 0;
    left: ${(props) => (props.$readOnly ? "-0.5rem" : "1rem")};
    height: 100%;
    display: flex;
    align-items: center;

    ${(props) => {
        if (props.type === "range") {
            return css`
                input[name="day"] {
                    width: 2rem;
                }
                input[name="month"] {
                    width: 2.5rem;
                }
                input[name="year"] {
                    width: 3.06rem;
                }
                p {
                    margin: 0.1rem 0 0 0;
                }

                ${MediaQuery.MaxWidth.mobileL} {
                    height: 26px;
                    top: 11px;
                }
            `;
        }
    }}

    ${(props) => {
        // handle Hovering
        if (!props.isTransition) {
            return css`
                ${InputTextColor(Color.Neutral[1])}
            `;
        }

        // handle pre-selected (click the dayCell)
        if (props.isTransition) {
            return css`
                ${InputTextColor(Color.Neutral[4])}
            `;
        }
    }}
`;

export const BaseInput = styled.input`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    background: transparent;
    height: 100%;
    width: 2.5rem;
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

export const MonthDivider = styled(Divider)`
    ${(props) => {
        if (props.$compress) {
            return css`
                margin: 0.1rem 0.1rem 0 0.1rem;
            `;
        }
    }}
`;
