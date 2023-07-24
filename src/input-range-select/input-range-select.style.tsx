import styled from "styled-components";
import { ClearContainer } from "../input/input.style";
import { Selector } from "../shared/dropdown-wrapper/dropdown-wrapper.styles";

// =============================================================================
// STYLING
// =============================================================================
export const InputSelectorWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;

export const ClearIconContainer = styled(ClearContainer)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`;

export const SelectorDropdown = styled(Selector)`
    padding-right: 2.75rem;
`;
