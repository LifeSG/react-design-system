import { GearIcon } from "@lifesg/react-icons/gear";
import { InboxIcon } from "@lifesg/react-icons/inbox";
import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { IconButton } from "src/icon-button";
import { Navbar } from "src/navbar";
import { DesktopCustomComponent, MobileCustomComponent } from "./doc-elements";

type Component = typeof Navbar;

const meta: Meta<Component> = {
    title: "Modules/Navbar",
    component: Navbar,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [selected, setSelected] = useState("home");
        return (
            <Navbar
                items={{
                    desktop: [
                        {
                            id: "home",
                            children: "Home",
                            onClick: () => {
                                setSelected("home");
                            },
                        },
                        {
                            id: "guides",
                            children: "Guides",
                            onClick: () => {
                                setSelected("guides");
                            },
                        },
                        {
                            id: "lifesg-app",
                            children: "LifeSG app",
                            onClick: () => {
                                setSelected("lifesg-app");
                            },
                        },
                        {
                            id: "blog",
                            children: "Blog",
                            onClick: () => {
                                setSelected("blog");
                            },
                        },
                    ],
                    mobile: [
                        {
                            id: "home-mobile",
                            children: "Home",
                            href: "https://www.life.gov.sg",
                        },
                        {
                            id: "guides-mobile",
                            children: "Guides",
                            href: "https://www.life.gov.sg",
                        },
                        {
                            id: "lifesg-app-mobile",
                            children: "LifeSG app",
                            href: "https://www.life.gov.sg",
                        },
                        {
                            id: "blog-mobile",
                            children: "Blog",
                            href: "https://www.life.gov.sg/blog",
                        },
                    ],
                }}
                actionButtons={{
                    desktop: [{ type: "download" }],
                }}
                selectedId={selected}
                fixed={false}
            />
        );
    },
};

export const SingleActionButton: StoryObj<Component> = {
    render: () => {
        return (
            <Navbar
                items={{
                    desktop: [],
                    mobile: [],
                }}
                actionButtons={{
                    desktop: [
                        {
                            type: "button",
                            args: {
                                styleType: "secondary",
                                children: "Logout",
                            },
                        },
                    ],
                }}
                selectedId="home"
                fixed={false}
            />
        );
    },
};

