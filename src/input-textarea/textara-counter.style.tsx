import styled, { css } from "styled-components";
import { V2_Color } from "../v2_color";
import { V2_Text } from "../v2_text";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    disabled?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const CounterLabel = styled(V2_Text.H6)<StyleProps>`
    text-align: right;
    color: ${V2_Color.Neutral[3]};

    ${(props) => {
        if (props.disabled) {
            return css`
                color: ${V2_Color.Neutral[4](props)};
            `;
        }
    }}
`;
