"use client";

import { Menu } from "@lifesg/react-design-system/menu";

export default function Story() {
    return (
        <div className="story-column-container">
            <Menu.Content maxHeight={160} overflow="auto">
                <Menu.Section showDivider={false} label="Overflow list">
                    <Menu.Link href="#item-1">Overflow item 1</Menu.Link>
                    <Menu.Link href="#item-2">Overflow item 2</Menu.Link>
                    <Menu.Link href="#item-3">Overflow item 3</Menu.Link>
                    <Menu.Link href="#item-4">Overflow item 4</Menu.Link>
                    <Menu.Link href="#item-5">Overflow item 5</Menu.Link>
                    <Menu.Link href="#item-6">Overflow item 6</Menu.Link>
                    <Menu.Link href="#item-7">Overflow item 7</Menu.Link>
                    <Menu.Link href="#item-8">Overflow item 8</Menu.Link>
                    <Menu.Link href="#item-9">Overflow item 9</Menu.Link>
                    <Menu.Link href="#item-10">Overflow item 10</Menu.Link>
                </Menu.Section>
            </Menu.Content>
        </div>
    );
}
