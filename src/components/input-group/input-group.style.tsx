import styled, { css } from "styled-components";
import { Icon } from "../icon";
import { Input } from "../input/input";
import { Color } from "../styles/theme";
import { TextStyleHelper } from "../text";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface AddonStyleProps {
    disabled?: boolean;
    error?: boolean;
}

interface MainInputStyleProps {
    hasAddon?: boolean;
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
        if (props.disabled) {
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
        } else if (props.error) {
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
        if (props.hasAddon) {
            return css`
                padding: 0.2rem 1rem 0.3rem 0; // Somehow the input text appears lower
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

    ${(props) => {
        if (props.disabled) {
            return css`
                color: ${Color.Neutral[4](props)};
            `;
        }
    }}
`;

export const IconContainer = styled(Icon)`
    padding-left: 0.5rem;
    color: ${Color.Neutral[4]};
`;
