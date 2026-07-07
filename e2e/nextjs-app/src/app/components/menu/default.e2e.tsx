"use client";

import { Menu } from "@lifesg/react-design-system/menu";
import { Button } from "@lifesg/react-design-system";

const menuContent = (
    <Menu.Content>
        <Menu.Section showDivider={false} data-testid="menu-section-profile">
            <Menu.Item
                data-testid="menu-item-profile"
                label="Jane Doe"
                subLabel="jane.doe@example.gov.sg"
            />
        </Menu.Section>

        <Menu.Section label="Actions" data-testid="menu-section-actions">
            <Menu.Item data-testid="menu-item-settings">Settings</Menu.Item>
            <Menu.Link data-testid="menu-link-first" href="#first-link">
                First link
            </Menu.Link>
            <Menu.Link data-testid="menu-link-second" href="#second-link">
                Second link
            </Menu.Link>
            <Menu.Link data-testid="menu-link-third" href="#third-link">
                Third link
            </Menu.Link>
        </Menu.Section>

        <Menu.Section label="Resources" data-testid="menu-section-resources">
            <Menu.Link data-testid="menu-link-long" href="#long-link">
                This is a long menu link title that should clamp across lines
                when the menu has limited width
            </Menu.Link>
        </Menu.Section>
    </Menu.Content>
);

export default function Story() {
    return (
        <div className="story-column-container">
            <div>
                <Menu menuContent={menuContent}>
                    <Button data-testid="menu-trigger-default">
                        Open menu
                    </Button>
                </Menu>
            </div>
        </div>
    );
}
