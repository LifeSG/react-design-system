// Generated with util/create-component.js

import styled, { css } from "styled-components";
import { Transition } from "../styles/spec";
import { Color } from "../styles/theme";
import { TextStyleHelper } from "../text";

// =============================================================================
// STYLE INTERFACe
// =============================================================================
interface StyleProps {
    error?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Element = styled.textarea<StyleProps>`
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Transition.Base};

    ${TextStyleHelper.getTextStyle("Body", "regular")}
    color: ${Color.Neutral[1]};
    background: ${Color.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Color.Neutral[34]};
    }

    ${(props) => {
        if (props.disabled) {
            return css`
                background: ${Color.Neutral[6](props)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Color.Neutral[5](props)};
                    box-shadow: none;
                }
            `;
        }

        if (props.error) {
            return css`
                border: 1px solid ${Color.Validation.Red.Border(props)};

                :focus,
                :active {
                    border: 1px solid ${Color.Validation.Red.Border(props)};
                    box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
                }
            `;
        }
    }}
`;
