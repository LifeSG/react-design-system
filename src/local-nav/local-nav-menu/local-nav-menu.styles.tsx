import styled from "styled-components";
import { Colour } from "@/theme";
import { Typography } from "../../typography";

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

export const TextLabel = styled(Typography.BodyBL)<NavItemStyleProps>`
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
            props.$isSelected
                ? Colour["bg-primary"]
                : Colour["bg-primary-subtler"]};
        transition: all 250ms linear;
    }

    &:hover {
        background-color: ${Colour["bg-hover-subtle"]};
    }
`;
