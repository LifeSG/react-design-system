import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { LocalNavMenu } from "../../../src/local-nav/local-nav-menu/local-nav-menu";

type Component = typeof LocalNavMenu;

const meta: Meta<Component> = {
    title: "Modules/LocalNavMenu",
    component: LocalNavMenu,
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
                <LocalNavMenu
                    titleList={sections}
                    selectedItemIndex={sections.indexOf(selectedLabel)}
                    onNavItemSelect={(index) => () => handleNavItemClick(index)}
                />
            </>
        );
    },
};
