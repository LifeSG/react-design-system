import styled from "styled-components";
import { Colour, Font } from "@/theme";

// =============================================================================
// STYLING
// =============================================================================
export const CounterLabel = styled.p`
    text-align: right;
    ${Font["body-sm-semibold"]}
    color: ${Colour["text-subtler"]};
`;
