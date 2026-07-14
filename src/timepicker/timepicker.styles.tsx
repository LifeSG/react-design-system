import styled, { css } from "styled-components";
import { BasicInput } from "../shared/input-wrapper/input-wrapper";
import { Colour } from "../theme";

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
    cursor: inherit;
    ${(props) =>
        props.$disabled &&
        css`
            color: ${Colour["text-subtler"]};
            cursor: not-allowed;
        `}
`;
