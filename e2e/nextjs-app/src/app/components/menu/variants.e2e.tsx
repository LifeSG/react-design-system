"use client";

import { Menu } from "@lifesg/react-design-system/menu";

export default function Story() {
    return (
        <div className="story-column-container">
            <Menu.Content>
                <Menu.Section
                    showDivider={false}
                    data-testid="menu-section-profile"
                >
                    <Menu.Item
                        data-testid="menu-item-profile"
                        label="Jane Doe"
                        subLabel="jane.doe@example.gov.sg"
                    />
                </Menu.Section>
                <Menu.Section showDivider={false} label="No divider section">
                    <Menu.Item label="Label only" />
                    <Menu.Item
                        label="Label with sublabel"
                        subLabel="Supporting text"
                    />
                </Menu.Section>

                <Menu.Section showDivider={true}>
                    <Menu.Item label="No label section item" />
                    <Menu.Item
                        label="No label section item with sublabel"
                        subLabel="Secondary description"
                    />
                </Menu.Section>
            </Menu.Content>
        </div>
    );
}
