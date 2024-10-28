import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { LocalNavDropdown } from "../../../src/local-nav/local-nav-dropdown/LocalNavDropdown";
import { Text } from "src/text";

type Component = typeof LocalNavDropdown;

const meta: Meta<Component> = {
    title: "Modules/LocalNavDropdown",
    component: LocalNavDropdown,
};

export default meta;

const sections = [
    "title 1",
    "title 2",
    "title 3",
    "title 4",
    "title 5",
    "title 6",
    "title 7",
    "title 8",
    "title 9",
];

export const Default: StoryObj<Component> = {
    render: () => {
        const [selectedLabel, setSelectedLabel] = useState("initial");
        const handleNavItemClick = (index: number) => {
            const section = sections[index];
            if (section) {
                setSelectedLabel(section);
            }
        };
        return (
            <div style={{ height: "200vh" }}>
                <Text.H1>My content</Text.H1>
                <div>sample 1</div>
                <div>sample 2</div>
                <div>sample 3</div>
                <div>sample 4</div>

                <LocalNavDropdown
                    defaultLabelText={selectedLabel}
                    titleList={sections}
                    stickyOffset={0}
                    visibleSectionIndex={0}
                    onNavItemClickCb={(index) => () =>
                        handleNavItemClick(index)}
                />
            </div>
        );
    },
    parameters: {
        layout: "fullscreen",
        docs: { story: { inline: false, iframeHeight: 500 } },
    },
};
