import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
    LocalNavDropdown,
    LocalNavItemProps,
    LocalNavMenu,
} from "src/local-nav";
import { MediaWidths } from "src/media";
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
        const [selectedLabel, setSelectedLabel] = useState("initial");

        const handleNavItemClick = (
            e: MouseEvent,
            item: LocalNavItemProps,
            index: number
        ) => {
            const section = NAV_ITEMS[index].title;
            if (section) {
                setSelectedLabel(section);
            }
        };

        const selectedIndex = NAV_ITEMS.findIndex(
            (item) => item.title === selectedLabel
        );

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
        const [selectedLabel, setSelectedLabel] = useState("initial");

        const handleNavItemClick = (
            e: MouseEvent,
            item: LocalNavItemProps,
            index: number
        ) => {
            const section = NAV_ITEMS[index].title;
            if (section) {
                setSelectedLabel(section);
            }
        };
        const selectedIndex = NAV_ITEMS.findIndex(
            (item) => item.title === selectedLabel
        );
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

export const DropdownWithCustomTitle: StoryObj<DropdownComponent> = {
    render: () => {
        const [selectedLabel, setSelectedLabel] = useState(-1);
        const contentRef = useRef<HTMLDivElement>(null);
        const handleNavItemClick = (
            e: MouseEvent,
            item: LocalNavItemProps,
            index: number
        ) => {
            const section = NAV_ITEMS[index];
            if (section) {
                setSelectedLabel(index);
                // Scroll to the selected section
                const element = contentRef.current?.children[index];
                if (element) {
                    const top =
                        element.getBoundingClientRect().top +
                        window.scrollY -
                        250;
                    window.scrollTo({ top, behavior: "smooth" });
                }
            }
        };
        return (
            <div style={{ height: "200vh", padding: "1rem" }}>
                <TopContent />
                <LocalNavDropdown
                    defaultLabel="initial"
                    items={NAV_ITEMS}
                    stickyOffset={0}
                    selectedItemIndex={selectedLabel}
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
export const Dropdown: StoryObj<DropdownComponent> = {
    // TODO: scroll the content to the top when a dropdown item is selected.
    render: () => {
        const [selectedLabel, setSelectedLabel] = useState(-1);
        const contentRef = useRef<HTMLDivElement>(null);

        const handleNavItemClick = (
            e: MouseEvent,
            item: LocalNavItemProps,
            index: number
        ) => {
            const section = NAV_ITEMS[index];
            if (section) {
                setSelectedLabel(index);
                // Scroll to the selected section
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
            <div style={{ height: "200vh", padding: "1rem" }}>
                <TopContent />
                <LocalNavDropdown
                    defaultLabel={"initial"}
                    items={NAV_ITEMS}
                    stickyOffset={0}
                    selectedItemIndex={selectedLabel}
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

export const CombinedUsage: StoryObj = {
    render: () => {
        const [selectedLabel, setSelectedLabel] = useState("initial");
        const isMobile = useMediaQuery({
            maxWidth: MediaWidths.mobileL,
        });
        const selectedIndex = NAV_ITEMS.findIndex(
            (item) => item.title === selectedLabel
        );

        const handleNavItemClick = (
            e: MouseEvent,
            item: LocalNavItemProps,
            index: number
        ) => {
            const section = NAV_ITEMS[index].title;
            if (section) {
                setSelectedLabel(section);
            }
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
                            defaultLabel={selectedLabel}
                            items={NAV_ITEMS}
                            stickyOffset={0}
                            selectedItemIndex={selectedIndex}
                            onNavItemSelect={(e, item, index) =>
                                handleNavItemClick(e, item, index)
                            }
                        />
                    )}
                    <Content />
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
