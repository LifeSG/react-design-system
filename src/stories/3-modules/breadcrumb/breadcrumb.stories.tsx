// Generated with util/create-component.js
import React from "react";
import {
    ArgsTable,
    Description,
    Heading,
    PRIMARY_STORY,
    Stories,
    Title,
} from "@storybook/addon-docs";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Breadcrumb as BreadcrumbComponent } from "src/components";
import { BreadcrumbLink, BreadcrumbProps } from "src/components/types";

export default {
    title: "modules/Breadcrumb",
    component: BreadcrumbComponent,
    argTypes: {
        links: {
            description: "Links for the breadcrumbs",
            table: {
                type: {
                    summary:
                        "BreadcrumbLink { title: string, url: string, onClick: () => void }[]",
                },
            },
        },
        fadeColor: {
            description:
                "When the breadcrumbs are too long, there will be a fade effect at the ends of the breadcrumb",
            control: {
                type: null,
            },
        },
        fadePosition: {
            description: "Specify the positions where the fade will be applied",
        },
        itemStyle: {
            description:
                "Custom style that can be passed to the Breadcrumb items",
            table: {
                type: {
                    summary: "CSS-JS string",
                },
            },
            control: {
                type: null,
            },
        },
        id: {
            description: "A unique id of the element",
        },
        "data-testid": {
            description:
                "An attribute you can assign to the element for testing purposes",
        },
    },

    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Breadcrumb</Title>
                    <Description>
                        This component displays the current page location in a
                        hierarchy of pages
                    </Description>
                    <Stories includePrimary={true} title="" />
                    <Description>
                        You can specify if the breadcrumb link is text only or a
                        clickable link. You can simply do so by specifying it in
                        the `links` prop for the component.
                    </Description>
                    <Heading>Props</Heading>
                    <ArgsTable story={PRIMARY_STORY} />
                </>
            ),
        },
    },
} as Meta;

const LINKS: BreadcrumbLink[] = [
    {
        title: "Home",
        url: "https://www.google.com",
    },
    {
        title: "Breadcrumb without url",
    },
    {
        title: "Normal breadcrumb",
        url: "https://www.google.com",
    },
    {
        title: "Breadcrumb with a callback function",
        url: "https://www.google.com",
        onClick: () => {
            console.log("Clicked on me");
        },
    },
    {
        title: "Last breadcrumb (unclickable)",
        url: "https://www.google.com",
    },
];

const Template: Story<BreadcrumbProps> = (args) => (
    <BreadcrumbComponent {...args} />
);

export const NoFade = Template.bind({});
NoFade.args = {
    links: LINKS,
};

NoFade.storyName = "Breadcrumb";
