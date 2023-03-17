import styled from "styled-components";
import { MediaQuery } from "../media";
import { Transition } from "../transition";
import { BrandType } from "./types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $compress?: boolean | undefined;
    $type?: BrandType | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Clickable = styled.a<StyleProps>`
    display: flex;
    justify-content: center;

    img {
        width: auto;
        height: ${(props) =>
            props.$type === "primary"
                ? props.$compress
                    ? 1.25
                    : 1.625
                : props.$compress
                ? 2
                : 2.5}rem;
        transition: ${Transition.Base};

        ${MediaQuery.MaxWidth.tablet} {
            height: ${(props) => (props.$type === "primary" ? 1 : 1.5)}rem;
        }
    }
`;
