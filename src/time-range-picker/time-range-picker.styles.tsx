import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import styled, { css } from "styled-components";
import { Color } from "../color";
import {
    BasicInput,
    InputWrapper,
} from "../shared/input-wrapper/input-wrapper";

// =============================================================================
// STYLE INTERFACE
// =============================================================================

interface IndicatorStyleProps {
    $position: "start" | "end" | "none";
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

export const ArrowRight = styled(ArrowRightIcon)`
    color: ${Color.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
`;

export const Indicator = styled.div<IndicatorStyleProps>`
    position: absolute;
    background-color: ${Color.Primary};
    height: 0.125rem;
    width: calc(100% - 50% - 2rem); // paddingX is 2rem
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 1rem;
    bottom: 0;

    ${(props) => {
        switch (props.$position) {
            case "start":
                return css`
                    left: 1rem;
                    opacity: 1;
                `;
            case "end":
                return css`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;
            case "none":
                return css`
                    left: 1rem;
                    opacity: 0;
                `;
        }
    }}
`;

export const SelectorInput = styled(BasicInput)`
    display: block;
    width: 100%;
    flex: 1;
`;
