import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text/helper";
import { Text } from "../text/text";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface ContainerStyleProps {
    disabled?: boolean;
    $error?: boolean;
    $readOnly?: boolean;
}
interface LabelStyleProps {
    $hide?: boolean;
    $compress?: boolean;
    $addGap?: boolean;
}
interface StyleProps {
    focused?: boolean;
    disabled?: boolean;
    error?: boolean;
}
const BORDER_RADIUS = "4px";

// =============================================================================
// STYLING
// =============================================================================
export const TimeContainer = styled.div<ContainerStyleProps>`
    box-sizing: border-box;
    display: flex;
    flex-direction: row !important;
    align-items: center;
    padding: 11px 16px;
    gap: 8px;
    width: 335px;
    height: 48px;
    /* background: #ffffff;
    border: 1px solid #e0e4e5;
    border-radius: 4px; */
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    //  position: absolute;
    //top: 3.5rem;
    //left: 0;
    //width: 27rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Color.Neutral[8]};
    border-radius: ${BORDER_RADIUS};
    overflow: hidden;
    z-index: 1;

    :focus,
    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
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

export const InputContainer = styled.div<ContainerStyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    width: 134.5px;
    height: 26px;

    border-radius: 4px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
`;

export const FloorInput = styled.input`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    background: transparent;
    height: 100%;
    width: 3rem;
    border: none;
    text-align: center;
    padding: 0;

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;

    :focus,
    :active {
        outline: none;
    }

    ${(props) => {
        if (props.disabled) {
            return css`
                cursor: not-allowed;
            `;
        }
    }}
`;

export const UnitInput = styled(FloorInput)`
    width: 4.5rem;
`;

export const UnitNumberDivider = styled(Text.Body)<LabelStyleProps>`
    margin-left: 0.1rem;
    ${(props) => {
        if (props.$hide) {
            return css`
                color: ${Color.Neutral[3]};
            `;
        }
    }}
`;

export const InputSelectorElement = styled.input<StyleProps>`
    ${TextStyleHelper.getTextStyle("Body", "regular")}
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.2rem 1rem 0.3rem 1rem; // Somehow the input text appears lower
    height: 3rem;
    width: 100%;
    background: ${Color.Neutral[8]};
    color: ${Color.Neutral[1]};

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    width: 134.5px;
    height: 26px;

    border-radius: 4px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
    :focus,
    :active {
        outline: none;
    }

    ${(props) => {
        if (props.disabled) {
            return css`
                background: ${Color.Neutral[6](props)};
                cursor: not-allowed;
            `;
        } else if (props.error && !props.focused) {
            return css`
                border: 1px solid ${Color.Validation.Red.Border(props)};
            `;
        } else if (props.error && props.focused) {
            return css`
                border: 1px solid ${Color.Validation.Red.Border(props)};
                box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
            `;
        } else if (props.focused) {
            return css`
                border: 1px solid ${Color.Accent.Light[1]};
                box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
            `;
        }
    }}
`;
