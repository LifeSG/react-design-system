import styled, { css } from "styled-components";
import { v2_Color } from "../v2_color";
import { v2_Text } from "../v2_text";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    disabled?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const CounterLabel = styled(v2_Text.H6)<StyleProps>`
    text-align: right;
    color: ${v2_Color.Neutral[3]};

    ${(props) => {
        if (props.disabled) {
            return css`
                color: ${v2_Color.Neutral[4](props)};
            `;
        }
    }}
`;
