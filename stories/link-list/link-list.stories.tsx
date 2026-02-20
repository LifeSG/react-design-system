import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import { LinkList } from "src/link-list";

type Component = typeof LinkList;

const meta: Meta<Component> = {
    title: "Navigation/LinkList",
    component: LinkList,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <LinkList
                items={[
                    {
                        title: "LinkList with a default sized title",
                        href: "https://www.life.gov.sg",
                        target: "_blank",
                    },
                    {
                        title: "Second item",
                        description: "This is the description",
                        href: "https://www.life.gov.sg",
                        target: "_blank",
                    },
                ]}
            />
        );
    },
};

export const Small: StoryObj<Component> = {
    render: (_args) => {
        return (
            <LinkList
                style="small"
                items={[
                    {
                        title: "LinkList with a smaller sized title",
                        href: "https://www.life.gov.sg",
                        target: "_blank",
                    },
                    {
                        title: "Second item",
                        description: "This is the description",
                        href: "https://www.life.gov.sg",
                        target: "_blank",
                    },
                ]}
            />
        );
    },
};

export const MinimizedList: StoryObj<Component> = {
    render: (_args) => {
        return (
            <LinkList
                style="small"
                maxShown={2}
                items={[
                    {
                        title: "First item",
                        href: "https://www.life.gov.sg",
                        target: "_blank",
                    },
                    {
                        title: "Second item",
                        description: "This is the description",
                        href: "https://www.life.gov.sg",
                        target: "_blank",
                    },
                    {
                        title: "Third item",
                        description: "Lorem ipsum dolar sit amet",
                        href: "https://www.google.com",
                        rel: "noreferrer",
                        target: "_blank",
                    },
                    {
                        title: "Fourth item",
                        description:
                            "Ut enim ad minima veniam, quis nostrum exercitationem",
                        href: "https://www.google.com",
                        target: "_blank",
                        rel: "noreferrer",
                    },
                ]}
            />
        );
    },
};

export const LazyLoadedList: StoryObj<Component> = {
    render: (_args) => {
        const [loadMore, setLoadMore] = useState(true);
        const [items, setItems] = useState([
            {
                title: "Initial item",
                description: "This item is already loaded",
                href: "https://www.life.gov.sg",
                target: "_blank",
            },
            {
                title: "Initial item",
                href: "https://www.life.gov.sg",
                target: "_blank",
            },
        ]);

        const handleLoadMore = async () => {
            await new Promise((r) => setTimeout(r, 1000));

            if (items.length >= 6) {
                setLoadMore(false);
            }
            setItems((prev) => [
                ...prev,
                {
                    title: "Loaded item",
                    description: "This an example of a lazy loaded item",
                    href: "https://www.life.gov.sg",
                    target: "_blank",
                },
                {
                    title: "Loaded item",
                    href: "https://www.life.gov.sg",
                    target: "_blank",
                },
            ]);
        };

        return (
            <LinkList
                loadMode="lazy"
                loadMore={loadMore}
                onLoadMore={handleLoadMore}
                items={items}
            />
        );
    },
};

export const CustomLabel: StoryObj<Component> = {
    render: (_args) => {
        return (
            <LinkList
                maxShown={2}
                items={[
                    {
                        title: "First item",
                        href: "https://www.life.gov.sg",
                        target: "_blank",
                    },
                    {
                        title: "Second item",
                        description: "This is the description",
                        href: "https://www.life.gov.sg",
                        target: "_blank",
                    },
                    {
                        title: "Third item",
                        description: "Lorem ipsum dolar sit amet",
                        href: "https://www.google.com",
                        rel: "noreferrer",
                        target: "_blank",
                    },
                    {
                        title: "Fourth item",
                        description:
                            "Ut enim ad minima veniam, quis nostrum exercitationem",
                        href: "https://www.google.com",
                        target: "_blank",
                        rel: "noreferrer",
                    },
                ]}
                customLabels={{
                    viewMore: "Custom view more label",
                    viewLess: "Custom view less label",
                }}
            />
        );
    },
};
