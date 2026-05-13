import styled, { css } from "styled-components";

import { InputWrapper } from "../shared/input-wrapper";
import { V3_Spacing } from "../v3_theme";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $wrap: boolean;
    $readOnly?: boolean;
}

export const MOBILE_WRAP_WIDTH = 320;

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled(InputWrapper)<StyleProps>`
    ${(props) => {
        if (props.$wrap) {
            if (props.$readOnly === true) {
                return css`
                    padding: ${V3_Spacing["spacing-12"]} 0;
                `;
            }
            return css`
                padding: ${V3_Spacing["spacing-12"]} ${V3_Spacing["spacing-16"]};
            `;
        }
    }}
`;

export const InputContainer = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${(props) =>
        props.$wrap &&
        css`
            height: fit-content;
        `}
`;
