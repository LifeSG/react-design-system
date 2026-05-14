import type {
    NavbarButtonProps,
    NavItemProps,
} from "@lifesg/react-design-system/navbar";

export const navItems: NavItemProps<undefined>[] = [
    {
        id: "home",
        children: "Home",
        href: "https://www.life.gov.sg",
    },
    {
        id: "guides",
        children: "Guides",
        href: "https://www.life.gov.sg",
    },
    {
        id: "lifesg-app",
        children: "LifeSG app",
        href: "https://www.life.gov.sg",
    },
];

export const downloadActionButtons: NavbarButtonProps[] = [
    { type: "download" },
];

export const navItemsWithSubmenu: NavItemProps<undefined>[] = [
    {
        id: "home",
        children: "Home",
        href: "https://www.life.gov.sg",
    },
    {
        id: "services",
        children: "Services",
        href: "https://www.life.gov.sg/?section=services-and-tools",
        subMenu: [
            {
                id: "services-getting-started",
                children: "Birth registration",
                href: "https://www.life.gov.sg",
            },
            {
                id: "services-baby-bonus",
                children: "Baby bonus",
                href: "https://www.life.gov.sg",
            },
            {
                id: "services-preschool-search",
                children: "Preschool search",
                href: "https://www.life.gov.sg",
            },
        ],
    },
    {
        id: "lifesg-app",
        children: "LifeSG app",
        href: "https://www.life.gov.sg",
    },
];
