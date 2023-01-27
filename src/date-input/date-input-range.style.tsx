import { DatePickerType } from "src/date-picker";
import { Icon } from "src/icon";
import styled, { css } from "styled-components";
import { Color } from "../color";
import { BaseDatePickerInput } from "./date-input.style";
import { MediaQuery } from "src/media";

interface InputRangeContainerProps extends BaseDatePickerInput {}

interface AttributeValues {
    $readOnly?: boolean;
    $variant?: DatePickerType;
}

// =============================================================================
// STYLING
// =============================================================================

export const InputRangeArrow = styled(Icon)<AttributeValues>`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: ${Color.Neutral[3]};

    ${(props) => {
        if (props.$readOnly) {
            return css`
                left: calc(50% - 20px);
            `;
        }

        if (props.$variant === "range") {
            return css`
                ${MediaQuery.MaxWidth.mobileL} {
                    left: 56%;
                    transform: unset;
                    top: 1.05rem;
                }
            `;
        }
    }}
`;

export const InputRangeWrapper = styled.div<AttributeValues>`
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    left: calc(50% + 17px);

    ${(props) => {
        if (props.$readOnly) {
            return css`
                left: calc(50% + 17px - 19px);

                & input[name="range-year"] {
                    width: 48px !important;
                }
            `;
        }

        if (props.$variant) {
            return css`
                ${MediaQuery.MaxWidth.mobileL} {
                    height: 26px;
                    width: calc(100% - 1rem - 1rem);
                    left: 1rem;
                    bottom: 11px;
                    top: unset;
                }
            `;
        }
    }}
`;

const InputTextColor = (color: any) => {
    return css`
        input[name="range-day"] {
            color: ${color};
        }
        input[name="range-month"] {
            color: ${color};
        }
        input[name="range-year"] {
            color: ${color};
        }
        p {
            color: ${color};
        }
    `;
};

export const InputRangeContainer = styled.div<InputRangeContainerProps>`
    display: flex;
    height: 100%;
    align-items: center;

    ${(props) => {
        if (props.type === "range") {
            return css`
                input[name="range-day"] {
                    width: 28px;
                    margin-right: 4px;
                }
                input[name="range-month"] {
                    width: 40px;
                    padding: 0 4px;
                }
                input[name="range-year"] {
                    width: 45px;
                    margin-left: 4px;
                }
                p {
                    margin: 0.1rem 0 0 0;
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

        if (props.isTransition) {
            return css`
                ${InputTextColor(Color.Neutral[4])}
            `;
        }
    }}
`;
