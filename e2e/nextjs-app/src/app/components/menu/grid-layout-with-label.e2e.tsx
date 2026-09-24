"use client";

import { Menu } from "@lifesg/react-design-system/menu";

export default function Story() {
    return (
        <div className="story-column-container">
            <Menu.Content data-testid="menu-content">
                <Menu.Section
                    showDivider={false}
                    columns={2}
                    label="Category"
                    data-testid="menu-section"
                >
                    {Array.from({ length: 6 }, (_, i) => (
                        <Menu.Link key={i} href={`#link-${i + 1}`}>
                            Link {i + 1}
                        </Menu.Link>
                    ))}
                </Menu.Section>
            </Menu.Content>
        </div>
    );
}
