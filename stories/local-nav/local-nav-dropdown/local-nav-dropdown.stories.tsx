import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { LocalNavDropdown } from "../../../src/local-nav/local-nav-dropdown/LocalNavDropdown";

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
            <>
                <LocalNavDropdown
                    defaultLabelText={selectedLabel}
                    titleList={sections}
                    stickyOffset={40}
                    visibleSectionIndex={0}
                    onNavItemClickCb={(index) => () =>
                        handleNavItemClick(index)}
                />
            </>
        );
    },
};
