import styled, { css } from "styled-components";
import { Color } from "../color";
import { DesignToken } from "../design-token";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface ContainerStyleProps {
    $disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const MOBILE_WRAP_WIDTH = 374;

export const Container = styled.div<ContainerStyleProps>`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 0.25rem;
    background: ${Color.Neutral[8]};
    min-height: 3rem;
    width: 100%;
    padding: 0 1rem;

    :focus,
    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }

    @media screen and (max-width: ${MOBILE_WRAP_WIDTH}px) {
        padding: 0.75rem 1rem;
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
        } else if (props.$disabled) {
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
                    box-shadow: ${DesignToken.InputErrorBoxShadow};
                }
            `;
        }
    }}
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    height: 3rem;
    width: 100%;

    @media screen and (max-width: ${MOBILE_WRAP_WIDTH}px) {
        height: fit-content;
    }
`;
