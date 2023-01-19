import { Icon } from "src/icon";
import styled, { css } from "styled-components";
import { Color } from "../color";
import { BaseDatePickerInput } from "./date-input.style";

interface InputRangeContainerProps extends BaseDatePickerInput {}

// =============================================================================
// STYLING
// =============================================================================

export const InputRangeArrow = styled(Icon)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: ${Color.Neutral[3]};
`;

export const InputRangeWrapper = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    left: calc(50% + 17px);

    svg {
        color: ${Color.Neutral[3]};
        width: 12px;
        height: 12px;
        margin: auto 0.15rem;
    }
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
