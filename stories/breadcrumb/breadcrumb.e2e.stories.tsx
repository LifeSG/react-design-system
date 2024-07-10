import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "src/breadcrumb";

type Component = typeof Breadcrumb;

const meta: Meta = {
    title: "e2e-Breadcrumb",
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div style={{ margin: "1rem", width: "500px", maxWidth: "90vw" }}>
                <Story />
            </div>
        ),
    ],
    tags: ["e2e"],
};

export default meta;

export const ShortBreadcrumb: StoryObj<Component> = {
    render: () => {
        return (
            <Breadcrumb
                data-testid="e2e"
                links={[
                    { children: "Link", href: "https://life.gov.sg" },
                    { children: "No Link" },
                    { children: "Last", href: "https://life.gov.sg" },
                ]}
                fadeColor={{
                    left: ["red", "orange"],
                    right: ["blue", "green"],
                }}
            />
        );
    },
};

export const LongBreadcrumb: StoryObj<Component> = {
    render: () => {
        return (
            <Breadcrumb
                data-testid="e2e"
                links={[
                    { children: "Link", href: "https://life.gov.sg" },
                    { children: "No Link" },
                    {
                        children: "Lorem ipsum dolor sit amet",
                        href: "https://life.gov.sg",
                    },
                    {
                        children: "Lorem ipsum dolor sit amet",
                    },
                    { children: "Last", href: "https://life.gov.sg" },
                ]}
                fadeColor={{
                    left: ["red", "orange"],
                    right: ["blue", "green"],
                }}
            />
        );
    },
};
