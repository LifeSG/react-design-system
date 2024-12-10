import styled from "styled-components";
import { V2_Color } from "../../v2_color";
import { V2_Text } from "../../v2_text/text";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface NavItemStyleProps {
    $isSelected?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

export const Nav = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
`;
export const TextLabel = styled(V2_Text.Body)<NavItemStyleProps>`
    margin: 0;
`;

export const NavItem = styled.li<NavItemStyleProps>`
    position: relative;
    margin: 0;
    padding: 1rem;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 4px;
        height: 100%;
        top: 0;
        background-color: ${(props) =>
            props.$isSelected ? V2_Color.Primary : V2_Color.Accent.Light[5]};
        transition: all 250ms linear;
    }

    &:hover {
        background-color: ${V2_Color.Accent.Light[6]};
    }
`;
