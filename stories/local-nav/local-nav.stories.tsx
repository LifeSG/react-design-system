import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { LocalNavDropdown, LocalNavMenu } from "src/local-nav";
import { MediaWidths } from "src/media";
import { Content, Page } from "./doc-elements";

type MenuComponent = typeof LocalNavMenu;
type DropdownComponent = typeof LocalNavDropdown;

const meta: Meta = {
    title: "Modules/LocalNav",
};

export default meta;

const NAV_ITEMS = [
    "Title 1",
    "Title 2",
    "Title lorem ipsum dolor sit amet consectetur adipiscing elit",
];

export const Menu: StoryObj<MenuComponent> = {
    render: () => {
        const [selectedLabel, setSelectedLabel] = useState("initial");

        const handleNavItemClick = (index: number) => {
            const section = NAV_ITEMS[index];
            if (section) {
                setSelectedLabel(section);
            }
        };
        return (
            <LocalNavMenu
                titleList={NAV_ITEMS}
                visibleSectionIndex={NAV_ITEMS.indexOf(selectedLabel)}
                onNavItemClickCb={(index) => () => handleNavItemClick(index)}
            />
        );
    },
};

export const Dropdown: StoryObj<DropdownComponent> = {
    render: () => {
        const [selectedLabel, setSelectedLabel] = useState(0);
        const handleNavItemClick = (index: number) => {
            const section = NAV_ITEMS[index];
            if (section) {
                setSelectedLabel(index);
            }
        };
        return (
            <div style={{ height: "200vh", padding: "1rem" }}>
                <Content />
                <LocalNavDropdown
                    defaultLabelText={"initial"}
                    titleList={NAV_ITEMS}
                    stickyOffset={0}
                    visibleSectionIndex={selectedLabel}
                    onNavItemClickCb={(index) => () =>
                        handleNavItemClick(index)}
                />
                <Content />
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

        const selectedIndex = NAV_ITEMS.indexOf(selectedLabel);

        const handleNavItemClick = (index: number) => {
            const section = NAV_ITEMS[index];
            if (section) {
                setSelectedLabel(section);
            }
        };

        return (
            <Page>
                {!isMobile && (
                    <LocalNavMenu
                        titleList={NAV_ITEMS}
                        visibleSectionIndex={selectedIndex}
                        onNavItemClickCb={(index) => () =>
                            handleNavItemClick(index)}
                    />
                )}
                <main>
                    {isMobile && (
                        <LocalNavDropdown
                            defaultLabelText={selectedLabel}
                            titleList={NAV_ITEMS}
                            stickyOffset={0}
                            visibleSectionIndex={selectedIndex}
                            onNavItemClickCb={(index) => () =>
                                handleNavItemClick(index)}
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
