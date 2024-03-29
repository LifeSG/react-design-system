import styled from "styled-components";
import { Transition } from "../transition";
import { BrandType } from "./types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $type?: BrandType | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Clickable = styled.a<StyleProps>`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Transition.Base};
        object-fit: contain;
    }
`;
