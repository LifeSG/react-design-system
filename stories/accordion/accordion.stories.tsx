import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "src/accordion";
import { Typography } from "src/typography";

type Component = typeof Accordion;

const meta: Meta<Component> = {
    title: "Content/Accordion",
    component: Accordion,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Accordion title="My Accordion">
                <Accordion.Item
                    title="This is the first item"
                    collapsible={false}
                >
                    <Typography.BodyBL>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Typography.BodyBL>
                </Accordion.Item>
                <Accordion.Item title="This is the second item">
                    {
                        <Typography.BodyBL>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor&nbsp;
                            <Typography.LinkBL
                                href="https://www.google.com"
                                target="_blank"
                            >
                                see more here
                            </Typography.LinkBL>
                            .
                        </Typography.BodyBL>
                    }
                </Accordion.Item>
            </Accordion>
        );
    },
};

export const SmallAccordionItemTitle: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Accordion title="Small Accordion item title">
                <Accordion.Item title="This is the first item" type="small">
                    <Typography.BodyBL>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Typography.BodyBL>
                </Accordion.Item>
                <Accordion.Item title="This is the second item" type="small">
                    {
                        <Typography.BodyBL>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor&nbsp;
                            <Typography.LinkBL
                                href="https://www.google.com"
                                target="_blank"
                            >
                                see more here
                            </Typography.LinkBL>
                            .
                        </Typography.BodyBL>
                    }
                </Accordion.Item>
            </Accordion>
        );
    },
};

export const TitleShownInMobile: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Accordion title="Title in mobile too" showTitleInMobile>
                <Accordion.Item title="This is the first item">
                    <Typography.BodyBL>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Typography.BodyBL>
                </Accordion.Item>
                <Accordion.Item title="This is the second item">
                    <Typography.BodyBL>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor&nbsp;
                        <Typography.LinkBL
                            href="https://www.google.com"
                            target="_blank"
                        >
                            see more here
                        </Typography.LinkBL>
                        .
                    </Typography.BodyBL>
                </Accordion.Item>
            </Accordion>
        );
    },
};

export const NoTitle: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Accordion>
                <Accordion.Item title="This is the first item">
                    <Typography.BodyBL>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Typography.BodyBL>
                </Accordion.Item>
                <Accordion.Item title="This is the second item">
                    <Typography.BodyBL>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor&nbsp;
                        <Typography.LinkBL
                            href="https://www.google.com"
                            target="_blank"
                        >
                            see more here
                        </Typography.LinkBL>
                        .
                    </Typography.BodyBL>
                </Accordion.Item>
            </Accordion>
        );
    },
};

export const NoExpandCollapseAll: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Accordion title="No expand/collapse all" enableExpandAll={false}>
                <Accordion.Item title="This is the first item">
                    <Typography.BodyBL>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Typography.BodyBL>
                </Accordion.Item>
                <Accordion.Item title="This is the second item">
                    <Typography.BodyBL>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor&nbsp;
                        <Typography.LinkBL
                            href="https://www.google.com"
                            target="_blank"
                        >
                            see more here
                        </Typography.LinkBL>
                        .
                    </Typography.BodyBL>
                </Accordion.Item>
            </Accordion>
        );
    },
};
