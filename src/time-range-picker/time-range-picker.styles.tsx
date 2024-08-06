import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import styled, { css } from "styled-components";
import { v2_Color } from "../v2_color";
import {
    BasicInput,
    InputWrapper,
} from "../shared/input-wrapper/input-wrapper";

// =============================================================================
// STYLE INTERFACE
// =============================================================================

interface IndicatorStyleProps {
    $position: "start" | "end" | "none";
    $error: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Wrapper = styled.div`
    position: relative;
`;

export const TimeContainer = styled(InputWrapper)`
    height: 3rem;
    gap: 0.5rem;
`;

export const SelectorInput = styled(BasicInput)`
    display: block;
    width: 100%;
    flex: 1;
`;
