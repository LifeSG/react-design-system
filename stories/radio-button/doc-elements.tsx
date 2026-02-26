import { V3_Font } from "src/v3_theme";
import styled from "styled-components";

// =============================================================================
// STYLING
// =============================================================================
export const OptionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:not(:last-of-type) {
        margin-bottom: 0.5rem;
    }
`;
OptionContainer.displayName = "div";

export const OptionLabel = styled.label`
    ${V3_Font["body-baseline-regular"]}
    cursor: pointer;
`;
OptionLabel.displayName = "label";

export const RadioGroupLabel = styled.div`
    ${V3_Font["body-baseline-semibold"]}
    margin-bottom: 1rem;
`;
RadioGroupLabel.displayName = "div";
