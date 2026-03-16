import styled from "styled-components";

import { V3_Colour, V3_Font } from "../v3_theme";

// =============================================================================
// STYLING
// =============================================================================
export const CounterLabel = styled.p`
    text-align: right;
    ${V3_Font["body-sm-semibold"]}
    color: ${V3_Colour["text-subtler"]};
`;
