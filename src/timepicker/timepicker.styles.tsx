import styled from "styled-components";
import { BasicInput } from "../shared/input-wrapper/input-wrapper";

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    position: relative;
`;

export const InputSelectorElement = styled(BasicInput)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`;
