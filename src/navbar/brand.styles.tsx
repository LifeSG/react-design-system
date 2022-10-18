import styled from "styled-components";
import { MediaQuery } from "../media";
import { Transition } from "../transition";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $compress?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Clickable = styled.a<StyleProps>`
    display: flex;
    justify-content: center;
    margin-right: 2rem;

    img {
        width: auto;
        height: ${(props) => (props.$compress ? 1.375 : 2)}rem;
        transition: ${Transition.Base};

        ${MediaQuery.MaxWidth.tablet} {
            height: 1.375rem;
        }
    }
`;
