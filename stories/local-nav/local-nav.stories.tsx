import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
    LocalNavDropdown,
    LocalNavItemProps,
    LocalNavMenu,
} from "src/local-nav";
import { V2_MediaWidths } from "src/v2_media";
import { Content, Page, TopContent } from "./doc-elements";

type MenuComponent = typeof LocalNavMenu;
type DropdownComponent = typeof LocalNavDropdown;

const meta: Meta = {
    title: "Modules/LocalNav",
};

export default meta;

const NAV_ITEMS = [
    { title: "Title 1" },
    { title: "Title 2" },
    { title: "Title 3" },
];

export const Menu: StoryObj<MenuComponent> = {
    render: () => {
        const [selectedIndex, setSelectedIndex] = useState(-1);

        const handleNavItemClick = (
            e: React.MouseEvent,
            item: LocalNavItemProps,
            index: number
        ) => {
            setSelectedIndex(index);
        };

        return (
            <LocalNavMenu
                items={NAV_ITEMS}
                selectedItemIndex={selectedIndex}
                onNavItemSelect={(e, item, index) =>
                    handleNavItemClick(e, item, index)
                }
            />
        );
    },
};

export const MenuWithCustomTitle: StoryObj<MenuComponent> = {
    render: () => {
        const [selectedIndex, setSelectedIndex] = useState(-1);

        const handleNavItemClick = (
            e: React.MouseEvent,
            item: LocalNavItemProps,
            index: number
        ) => {
            setSelectedIndex(index);
        };

        return (
            <LocalNavMenu
                items={NAV_ITEMS}
                selectedItemIndex={selectedIndex}
                onNavItemSelect={(e, item, index) =>
                    handleNavItemClick(e, item, index)
                }
                renderItem={(item, { selected }) => (
                    <div
                        style={{
                            padding: "8px 16px",
                            fontWeight: selected ? "bold" : "normal",
                            color: selected ? "red" : "green",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {selected && (
                            <span style={{ marginRight: "8px" }}>✔</span>
                        )}
                        {item.title}
                    </div>
                )}
            />
        );
    },
};

export const Dropdown: StoryObj<DropdownComponent> = {
    render: () => {
        const [selectedIndex, setSelectedIndex] = useState(-1);
        const contentRef = useRef<HTMLDivElement>(null);

        const handleNavItemClick = (
            e: React.MouseEvent,
            item: LocalNavItemProps,
            index: number
        ) => {
            setSelectedIndex(index);

            // Scroll to the selected section
            const section = NAV_ITEMS[index];
            if (section) {
                const element = contentRef.current?.children[index];
                if (element) {
                    const top =
                        element.getBoundingClientRect().top +
                        window.scrollY -
                        200;
                    window.scrollTo({ top, behavior: "smooth" });
                }
            }
        };

        return (
            <div style={{ height: "200vh", padding: "2rem" }}>
                <TopContent />
                <LocalNavDropdown
                    defaultLabel={"Initial"}
                    items={NAV_ITEMS}
                    stickyOffset={0}
                    selectedItemIndex={selectedIndex}
                    onNavItemSelect={(e, item, index) =>
                        handleNavItemClick(e, item, index)
                    }
                />
                <div style={{ padding: "1rem" }} ref={contentRef}>
                    <Content />
                </div>
            </div>
        );
    },
    parameters: {
        layout: "fullscreen",
        docs: { story: { inline: false, iframeHeight: 500 } },
    },
};

export const DropdownWithCustomTitle: StoryObj<DropdownComponent> = {
    render: () => {
        const [selectedIndex, setSelectedIndex] = useState(-1);

        const handleNavItemClick = (
            e: React.MouseEvent,
            item: LocalNavItemProps,
            index: number
        ) => {
            setSelectedIndex(index);
        };

        return (
            <div>
                <TopContent />
                <LocalNavDropdown
                    defaultLabel="Initial"
                    items={NAV_ITEMS}
                    stickyOffset={0}
                    selectedItemIndex={selectedIndex}
                    onNavItemSelect={handleNavItemClick}
                    renderItem={(item, { selected }) => (
                        <div
                            style={{
                                padding: "8px 16px",
                                fontWeight: selected ? "bold" : "normal",
                                color: selected ? "red" : "green",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            {selected && (
                                <span style={{ marginRight: "8px" }}>✔</span>
                            )}
                            {item.title}
                        </div>
                    )}
                />
            </div>
        );
    },
};

export const CombinedUsage: StoryObj = {
    render: () => {
        const [selectedIndex, setSelectedIndex] = useState(undefined);
        const isMobile = useMediaQuery({
            maxWidth: V2_MediaWidths.mobileL,
        });

        const handleNavItemClick = (
            e: React.MouseEvent,
            item: LocalNavItemProps,
            index: number
        ) => {
            setSelectedIndex(index);
        };

        return (
            <Page>
                {!isMobile && (
                    <LocalNavMenu
                        items={NAV_ITEMS}
                        selectedItemIndex={selectedIndex}
                        onNavItemSelect={(e, item, index) =>
                            handleNavItemClick(e, item, index)
                        }
                    />
                )}
                <main>
                    {isMobile && (
                        <LocalNavDropdown
                            defaultLabel="Initial"
                            items={NAV_ITEMS}
                            stickyOffset={0}
                            selectedItemIndex={selectedIndex}
                            onNavItemSelect={(e, item, index) =>
                                handleNavItemClick(e, item, index)
                            }
                        />
                    )}
                    <TopContent />
                    <Content />
                </main>
            </Page>
        );
    },
    parameters: {
        layout: "fullscreen",
        docs: { story: { inline: false, iframeHeight: 500 } },
    },
};
