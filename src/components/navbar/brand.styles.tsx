import styled from "styled-components";
import { MediaQuery, Transition } from "../styles/spec";

// =============================================================================
// STYLE PROPS
// =============================================================================
interface IStyle {
    compress?: boolean;
    drawerMode?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Clickable = styled.a<IStyle>`
    display: flex;
    justify-content: center;
    margin-right: 2rem;

    img {
        width: auto;
        height: ${(props) => (props.compress ? 1.375 : 2)}rem;
        transition: ${Transition.Base};

        ${MediaQuery.MaxWidth.tablet} {
            height: 1.375rem;
        }
    }
`;