export const MultipleActionButtons: StoryObj<Component> = {
    render: () => {
        return (
            <Navbar
                items={{
                    desktop: [
                        {
                            id: "home",
                            children: "Home",
                            href: "https://www.life.gov.sg",
                            target: "_blank",
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
                    ],
                }}
                actionButtons={{
                    desktop: [
                        {
                            type: "button",
                            args: {
                                styleType: "link",
                                children: "FAQ",
                            },
                        },
                        {
                            type: "button",
                            args: {
                                styleType: "secondary",
                                children: "Logout",
                            },
                        },
                        {
                            type: "download",
                        },
                    ],
                    mobile: [
                        {
                            type: "download",
                        },
                        {
                            type: "button",
                            args: {
                                styleType: "secondary",
                                children: "Logout",
                            },
                        },
                        {
                            type: "button",
                            args: {
                                styleType: "link",
                                children: "FAQ",
                            },
                        },
                    ],
                }}
                selectedId="home"
                fixed={false}
            />
        );
    },
};

export const CustomActionButtons: StoryObj<Component> = {
    render: () => {
        return (
            <Navbar
                items={{
                    desktop: [
                        {
                            id: "home",
                            children: "Home",
                            href: "https://www.life.gov.sg",
                            target: "_blank",
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
                    ],
                }}
                actionButtons={{
                    desktop: [
                        {
                            type: "component",
                            args: {
                                render: (
                                    <IconButton>
                                        <GearIcon
                                            style={{
                                                width: "1.25rem",
                                                height: "1.25rem",
                                            }}
                                        />
                                    </IconButton>
                                ),
                            },
                        },
                    ],
                }}
                selectedId="home"
                fixed={false}
            />
        );
    },
};

export const UncollapsibleActionButtons: StoryObj<Component> = {
    render: () => {
        return (
            <Navbar
                items={{
                    desktop: [
                        {
                            id: "home",
                            children: "Home",
                            href: "https://www.life.gov.sg",
                            target: "_blank",
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
                    ],
                }}
                actionButtons={{
                    desktop: [
                        {
                            type: "component",
                            args: {
                                render: (
                                    <InboxIcon
                                        style={{
                                            width: "1.25rem",
                                            height: "1.25rem",
                                        }}
                                    />
                                ),
                            },
                            uncollapsible: true,
                        },
                    ],
                }}
                selectedId="home"
                fixed={false}
            />
        );
    },
};

export const CustomItems: StoryObj<Component> = {
    render: () => {
        const navbarRef = useRef();
        const [selected, setSelected] = useState("home");
        return (
            <Navbar
                ref={navbarRef}
                items={{
                    desktop: [
                        {
                            id: "home",
                            children: "Home",
                            onClick: () => {
                                setSelected("home");
                            },
                        },
                        {
                            id: "guides",
                            children: "Guides",
                            onClick: () => {
                                setSelected("guides");
                            },
                            subMenu: [
                                {
                                    id: "guides2",
                                    children: "Sub Guides 2",
                                    onClick: () => {
                                        setSelected("guides2");
                                    },
                                },
                                {
                                    id: "guides3",
                                    children: "Sub Guides 3",
                                    onClick: () => {
                                        setSelected("guides3");
                                    },
                                },
                            ],
                        },
                        {
                            itemType: "component",
                            children: (
                                <DesktopCustomComponent
                                    onClick={() => {
                                        console.log("custom component clicked");
                                    }}
                                />
                            ),
                        },
                    ],
                    mobile: [
                        {
                            itemType: "component",
                            children: (
                                <MobileCustomComponent
                                    onClick={() => {
                                        navbarRef.current.dismissDrawer();
                                    }}
                                />
                            ),
                        },
                        {
                            itemType: "link",
                            id: "home",
                            children: "Home",
                            onClick: () => {
                                setSelected("home");
                            },
                        },
                        {
                            id: "guides",
                            children: "Guides",
                            onClick: () => {
                                setSelected("guides");
                            },
                            subMenu: [
                                {
                                    id: "guides2",
                                    children: "Sub Guides 2",
                                    onClick: () => {
                                        setSelected("guides2");
                                    },
                                },
                                {
                                    id: "guides3",
                                    children: "Sub Guides 3",
                                    onClick: () => {
                                        setSelected("guides3");
                                    },
                                },
                            ],
                        },
                    ],
                }}
                actionButtons={{
                    desktop: [
                        {
                            type: "download",
                        },
                    ],
                }}
                selectedId={selected}
                fixed={false}
                layout={"stretch"}
            />
        );
    },
};

export const PreventDrawerDismissal: StoryObj<Component> = {
    render: () => {
        return (
            <Navbar
                items={{
                    desktop: [
                        {
                            id: "home",
                            children: "Home",
                            href: "https://www.life.gov.sg",
                            target: "_blank",
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
                    ],
                }}
                actionButtons={{
                    desktop: [
                        {
                            type: "download",
                        },
                    ],
                }}
                selectedId="home"
                fixed={false}
                blockDrawerDismissalMethods={["brand-click"]}
            />
        );
    },
};

export const SubMenu: StoryObj<Component> = {
    render: () => {
        const [selected, setSelected] = useState("lifesg1");
        return (
            <Navbar
                items={{
                    desktop: [
                        {
                            id: "home",
                            children: "Home",
                        },
                        {
                            id: "guides",
                            children: "Guides",
                            subMenu: [
                                {
                                    id: "guides1",
                                    children:
                                        "Sub Guides 1 Sub Guides 1 Sub Guides 1 Sub Guides 1 Sub Guides 1 Sub Guides 1 Sub Guides 1 Sub Guides 1 Sub Guides 1 Sub Guides 1 Sub Guides 1 Sub Guides 1 Sub Guides 1 Sub Guides 1 Sub Guides 1 Sub Guides 1",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides2",
                                    children: "Sub Guides 2",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides3",
                                    children: "Sub Guides 3",
                                    href: "https://www.life.gov.sg",
                                },
                            ],
                        },
                        {
                            id: "lifesg-app",
                            children: "LifeSG app",
                            subMenu: [
                                {
                                    id: "lifesg1",
                                    children: "Sub LifeSG 1",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "lifesg2",
                                    children: "Sub LifeSG 2",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "lifesg3",
                                    children: "Sub LifeSG 3",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "lifesg4",
                                    children: "Sub LifeSG 4",
                                    href: "https://www.life.gov.sg",
                                },
                            ],
                        },
                    ],
                }}
                actionButtons={{
                    desktop: [
                        {
                            type: "button",
                            args: {
                                styleType: "link",
                                children: "FAQ",
                            },
                        },
                        {
                            type: "button",
                            args: {
                                styleType: "secondary",
                                children: "Logout",
                            },
                        },
                        {
                            type: "download",
                        },
                    ],
                }}
                selectedId={selected}
                fixed={false}
                onItemClick={(item) => {
                    setSelected(item.id);
                }}
            />
        );
    },
};

export const SecondaryBranding: StoryObj<Component> = {
    render: () => {
        return (
            <Navbar
                items={{
                    desktop: [
                        {
                            id: "home",
                            children: "Home",
                            onClick: () => {
                                setSelected("home");
                            },
                        },
                        {
                            id: "guides",
                            children: "Guides",
                            onClick: () => {
                                setSelected("guides");
                            },
                        },
                        {
                            id: "lifesg-app",
                            children: "LifeSG app",
                            onClick: () => {
                                setSelected("lifesg-app");
                            },
                        },
                    ],
                }}
                actionButtons={{
                    desktop: [
                        {
                            type: "download",
                        },
                    ],
                }}
                fixed={false}
                resources={{
                    secondary: {
                        brandName: "OneService",
                        logoSrc:
                            "https://www.life.gov.sg/img/one-service/os-logo.png",
                    },
                }}
                onBrandClick={(type) => {
                    alert("Clicked on " + type + " brand");
                }}
            />
        );
    },
};

export const HiddenMasthead: StoryObj<Component> = {
    render: () => {
        return (
            <Navbar
                items={{
                    desktop: [
                        {
                            id: "home",
                            children: "Home",
                            onClick: () => {
                                setSelected("home");
                            },
                        },
                        {
                            id: "guides",
                            children: "Guides",
                            onClick: () => {
                                setSelected("guides");
                            },
                        },
                        {
                            id: "lifesg-app",
                            children: "LifeSG app",
                            onClick: () => {
                                setSelected("lifesg-app");
                            },
                        },
                    ],
                }}
                actionButtons={{
                    desktop: [
                        {
                            type: "button",
                            args: {
                                styleType: "link",
                                children: "FAQ",
                            },
                        },
                        {
                            type: "button",
                            args: {
                                styleType: "secondary",
                                children: "Logout",
                            },
                        },
                        {
                            type: "download",
                        },
                    ],
                }}
                fixed={false}
                masthead={false}
            />
        );
    },
};

export const StretchedLayout: StoryObj<Component> = {
    render: () => {
        return (
            <Navbar
                items={{
                    desktop: [
                        {
                            id: "home",
                            children: "Home",
                            onClick: () => {
                                setSelected("home");
                            },
                        },
                        {
                            id: "guides",
                            children: "Guides",
                            onClick: () => {
                                setSelected("guides");
                            },
                        },
                        {
                            id: "lifesg-app",
                            children: "LifeSG app",
                            onClick: () => {
                                setSelected("lifesg-app");
                            },
                        },
                    ],
                }}
                actionButtons={{
                    desktop: [
                        {
                            type: "button",
                            args: {
                                styleType: "link",
                                children: "FAQ",
                            },
                        },
                        {
                            type: "button",
                            args: {
                                styleType: "secondary",
                                children: "Logout",
                            },
                        },
                        {
                            type: "download",
                        },
                    ],
                }}
                fixed={false}
                layout={"stretch"}
            />
        );
    },
};

export const HiddenBranding: StoryObj<Component> = {
    render: () => {
        return (
            <Navbar
                items={{
                    desktop: [
                        {
                            id: "home",
                            children: "Home",
                        },
                        {
                            id: "guides",
                            children: "Guides",
                        },
                        {
                            id: "lifesg-app",
                            children: "LifeSG app",
                        },
                    ],
                }}
                actionButtons={{
                    desktop: [
                        {
                            type: "button",
                            args: {
                                styleType: "secondary",
                                children: "Logout",
                            },
                        },
                    ],
                }}
                selectedId="home"
                fixed={false}
                hideNavBranding
            />
        );
    },
};
