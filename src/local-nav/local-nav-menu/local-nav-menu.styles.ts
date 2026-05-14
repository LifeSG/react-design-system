import styled from "styled-components";

import { Colour, Radius, Spacing } from "../../theme";
import { Typography } from "../../typography";

export const Nav = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 0;
`;

export const TextLabel = styled(Typography.BodyBL)`
    margin: 0;
`;

export const NavItem = styled.li`
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 4px;
        height: 100%;
        top: 0;
        background-color: ${Colour["bg-primary-subtler"]};
        transition: all 250ms linear;
    }

    &.navItemSelected::before {
        background-color: ${Colour["bg-primary"]};
    }

    &:hover,
    &:focus-within {
        background-color: ${Colour["bg-hover-subtle"]};
    }
`;

export const NavItemContent = styled.div`
    display: block;
    padding: ${Spacing["spacing-16"]};
    padding-left: ${Spacing["spacing-20"]};

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 2px;
        border-radius: ${Radius["sm"]};
    }
`;
