import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "src/breadcrumb";

type Component = typeof Breadcrumb;

const meta: Meta<Component> = {
    title: "Modules/Breadcrumb",
    component: Breadcrumb,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
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
    parameters: {
        layout: "padded",
    },
};

export const DifferentFadeColors: StoryObj<Component> = {
    render: () => {
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
    parameters: {
        layout: "padded",
    },
};
