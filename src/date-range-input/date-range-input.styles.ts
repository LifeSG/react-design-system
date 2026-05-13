import styled from "styled-components";

import { InputWrapper } from "../shared/input-wrapper";
import { Spacing } from "../theme";

export const MOBILE_WRAP_WIDTH = 320;

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled(InputWrapper)`
    &.containerWrap {
        padding: ${Spacing["spacing-12"]} ${Spacing["spacing-16"]};
    }

    &.containerWrapReadOnly {
        padding: ${Spacing["spacing-12"]} 0;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    &.inputContainerWrap {
        height: fit-content;
    }
`;
