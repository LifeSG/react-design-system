import styled, { css } from "styled-components";
import {
    V3_Border,
    V3_Colour,
    V3_Font,
    V3_Motion,
    V3_Radius,
} from "../../v3_theme";
import { YearVariant } from "./internal-calendar-year";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $disabledDisplay: boolean;
    $interactive: boolean;
    $variant: YearVariant;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`;

export const YearCell = styled.div<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${V3_Motion["duration-150"]} ${V3_Motion["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${V3_Font["body-md-regular"]}
    border-radius: ${V3_Radius["md"]};
    border: ${V3_Border["width-010"]} ${V3_Border.solid} transparent;
    background-clip: border-box;
    color: ${V3_Colour["text"]};
    cursor: default;

    // cursor style
    ${({ $interactive, $disabledDisplay }) => {
        if ($interactive) {
            return css`
                cursor: pointer;
            `;
        }

        if ($disabledDisplay) {
            return css`
                cursor: not-allowed;
            `;
        }
    }}

    // background, border and text styles
    ${({ $variant, $interactive, $disabledDisplay }) => {
        if ($variant === "selected-year") {
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

        if ($variant === "current-year") {
            return css`
                color: ${V3_Colour["text-primary"]};
                font-weight: ${V3_Font.Spec["weight-semibold"]};
            `;
        }

        if ($variant === "other-decade") {
            return css`
                color: ${V3_Colour["text-disabled-subtlest"]};
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

        if ($variant === "selected-year") {
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
