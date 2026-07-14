import styled, { css } from "styled-components";
import {
    BasicInput,
    InputWrapper,
} from "../shared/input-wrapper/input-wrapper";
import { Colour, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    position: relative;
`;

export const TimeContainer = styled(InputWrapper)`
    height: 3rem;
    gap: ${Spacing["spacing-8"]};
`;

export const SelectorInput = styled(BasicInput)<{
    $disabled?: boolean | undefined;
}>`
    display: block;
    width: 100%;
    flex: 1;
    ${(props) =>
        props.$disabled &&
        css`
            color: ${Colour["text-subtler"]};
            cursor: not-allowed;
        `}
`;
