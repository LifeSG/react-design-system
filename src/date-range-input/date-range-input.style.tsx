import styled, { css } from "styled-components";
import { InputWrapper } from "../shared/input-wrapper/input-wrapper";
import { Spacing } from "../theme";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $wrap: boolean;
}

export const MOBILE_WRAP_WIDTH = 320;

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled(InputWrapper)<StyleProps>`
    ${(props) =>
        props.$wrap &&
        css`
            padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
        `}
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
