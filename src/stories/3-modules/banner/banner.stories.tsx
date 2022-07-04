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
import { Banner } from "src/components";
import { BannerProps } from "src/components/types";

export default {
    title: "modules/Banner",
    component: Banner,
    argTypes: {
        children: {
            description:
                "The nodes inside the banner restricted to 80% of apparent width",
            table: {
                type: {
                    summary: "React.ReactNode | string",
                },
            },
        },
        imgset: {
            description:
                "JSON object of remote sources for the heading's background",
            table: {
                type: {
                    summary:
                        "ImgSet { desktop: string, mobile: string, foreground: string }",
                },
            },
        },
    },
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>Banner</Title>
                    <Description>
                        Common banner component that can live in page headings.
                    </Description>
                    <Heading>Props</Heading>
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories includePrimary={true} title="Variants" />
                </>
            ),
        },
    },
} as Meta;

const Template: Story<BannerProps> = (args) => <Banner {...args} />;
export const Default = Template.bind({});
Default.args = {
    children: "Help & Support",
    ["aria-label"]: "help-and-support",
};
Default.parameters = {
    layout: "fullscreen",
};

export const WithBackgroundImage = Template.bind({});
WithBackgroundImage.args = {
    children: "Support for active ageing",
    imgset: {
        desktop:
            "https://www.life.gov.sg/img/what-you-can-do/active-ageing/hero-banner-with-gradient.jpg",
        mobile: "https://www.life.gov.sg/img/what-you-can-do/active-ageing/hero-banner.jpg",
    },
    ["aria-label"]: "career-advice",
};
WithBackgroundImage.parameters = {
    layout: "fullscreen",
};

export const WithForegroundImage = Template.bind({});
WithForegroundImage.args = {
    children: <>More than 40 government services in one app</>,
    imgset: {
        desktop:
            "https://www.life.gov.sg/img/what-you-can-do/government-services/hero-banner.jpg",
        mobile: "https://www.life.gov.sg/img/what-you-can-do/government-services/hero-banner.jpg",
        foreground:
            "https://www.life.gov.sg/img/what-you-can-do/government-services/hero-banner-phone.png",
    },
};
WithForegroundImage.parameters = {
    layout: "fullscreen",
};
