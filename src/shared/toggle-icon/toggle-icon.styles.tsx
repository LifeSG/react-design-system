import styled, { css } from "styled-components";
import { Colour } from "../../theme";

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
                    color: ${Colour["icon-primary"]};
                `;
            } else {
                return css`
                    color: ${Colour["icon-disabled-subtle"]};
                `;
            }
        }};
    }
`;
