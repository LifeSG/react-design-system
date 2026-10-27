"use client";
import { LinkList } from "@lifesg/react-design-system/link-list";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <LinkList
                data-testid="link-list"
                maxShown={3}
                items={[
                    { title: "Item 1", href: "#" },
                    { title: "Item 2", href: "#" },
                    { title: "Item 3", href: "#" },
                    { title: "Item 4 (hidden)", href: "#" },
                    { title: "Item 5 (hidden)", href: "#" },
                ]}
            />
        </div>
    );
}
