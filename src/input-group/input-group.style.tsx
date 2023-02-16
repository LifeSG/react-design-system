import styled, { css } from "styled-components";
import { Color } from "../color";
import { DesignToken } from "../design-token";
import { Input } from "../input/input";
import { TextStyleHelper } from "../text";
import { InputGroupAddonPosition } from "./types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface AddonStyleProps {
    disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
    $position?: InputGroupAddonPosition;
}

interface MainInputStyleProps {
    $position?: InputGroupAddonPosition;
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
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${(props) =>
        props.$position === "right" ? "row-reverse" : "row"};

    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }

    ${(props) => {
        if (props.$readOnly) {
            return css`
                border: none;
                padding: 0;
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
                    box-shadow: ${DesignToken.InputErrorBoxShadow};
                }
            `;
        }
    }}
`;

export const MainInput = styled(Input)<MainInputStyleProps>`
    // overwrite default styles
    background: transparent;
    border: none;
    padding: 0;

    :focus-within {
        outline: none;
        border: none;
        box-shadow: none;
    }
`;

export const AddOnContainer = styled.div<AddonStyleProps>`
    position: relative;
    display: flex;
    align-items: center;

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
        if (props.$readOnly) {
            return css`
                padding-left: 0rem;
            `;
        } else if (props.disabled) {
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

    ${(props) => {
        switch (props.$position) {
            case "right":
                return css`
                    margin-left: 0.75rem;
                `;
            case "left":
            default:
                return css`
                    margin-right: 0.75rem;
                `;
        }
    }};
`;
