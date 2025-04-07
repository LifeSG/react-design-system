import styled from "styled-components";
import { Motion } from "../theme";
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
        transition: ${Motion["duration-150"]} ${Motion["ease-default"]};
        object-fit: contain;
    }
`;
