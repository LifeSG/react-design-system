import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
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

export const ControlledMode: StoryObj<Component> = {
    render: (_args) => {
        const items = [
            {
                title: "This is the first item",
                detail: (
                    <Typography.BodyBL>
                        Lorem ipsum dolor sit amet
                    </Typography.BodyBL>
                ),
            },
            {
                title: "This is the second item",
                detail: (
                    <Typography.BodyBL>
                        Lorem ipsum dolor sit amet
                    </Typography.BodyBL>
                ),
            },
            {
                title: "This is the third item",
                detail: (
                    <Typography.BodyBL>
                        Lorem ipsum dolor sit amet
                    </Typography.BodyBL>
                ),
            },
        ];
        const [expandedStates, setExpandedStates] = useState(() =>
            items.map((_, index) => index === 0)
        );
        return (
            <Accordion initialDisplay="collapse-all">
                {items.map((item, index) => (
                    <Accordion.Item
                        key={`${item.title}-${index}`}
                        title={item.title}
                        expanded={expandedStates[index]}
                        onExpandChange={(val) =>
                            setExpandedStates((prev) =>
                                prev.map((v, i) => (i === index ? val : v))
                            )
                        }
                    >
                        {item.detail}
                    </Accordion.Item>
                ))}
            </Accordion>
        );
    },
};

export const Accessibility: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Accordion title="Heading" headingLevel={3}>
                <Accordion.Item title="Title as string">
                    <Typography.BodyBL>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography.BodyBL>
                </Accordion.Item>
                <Accordion.Item
                    title={
                        <Typography.HeadingXS inline weight="semibold">
                            Title as JSX element
                        </Typography.HeadingXS>
                    }
                >
                    <Typography.BodyBL>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography.BodyBL>
                </Accordion.Item>
            </Accordion>
        );
    },
};
