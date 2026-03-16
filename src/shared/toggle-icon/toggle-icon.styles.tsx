import styled, { css } from "styled-components";

import { V3_Colour } from "../../v3_theme";

interface StyleProps {
    $active?: boolean;
    $disabled?: boolean;
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
    }

    ${(props) => {
        if (props.$disabled) {
            if (props.$active) {
                return css`
                    color: ${V3_Colour["icon-selected-disabled"]};
                `;
            } else {
                return css`
                    color: ${V3_Colour["icon-disabled-subtle"]};
                `;
            }
        }

        if (props.$active) {
            return css`
                color: ${V3_Colour["icon-selected"]};
            `;
        }

        return css`
            color: ${V3_Colour["icon-subtle"]};
        `;
    }};
`;
