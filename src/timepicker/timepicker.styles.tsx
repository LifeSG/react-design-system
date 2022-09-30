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

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    position: relative;
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
