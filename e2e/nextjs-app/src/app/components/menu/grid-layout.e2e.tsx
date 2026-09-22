"use client";

import { Menu } from "@lifesg/react-design-system/menu";

export default function Story() {
    return (
        <div className="story-column-container">
            <Menu.Content>
                <Menu.Section
                    showDivider={false}
                    gridLayout={{ columns: 2, rows: 3 }}
                >
                    <Menu.Link href="#link-1">Link 1</Menu.Link>
                    <Menu.Link href="#link-2">Link 2</Menu.Link>
                    <Menu.Link href="#link-3">Link 3</Menu.Link>
                    <Menu.Link href="#link-4">Link 4</Menu.Link>
                    <Menu.Link href="#link-5">Link 5</Menu.Link>
                    <Menu.Link href="#link-6">Link 6</Menu.Link>
                    <Menu.Link href="#link-7">Link 7</Menu.Link>
                    <Menu.Link href="#link-8">Link 8</Menu.Link>
                </Menu.Section>
            </Menu.Content>
        </div>
    );
}
