import styled from "styled-components";
import { ClearContainer } from "../input/input.style";
import { Selector } from "../shared/dropdown-wrapper/dropdown-wrapper.styles";

// =============================================================================
// STYLING
// =============================================================================
export const EmptyIconWrapper = styled.div`
    height: 1.25rem;
    min-width: 3.25rem;
    margin-right: -1rem;
    margin-left: -1rem;
`;

export const InputSelectorWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;
`;

export const ClearIconContainer = styled(ClearContainer)`
    padding-left: 0;
`;

export const SelectorDropdown = styled(Selector)`
    padding-right: 0.5rem;
`;
