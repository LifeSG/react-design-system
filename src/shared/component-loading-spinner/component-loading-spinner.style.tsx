import styled, { keyframes } from "styled-components";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $size?: number;
    $color?: string | ((props: any) => string);
}

// =============================================================================
// STYLING
// =============================================================================
export const OuterRing = styled.div<StyleProps>`
    display: inline-block;
    position: relative;
    width: ${({ $size }) => ($size ? `${$size}px` : "1em")};
    height: ${({ $size }) => ($size ? `${$size}px` : "1em")};
    color: ${(props) => props.$color || "currentColor"};
`;

const rotate = keyframes`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`;

export const InnerRing1 = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-width: 2px;
    border-style: solid;
    border-radius: 100%;
    border-color: currentColor transparent transparent transparent;
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
