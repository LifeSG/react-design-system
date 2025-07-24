import type { Meta, StoryObj } from "@storybook/react";
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

export const LazyList: StoryObj<Component> = {
    render: (_args) => {
        const [items, setItems] = useState([
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
        ]);

        return (
            <LinkList
                loadMode="lazy"
                loadMore={items.length !== 10}
                onLoadMore={() => {
                    setItems((prev) => [
                        ...prev,
                        {
                            title: "more things",
                            description: "this was added by handleLoadMore",
                            href: "https://www.life.gov.sg",
                            target: "_blank",
                        },
                        {
                            title: "even more things",
                            description:
                                "example will start repeating. list stops at 10",
                            href: "https://www.life.gov.sg",
                            target: "_blank",
                        },
                    ]);
                }}
                items={items}
            />
        );
    },
};

export const CustomLabel: StoryObj<Component> = {
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
                customLabel={{
                    viewMore: "Custom view more label",
                    viewLess: "Custom view less label",
                }}
            />
        );
    },
};
