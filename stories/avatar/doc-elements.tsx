import styled from "styled-components";
import { NavItemCommonProps } from "../../src/navbar";

// =============================================================================
// COMPONENTS
// =============================================================================
export const NAME = "Maximilian";

export const menuItems: NavItemCommonProps<undefined>[] = [
    {
        id: "menu-item-1",
        children: "Lorem ipsum dolor sit amet",
        href: "https://www.life.gov.sg",
    },
    {
        id: "menu-item-2",
        children: "Lorem ipsum",
        href: "https://www.life.gov.sg",
    },
];

export const DefaultComponentWrapper = styled.div`
    display: flex;
    position: relative;
`;
