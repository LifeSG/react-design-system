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
const READ_ONLY = "8px";

export const InputRangeArrow = styled(Icon)<AttributeValues>`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: ${Color.Neutral[3]};

    ${(props) => {
        if (props.$readOnly) {
            return css`
                left: calc(50% - ${READ_ONLY});
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
                left: calc(50% + 17px - ${READ_ONLY});
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
                    width: 2rem;
                }
                input[name="range-month"] {
                    width: 2.5rem;
                }
                input[name="range-year"] {
                    width: 3.06rem;
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
