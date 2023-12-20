import type { Meta, StoryObj } from "@storybook/react";
import { LinkList } from "src/link-list";
import { StoryContainer } from "../storybook-common";

type Component = typeof LinkList;

const meta: Meta<Component> = {
    title: "Modules/LinkList",
    component: LinkList,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
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
                <br />
                <br />
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
            </StoryContainer>
        );
    },
};

export const MinimizedList: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
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
            </StoryContainer>
        );
    },
};
