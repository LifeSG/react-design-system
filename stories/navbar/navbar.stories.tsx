import { GearIcon } from "@lifesg/react-icons/gear";
import { InboxIcon } from "@lifesg/react-icons/inbox";
import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useRef, useState } from "react";
import { Button } from "src/button";
import type {
    NavbarButtonProps,
    NavbarDrawerHandle,
    NavItemLinkProps,
    NavItemProps,
} from "src/navbar";
import { Navbar } from "src/navbar";
import { FullWidthStoryDecorator } from "stories/storybook-common";

import {
    DesktopCustomComponent,
    MobileCustomComponent,
    NavbarAvatar,
} from "./doc-elements";

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
                selectedId="icon"
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
                                    <Button
                                        icon={
                                            <GearIcon
                                                style={{
                                                    width: "1.25rem",
                                                    height: "1.25rem",
                                                }}
                                            />
                                        }
                                        aria-label="Settings"
                                    />
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
                            id: "icon",
                            children: (
                                <MagnifierIcon
                                    height={24}
                                    width={24}
                                    aria-label="Search"
                                />
                            ),
                            href: "",
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
                                    id: "guides-item-3",
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

export const SubMenuGrid: StoryObj<Component> = {
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
                            subMenuGridLayout: { columns: 2, rows: 6 },
                            subMenu: [
                                {
                                    id: "guides-item-1",
                                    children:
                                        "Veryverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglongtext",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-2",
                                    children: "Lorem ipsum dolor sit amet",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-3",
                                    children: "Lorem ipsum",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-4",
                                    children:
                                        "Sed do eiusmod tempor incididunt ut labore et dolore",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-5",
                                    children:
                                        "Ut enim ad minim veniam quis nostrud",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-6",
                                    children:
                                        "Duis aute irure dolor in reprehenderit",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-7",
                                    children:
                                        "Excepteur sint occaecat cupidatat non proident",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-8",
                                    children:
                                        "Sunt in culpa qui officia deserunt mollit",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-9",
                                    children:
                                        "Sed ut perspiciatis unde omnis iste natus",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-10",
                                    children:
                                        "Nemo enim ipsam voluptatem quia voluptas",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-11",
                                    children:
                                        "Neque porro quisquam est qui dolorem",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-12",
                                    children:
                                        "Ut enim ad minima veniam quis nostrum",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-13",
                                    children:
                                        "Quis autem vel eum iure reprehenderit",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-14",
                                    children:
                                        "At vero eos et accusamus et iusto odio",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-15",
                                    children:
                                        "Dignissimos ducimus qui blanditiis praesentium",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-16",
                                    children:
                                        "Temporibus autem quibusdam et aut officiis",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-17",
                                    children:
                                        "Itaque earum rerum hic tenetur a sapiente",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-18",
                                    children:
                                        "Nam libero tempore cum soluta nobis est",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-19",
                                    children:
                                        "Omnis dolor repellendus temporibus autem",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-20",
                                    children:
                                        "Debitis aut rerum necessitatibus saepe",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-21",
                                    children:
                                        "Et harum quidem rerum facilis est et expedita",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-22",
                                    children:
                                        "Distinctio nam libero tempore cum soluta",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-23",
                                    children:
                                        "Eligendi optio cumque nihil impedit quo",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-24",
                                    children:
                                        "Minus id quod maxime placeat facere possimus",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-25",
                                    children:
                                        "Omnis voluptas assumenda est omnis dolor",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-26",
                                    children:
                                        "Repellendus temporibus autem quibusdam et aut",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-27",
                                    children:
                                        "Officiis debitis aut rerum necessitatibus",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-28",
                                    children:
                                        "Saepe eveniet ut et voluptates repudiandae",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-29",
                                    children:
                                        "Sint et molestiae non recusandae itaque",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-30",
                                    children:
                                        "Earum rerum hic tenetur a sapiente delectus",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-31",
                                    children:
                                        "Ut aut reiciendis voluptatibus maiores alias",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-32",
                                    children:
                                        "Consequatur aut perferendis doloribus asperiores",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-33",
                                    children:
                                        "Repeat lorem ipsum dolor sit amet",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-34",
                                    children:
                                        "Consectetur adipiscing elit pellentesque",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "guides-item-35",
                                    children:
                                        "Habitant morbi tristique senectus et netus",
                                    href: "https://www.life.gov.sg",
                                },
                            ],
                        },
                        {
                            id: "lifesg-app",
                            children: "LifeSG app",
                            subMenuGridLayout: { columns: 3, rows: 2 },
                            subMenu: [
                                {
                                    id: "app-item-1",
                                    children: "About the app",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "app-item-2",
                                    children: "Features & benefits",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "app-item-3",
                                    children: "User guides",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "app-item-4",
                                    children: "Frequently asked questions",
                                    href: "https://www.life.gov.sg",
                                },
                                {
                                    id: "app-item-5",
                                    children: "Contact support",
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

export const HiddenLinkIndicator: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Navbar
                items={{ desktop: navItems }}
                selectedId="home"
                fixed={false}
                hideLinkIndicator
            />
        );
    },
};

const _WithAvatar = (
    <Navbar
        items={{ desktop: navItems }}
        selectedId="home"
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
                    type: "download",
                },
                {
                    type: "component",
                    args: {
                        render: <NavbarAvatar />,
                    },
                    uncollapsible: true,
                },
            ],
        }}
        fixed={false}
    />
);

export const WithAvatar: StoryObj<Component> = {
    render: (_args) => {
        return _WithAvatar;
    },
};
