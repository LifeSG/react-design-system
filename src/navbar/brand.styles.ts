import styled from "styled-components";

import { V3_Motion } from "../v3_theme";
import type { BrandType } from "./types";

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
export const Container = styled.a<StyleProps>`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${V3_Motion["duration-150"]} ${V3_Motion["ease-default"]};
        object-fit: contain;
    }
`;
