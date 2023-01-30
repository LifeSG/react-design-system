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
// =============================================================================
// STYLING
// =============================================================================
export const TimeContainer = styled.div<ContainerStyleProps>`
    /* Input */

    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row !important;
    align-items: center;
    padding: 11px 16px;
    gap: 8px;

    width: 335px;
    height: 48px;

    /* N8 #FFFFFF */

    background: #ffffff;
    /* N5 #E0E4E5 */

    border: 1px solid #e0e4e5;
    border-radius: 4px;

    /* Inside auto layout */

    //flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

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
    /* display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    width: 134.5px;
    height: 26px;

    border-radius: 4px;
    //flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1; */

    /* From */


/* Auto layout */

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
