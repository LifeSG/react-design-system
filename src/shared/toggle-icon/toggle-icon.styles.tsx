import styled, { css } from "styled-components";
import { Color } from "../../color";

interface StyleProps {
    $active?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div<StyleProps>`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;

    svg {
        height: 100%;
        width: 100%;

        ${(props) => {
            if (props.$active) {
                return css`
                    color: ${Color.Primary};
                `;
            } else {
                return css`
                    color: ${Color.Neutral[4]};
                `;
            }
        }};
    }
`;
