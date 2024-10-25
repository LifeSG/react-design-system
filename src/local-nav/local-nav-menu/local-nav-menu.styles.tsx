import styled from "styled-components";
import { Color } from "../../color";

interface NavItemStyleProps {
    isSelected?: boolean;
}

export const Nav = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
`;

export const NavItem = styled.li<NavItemStyleProps>`
    position: relative;
    margin: 0;
    padding: 1rem;
    cursor: pointer;
    ${(props) => props.isSelected && "font-weight: bold;"}

    &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 0.25rem;
        height: 100%;
        top: 0;
        background-color: ${Color.Primary} !important;
        transition: all 250ms linear;
        opacity: ${(props) => (props.isSelected ? "1" : "0.2")};
    }

    &:hover {
        font-weight: bold;
        background-color: ${Color.Accent.Light[6]};
    }
`;
