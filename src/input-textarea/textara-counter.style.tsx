import styled, { css } from "styled-components";
import { Color } from "../color";
import { Text } from "../text";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    disabled?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const CounterLabel = styled(Text.H6)<StyleProps>`
    text-align: right;

    ${(props) => {
        if (props.disabled) {
            return css`
                color: ${Color.Neutral[4](props)};
            `;
        }
    }}
`;
