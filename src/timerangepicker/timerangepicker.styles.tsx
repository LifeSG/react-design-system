import styled, { css } from "styled-components";
import { Color } from "../color";
import { TextStyleHelper } from "../text/helper";

// =============================================================================
// STYLE INTERFACe
// =============================================================================
interface StyleProps {
    focused?: boolean;
    disabled?: boolean;
    error?: boolean;
}

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
// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    position: relative;
`;

export const InputSelectorElement = styled.input<StyleProps>`
    ${TextStyleHelper.getTextStyle("Body", "regular")}

    display: block;
    padding: 0.2rem 1rem 0.3rem 1rem; // Somehow the input text appears lower
    width: 134.5px;
    height: 26px;
    background: ${Color.Neutral[8]};
    color: ${Color.Neutral[1]};
    border: 0px;
    :focus,
    :active {
        outline: none;
    }
`;

export const TimeContainer = styled.div<ContainerStyleProps>`
    box-sizing: border-box;
    display: flex;
    flex-direction: row !important;
    align-items: center;
    padding: 11px 16px;
    gap: 8px;
    width: 335px;
    height: 48px;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Color.Neutral[8]};
    border-radius: 4px;
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

export const RangeArrow = styled.div`
    position: absolute;
    left: 16.67%;
    right: 18.44%;
    top: 18.33%;
    bottom: 18.34%;
`;
