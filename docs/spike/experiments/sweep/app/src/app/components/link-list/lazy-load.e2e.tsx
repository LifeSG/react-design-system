"use client";
import { LinkList } from "@lifesg/react-design-system/link-list";
import { useState } from "react";

const INITIAL_ITEMS = [
    { title: "Item 1", href: "#" },
    { title: "Item 2", href: "#" },
    { title: "Item 3", href: "#" },
];

const MORE_ITEMS = [
    { title: "Item 4", href: "#" },
    { title: "Item 5", href: "#" },
];

export default function Story() {
    const [items, setItems] = useState(INITIAL_ITEMS);
    const [loadMore, setLoadMore] = useState(true);

    const handleLoadMore = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setItems(() => [...INITIAL_ITEMS, ...MORE_ITEMS]);
        setLoadMore(false);
    };

    return (
        <div className="story-column-container story-background">
            <LinkList
                data-testid="link-list"
                loadMode="lazy"
                items={items}
                loadMore={loadMore}
                onLoadMore={handleLoadMore}
            />
        </div>
    );
}
