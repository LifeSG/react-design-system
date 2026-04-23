"use client";

import { Button } from "@lifesg/react-design-system/button";
import { Menu } from "@lifesg/react-design-system/menu";
import type { PopoverV2Position } from "@lifesg/react-design-system/popover-v2";
import styles from "./menu.module.css";

type PlacementEntry = {
    key: string;
    label: string;
    position: PopoverV2Position;
};

const placements: PlacementEntry[] = [
    { key: "bottom", label: "Bottom", position: "bottom" },
    { key: "left", label: "Left", position: "left" },
    { key: "right", label: "Right", position: "right" },
    { key: "top", label: "Top", position: "top" },
    { key: "bottom-start", label: "Bottom start", position: "bottom-start" },
    { key: "bottom-end", label: "Bottom end", position: "bottom-end" },
];

const getMenuContent = (key: string) => (
    <Menu.Content data-testid={`menu-content-${key}`}>
        <Menu.Section showDivider={false}>
            <Menu.Link href={`#${key}`}>{`${key} link`}</Menu.Link>
        </Menu.Section>
    </Menu.Content>
);

export default function Story() {
    return (
        <div className="story-column-container">
            <div>
                {placements.map(({ key, label, position }) => (
                    <div className={styles["placement-item"]} key={key}>
                        <Menu
                            position={position}
                            menuContent={getMenuContent(key)}
                        >
                            <Button data-testid={`menu-trigger-${key}`}>
                                {label}
                            </Button>
                        </Menu>
                    </div>
                ))}
            </div>
        </div>
    );
}
