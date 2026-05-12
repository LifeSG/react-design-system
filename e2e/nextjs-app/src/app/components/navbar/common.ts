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
        href: "https://www.life.gov.sg/guides",
    },
    {
        id: "lifesg-app",
        children: "LifeSG app",
        href: "https://apps.apple.com/sg/app/lifesg/id1383218758",
    },
];

export const downloadActionButtons: NavbarButtonProps[] = [
    { type: "download" },
];

export const ASSETS = {
    LOGO_LIFESG: "https://assets.life.gov.sg/lifesg/logo-lifesg.svg",
    LOGO_SGW:
        "https://assets.life.gov.sg/react-design-system/img/logo/sgw-logo.png",
};

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
                href: "https://www.life.gov.sg/services-tools/birth-registration",
            },
            {
                id: "services-baby-bonus",
                children: "Baby bonus",
                href: "https://www.life.gov.sg/services-tools/baby-bonus",
            },
            {
                id: "services-preschool-search",
                children: "Preschool search",
                href: "https://www.life.gov.sg/services-tools/preschool-search",
            },
        ],
    },
    {
        id: "lifesg-app",
        children: "LifeSG app",
        href: "https://apps.apple.com/sg/app/lifesg/id1383218758",
    },
];
