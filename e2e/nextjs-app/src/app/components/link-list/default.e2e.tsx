"use client";
import { LinkList } from "@lifesg/react-design-system/link-list";

export default function Story() {
    return (
        <div className="story-column-container story-background">
            <LinkList
                data-testid="link-list-title-only"
                items={[
                    { title: "Title only item", href: "#" },
                    {
                        title: "Item with description",
                        description: "Description for item",
                        href: "#",
                    },
                    {
                        title: "Item with secondary description",
                        description: "Description for item",
                        secondaryDescription: (
                            <span>Secondary description</span>
                        ),
                        href: "#",
                    },
                ]}
            />
        </div>
    );
}
