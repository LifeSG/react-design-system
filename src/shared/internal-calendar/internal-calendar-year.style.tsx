import styled, { css } from "styled-components";
import { Border, Colour, Font, Motion, Radius } from "../../theme";
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
    transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Font["body-md-regular"]}
    border-radius: ${Radius.md};
    border: ${Border["width-010"]} ${Border.solid} transparent;
    background-clip: border-box;
    color: ${Colour["text"]};
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

        if ($variant === "current-year") {
            return css`
                color: ${Colour["text-primary"]};
                font-weight: ${Font.Spec["weight-semibold"]};
            `;
        }

        if ($variant === "other-decade") {
            return css`
                color: ${Colour["text-disabled-subtlest"]};
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

        if ($variant === "selected-year") {
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
