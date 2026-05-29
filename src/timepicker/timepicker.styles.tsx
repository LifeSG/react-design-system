import styled, { css } from "styled-components";
import { BasicInput } from "../shared/input-wrapper/input-wrapper";

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    position: relative;
`;

export const InputSelectorElement = styled(BasicInput)<{
    $disabled?: boolean | undefined;
}>`
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${(props) => {
        if (props.$disabled) {
            return css`
                cursor: not-allowed;
            `;
        }
    }}
`;
