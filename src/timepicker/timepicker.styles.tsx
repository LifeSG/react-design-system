import styled from "styled-components";
import { BasicInput } from "../shared/input-wrapper/input-wrapper";

// =============================================================================
// STYLE INTERFACe
// =============================================================================
interface StyleProps {
    focused?: boolean;
    disabled?: boolean;
    error?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    position: relative;
`;

export const InputSelectorElement = styled(BasicInput)<StyleProps>`
    height: calc(3rem - 2px); // exclude top and bottom borders
`;
