import styled, { css } from "styled-components";

import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_Motion,
    V3_Radius,
} from "../../v3_theme";
import type { MonthVariant } from "./internal-calendar-month";

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
    border-radius: ${V3_Radius["md"]};
    margin: 0 0.5rem;
    transition: ${V3_Motion["duration-150"]} ${V3_Motion["ease-default"]};

    // default styles
    ${V3_Font["body-md-regular"]}
    border-radius: ${V3_Radius["md"]};
    border: ${V3_Border["width-010"]} ${V3_Border.solid} transparent;
    background-clip: border-box;
    color: ${V3_Colour["text"]};
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
                background: ${V3_Colour["bg-selected"]};
                border-color: ${V3_Colour["border-selected"]};
                color: ${V3_Colour["text-selected"]};
                font-weight: ${V3_Font.Spec["weight-semibold"]};

                ${$interactive &&
                css`
                    &:hover {
                        background: ${V3_Colour["bg-selected-hover"]};
                        border-color: ${V3_Colour["border-selected-hover"]};
                        color: ${V3_Colour["text-selected-hover"]};
                    }
                `}
            `;
        }

        if ($variant === "current-month") {
            return css`
                color: ${V3_Colour["text-primary"]};
                font-weight: ${V3_Font.Spec["weight-semibold"]};
            `;
        }

        if ($disabledDisplay) {
            return css`
                color: ${V3_Colour["text-disabled-subtlest"]};
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
                    background: ${V3_Colour["bg-selected-hover"]};
                    border-color: ${V3_Colour["border-selected-hover"]};
                    color: ${V3_Colour["text-selected-hover"]};
                    font-weight: ${V3_Font.Spec["weight-semibold"]};
                }
            `;
        }

        return css`
            &:hover {
                background: ${V3_Colour["bg-hover"]};
                color: ${V3_Colour["text-hover"]};
                font-weight: ${V3_Font.Spec["weight-semibold"]};
            }
        `;
    }}
`;
