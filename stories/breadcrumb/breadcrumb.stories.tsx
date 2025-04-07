import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "src/breadcrumb";
import { FullWidthStoryDecorator } from "stories/storybook-common";

type Component = typeof Breadcrumb;

const meta: Meta<Component> = {
    title: "Navigation/Breadcrumb",
    component: Breadcrumb,
    parameters: {
        layout: "fullscreen",
    },
    decorators: [FullWidthStoryDecorator()],
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Breadcrumb
                links={[
                    {
                        children: "Home",
                        href: "https://life.gov.sg",
                        target: "_blank",
                        rel: "noreferrer",
                    },
                    {
                        children: "Breadcrumb without url",
                    },
                    {
                        children: "Normal breadcrumb",
                        href: "https://life.gov.sg",
                        target: "_blank",
                        rel: "noreferrer",
                    },
                    {
                        children: "Breadcrumb with a callback function",
                        href: "https://life.gov.sg",
                        onClick: (event) => {
                            event.preventDefault();
                            alert("I got clicked");
                        },
                    },
                    {
                        children: "Last breadcrumb (unclickable)",
                        href: "https://www.google.com", // Unclickable even if you pass a url
                    },
                ]}
            />
        );
    },
};

export const DifferentFadeColors: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Breadcrumb
                links={[
                    {
                        children: "Home",
                        href: "https://life.gov.sg",
                        target: "_blank",
                        rel: "noreferrer",
                    },
                    {
                        children: "Breadcrumb without url",
                    },
                    {
                        children: "Normal breadcrumb",
                        href: "https://life.gov.sg",
                        target: "_blank",
                        rel: "noreferrer",
                    },
                    {
                        children: "Breadcrumb with a callback function",
                        href: "https://life.gov.sg",
                        onClick: (event) => {
                            event.preventDefault();
                            alert("I got clicked");
                        },
                    },
                    {
                        children: "Last breadcrumb (unclickable)",
                        href: "https://www.google.com", // Unclickable even if you pass a url
                    },
                ]}
                fadeColor={{
                    left: ["red", "orange"],
                    right: ["blue", "green"],
                }}
            />
        );
    },
};
