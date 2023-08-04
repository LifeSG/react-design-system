import styled from "styled-components";
import { Text } from "../../src/text/text";
import { Color } from "../../src/color";

// =============================================================================
// STYLING
// =============================================================================
export const CustomComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 1rem 1.25rem 0.5rem 1.25rem;
`;

export const SubLabel = styled(Text.H6)`
    color: ${Color.Neutral[4]};
`;
