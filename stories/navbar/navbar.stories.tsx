import { GearIcon } from "@lifesg/react-icons/gear";
import { InboxIcon } from "@lifesg/react-icons/inbox";
import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { IconButton } from "src/icon-button";
import {
    NavItemLinkProps,
    NavItemProps,
    Navbar,
    NavbarButtonProps,
    NavbarDrawerHandle,
} from "src/navbar";
import { FullWidthStoryDecorator } from "stories/storybook-common";
import { DesktopCustomComponent, MobileCustomComponent } from "./doc-elements";

type Component = typeof Navbar;

const meta: Meta<Component> = {
    title: "Navigation/Navbar",
    component: Navbar,
    decorators: [FullWidthStoryDecorator({})],
    parameters: { layout: "fullscreen" },
};

export default meta;

const navItems: NavItemProps<undefined>[] = [
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
];

const actionButtons: NavbarButtonProps[] = [{ type: "download" }];

export const Default: StoryObj<Component> = {
    render: (_args) => {
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
    render: (_args) => {
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
    render: (_args) => {
        return (
            <Navbar
                items={{ desktop: navItems }}
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
    parameters: { docs: { source: { type: "code" } } }, // prevent Storybook from freezing
    render: (_args) => {
        return (
            <Navbar
                items={{ desktop: navItems }}
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
    parameters: { docs: { source: { type: "code" } } }, // prevent Storybook from freezing
    render: (_args) => {
        return (
            <Navbar
                items={{ desktop: navItems }}
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
    parameters: { docs: { source: { type: "code" } } },
    render: (_args) => {
        const navbarRef = useRef<NavbarDrawerHandle>(null);
        return (
            <Navbar
                ref={navbarRef}
                items={{
                    desktop: [
                        {
                            id: "home",
                            children: "Home",
                        },
                        {
                            itemType: "component",
                            children: <DesktopCustomComponent />,
                        },
                    ],
                    mobile: [
                        {
                            itemType: "component",
                            children: (
                                <MobileCustomComponent
                                    onClick={() => {
                                        navbarRef.current?.dismissDrawer();
                                    }}
                                />
                            ),
                        },
                        {
                            id: "home",
                            children: "Home",
                        },
                    ],
                }}
                actionButtons={{ desktop: actionButtons }}
                fixed={false}
            />
        );
    },
};

export const PreventDrawerDismissal: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Navbar
                items={{ desktop: navItems }}
                actionButtons={{ desktop: actionButtons }}
                selectedId="home"
                fixed={false}
                drawerDismissalExclusions={["brand-click"]}
            />
        );
    },
};

export const SubMenu: StoryObj<Component> = {
    render: (_args) => {
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
                                    id: "guides-item-1",
                                    children:
                                        "Lorem ipsum dolor sit amet consectetur adipiscing elit",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-2",
                                    children: "Lorem ipsum dolor sit amet",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-2",
                                    children: "Lorem ipsum",
                                    href: "https://www.life.gov.sg",
                                },
                            ],
                        },
                        {
                            id: "lifesg-app",
                            children: "LifeSG app",
                            subMenu: [
                                {
                                    id: "app-item-1",
                                    children: "About the app",
                                    href: "https://www.life.gov.sg",
                                },
                            ],
                        },
                    ],
                }}
                actionButtons={{ desktop: actionButtons }}
                selectedId={selected}
                fixed={false}
                onItemClick={(item) => {
                    setSelected((item as NavItemLinkProps<undefined>).id);
                }}
            />
        );
    },
};

export const SecondaryBranding: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Navbar
                items={{ desktop: navItems }}
                actionButtons={{ desktop: actionButtons }}
                selectedId="home"
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
    render: (_args) => {
        return (
            <Navbar
                items={{ desktop: navItems }}
                selectedId="home"
                fixed={false}
                masthead={false}
            />
        );
    },
};

export const StretchedLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Navbar
                items={{ desktop: navItems }}
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
                selectedId="home"
                fixed={false}
                layout={"stretch"}
            />
        );
    },
};

export const HiddenBranding: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Navbar
                items={{ desktop: navItems }}
                selectedId="home"
                fixed={false}
                hideNavBranding
            />
        );
    },
};
