import { Divider } from "src/divider";
import { Typography } from "src/typography";
import styled from "styled-components";
import { NavItemProps } from "../../src/navbar";

// =============================================================================
// STYLING
// =============================================================================
const MenuItemName = styled(Typography.BodyBL)`
    margin: 0.5rem 1rem 1rem;
`;
const MenuItemWrapper = styled.div`
    width: 100%;
`;

// =============================================================================
// COMPONENTS
// =============================================================================
export const NAME = "Maximilian";

export const menuItems: NavItemProps<undefined>[] = [
    {
        itemType: "component",
        children: (
            <MenuItemWrapper>
                <MenuItemName weight="semibold">{NAME}</MenuItemName>
                <Divider />
            </MenuItemWrapper>
        ),
    },
    {
        id: "menu-item-2",
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
