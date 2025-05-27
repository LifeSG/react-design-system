import styled from "styled-components";
import { ClearButton } from "../input/input.style";
import { Selector } from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { Spacing } from "@/theme";

// =============================================================================
// STYLING
// =============================================================================
export const InputSelectorWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`;

export const ClearIconContainer = styled(ClearButton)`
    position: absolute;
    right: 0;
    padding-left: ${Spacing["spacing-8"]};
    margin-right: 0;
`;

export const SelectorDropdown = styled(Selector)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Spacing["spacing-16"]});
`;
