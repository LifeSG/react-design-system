import styled, { css } from "styled-components";
import { Color } from "../styles/theme";
import { Text } from "../text/text";

// =============================================================================
// STYLE INTERFACES
// =============================================================================
interface StyleProps {
    selected?: boolean;
    disabled?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<StyleProps>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.6875rem 1rem;
    height: 3rem;
    min-width: 5rem;
    border-radius: 4px;
    border: 1px solid ${Color.Primary};
    background: ${Color.Neutral[8]};
    cursor: pointer;

    :hover {
        box-shadow: 0 0 4px 1px rgba(87, 169, 255, 0.5);
    }

    ${(props) => {
        if (props.disabled && !props.selected) {
            return css`
                background: ${Color.Neutral[6](props)};
                border: 1px solid ${Color.Neutral[6](props)};
                cursor: not-allowed;

                :hover {
                    box-shadow: none;
                }
            `;
        } else if (props.disabled && props.selected) {
            return css`
                background: ${Color.Neutral[6](props)};
                border: 1px solid ${Color.Neutral[4](props)};
                cursor: not-allowed;

                :hover {
                    box-shadow: none;
                }
            `;
        } else if (props.selected) {
            return css`
                background: ${Color.Accent.Light[5](props)};
                padding: 0.6875rem 0.912rem; // Bold font takes bigger width
            `;
        } else if (props.selected == false) {
            return css`
                border: 1px solid ${Color.Neutral[5](props)};
            `;
        }
    }}
`;

export const Input = styled.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`;

export const Label = styled(Text.H4)<StyleProps>`
    color: ${Color.Neutral[1]};
    text-align: center;

    ${(props) => {
        if (props.disabled) {
            return css`
                color: ${Color.Neutral[3](props)};
            `;
        } else if (props.selected) {
            return css`
                color: ${Color.Primary(props)};
            `;
        }
    }}
`;
