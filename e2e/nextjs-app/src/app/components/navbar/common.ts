import type {
    NavbarButtonProps,
    NavItemProps,
} from "@lifesg/react-design-system/navbar";

export const desktopNavItems: NavItemProps<undefined>[] = [
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

export const ASSETS = {
    LOGO_LIFESG: "https://assets.life.gov.sg/lifesg/logo-lifesg.svg",
    LOGO_SGW:
        "https://assets.life.gov.sg/react-design-system/img/logo/sgw-logo.png",
};
