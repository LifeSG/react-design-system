import styled, { css } from "styled-components";
import { Color } from "../color";
import { Icon } from "../icon";
import { Input } from "../input/input";
import { TextStyleHelper } from "../text";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface AddonStyleProps {
    disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
    $position?: "left" | "right";
}

interface MainInputStyleProps {
    $position?: "left" | "right" | undefined;
}

// =============================================================================
// STYLING
// =============================================================================

export const Container = styled.div<AddonStyleProps>`
    display: flex;
    position: relative;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    background: ${Color.Neutral[8]};
    height: 3rem;
    width: 100%;

    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ${(props) => {
        if (props.$position === "right") {
            return css`
                flex-direction: row-reverse;
            `;
        }
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
`;

export const MainInput = styled(Input)<MainInputStyleProps>`
    // overwrite default styles
    background: transparent;
    border: none;
    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ${(props) => {
        switch (props.$position) {
            case "right":
                return css`
                    padding: 0.2rem 0 0.3rem 1rem; // Input text appears lower hence the higher lower padding
                `;
            case "left":
            default:
                return css`
                    padding: 0.2rem 1rem 0.3rem 0; // Input text appears lower hence the higher lower padding
                `;
        }
    }}
`;

export const AddOnContainer = styled.div<AddonStyleProps>`
    position: relative;
    display: flex;
    align-items: center;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 0 0.6875rem 0 1rem;

    ${TextStyleHelper.getTextStyle("Body", "regular")}
    color: ${Color.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Color.Neutral[1]};
        }
    }

    ${(props) => {
        if (props.disabled) {
            return css`
                color: ${Color.Neutral[4](props)};
                svg {
                    #path {
                        fill: ${Color.Neutral[4](props)};
                    }
                }
            `;
        }
    }}
`;

export const IconContainer = styled(Icon)`
    padding-left: 0.5rem;
    color: ${Color.Neutral[4]};
`;
