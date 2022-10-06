import { Color } from "../../color/color";
import styled, { keyframes } from "styled-components";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $size: number;
    $color?: string;
}

interface InnerStyleProps {
    $borderWidth: number;
    $size: number;
    $color?: string;
}

// =============================================================================
// STYLING
// =============================================================================
export const OuterRing = styled.div<StyleProps>`
    display: inline-block;
    position: relative;
    width: ${(props) => props.$size}px;
    height: ${(props) => props.$size}px;
`;

const rotate = keyframes`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`;

export const InnerRing1 = styled.div<InnerStyleProps>`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${(props) => props.$size}px;
    height: ${(props) => props.$size}px;
    margin: ${(props) => props.$borderWidth}px;
    border-width: ${(props) => props.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${(props) => props.$color || Color.Neutral[8](props)}
        transparent transparent transparent;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`;

export const InnerRing2 = styled(InnerRing1)`
    animation-delay: -0.45s;
`;

export const InnerRing3 = styled(InnerRing1)`
    animation-delay: -0.3s;
`;

export const InnerRing4 = styled(InnerRing1)`
    animation-delay: -0.15s;
`;
