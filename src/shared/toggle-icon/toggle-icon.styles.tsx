import styled, { css } from "styled-components";
import { v2_Color } from "../../v2_color";

interface StyleProps {
    $active?: boolean;
    disabled?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div<StyleProps>`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${(props) => {
            if (props.$active && !props.disabled) {
                return css`
                    color: ${v2_Color.Primary};
                `;
            } else {
                return css`
                    color: ${v2_Color.Neutral[4]};
                `;
            }
        }};
    }
`;
