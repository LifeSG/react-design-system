import styled, { css } from "styled-components";
import { Border, Colour, Font, Motion, Radius } from "../../theme";
import { MonthVariant } from "./internal-calendar-month";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $variant: MonthVariant;
    $disabledDisplay?: boolean;
    $interactive?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`;

export const MonthCell = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Radius.md};
    margin: 0 0.5rem;
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};

    // default styles
    ${Font["body-md-regular"]}
    border-radius: ${Radius.md};
    border: ${Border["width-010"]} ${Border.solid} transparent;
    background-clip: border-box;
    color: ${Colour["text"]};
    cursor: default;

    // cursor style
    ${(props) => {
        if (props.$interactive) {
            return css`
                cursor: pointer;
            `;
        }
        if (props.$disabledDisplay) {
            return css`
                cursor: not-allowed;
            `;
        }
    }}

    // background, border and text styles
    ${({ $variant, $interactive, $disabledDisplay }) => {
        if ($variant === "selected-month") {
            return css`
                background: ${Colour["bg-selected"]};
                border-color: ${Colour["border-selected"]};
                color: ${Colour["text-selected"]};
                font-weight: ${Font.Spec["weight-semibold"]};

                ${$interactive &&
                css`
                    &:hover {
                        background: ${Colour["bg-selected-hover"]};
                        border-color: ${Colour["border-selected-hover"]};
                        color: ${Colour["text-selected-hover"]};
                    }
                `}
            `;
        }

        if ($variant === "current-month") {
            return css`
                color: ${Colour["text-primary"]};
                font-weight: ${Font.Spec["weight-semibold"]};
            `;
        }

        if ($disabledDisplay) {
            return css`
                color: ${Colour["text-disabled-subtlest"]};
            `;
        }
    }}

    // hover styles
    ${({ $variant, $interactive }) => {
        if (!$interactive) {
            return;
        }

        if ($variant === "selected-month") {
            return css`
                &:hover {
                    background: ${Colour["bg-selected-hover"]};
                    border-color: ${Colour["border-selected-hover"]};
                    color: ${Colour["text-selected-hover"]};
                    font-weight: ${Font.Spec["weight-semibold"]};
                }
            `;
        }

        return css`
            &:hover {
                background: ${Colour["bg-hover"]};
                color: ${Colour["text-hover"]};
                font-weight: ${Font.Spec["weight-semibold"]};
            }
        `;
    }}
`;
