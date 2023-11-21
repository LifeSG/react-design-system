import styled, { css } from "styled-components";
import { InputWrapper } from "../shared/input-wrapper/input-wrapper";

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
            padding: 0.75rem 1rem;
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
