import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "src/accordion";
import { V2_Text } from "src/v2_text";

type Component = typeof Accordion;

const meta: Meta<Component> = {
    title: "Modules/Accordion",
    component: Accordion,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <Accordion title="My Accordion">
                <Accordion.Item
                    title="This is the first item"
                    collapsible={false}
                >
                    <V2_Text.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </V2_Text.Body>
                </Accordion.Item>
                <Accordion.Item title="This is the second item">
                    {
                        <V2_Text.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor&nbsp;
                            <V2_Text.Hyperlink.Default
                                href="https://www.google.com"
                                target="_blank"
                            >
                                see more here
                            </V2_Text.Hyperlink.Default>
                            .
                        </V2_Text.Body>
                    }
                </Accordion.Item>
            </Accordion>
        );
    },
};

export const SmallAccordionItemTitle: StoryObj<Component> = {
    render: () => {
        return (
            <Accordion title="Small Accordion item title">
                <Accordion.Item title="This is the first item" type="small">
                    <V2_Text.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </V2_Text.Body>
                </Accordion.Item>
                <Accordion.Item title="This is the second item" type="small">
                    {
                        <V2_Text.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor&nbsp;
                            <V2_Text.Hyperlink.Default
                                href="https://www.google.com"
                                target="_blank"
                            >
                                see more here
                            </V2_Text.Hyperlink.Default>
                            .
                        </V2_Text.Body>
                    }
                </Accordion.Item>
            </Accordion>
        );
    },
};

export const TitleShownInMobile: StoryObj<Component> = {
    render: () => {
        return (
            <Accordion title="Title in mobile too" showTitleInMobile>
                <Accordion.Item title="This is the first item">
                    <V2_Text.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </V2_Text.Body>
                </Accordion.Item>
                <Accordion.Item title="This is the second item">
                    <V2_Text.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor&nbsp;
                        <V2_Text.Hyperlink.Default
                            href="https://www.google.com"
                            target="_blank"
                        >
                            see more here
                        </V2_Text.Hyperlink.Default>
                        .
                    </V2_Text.Body>
                </Accordion.Item>
            </Accordion>
        );
    },
};

export const NoTitle: StoryObj<Component> = {
    render: () => {
        return (
            <Accordion>
                <Accordion.Item title="This is the first item">
                    <V2_Text.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </V2_Text.Body>
                </Accordion.Item>
                <Accordion.Item title="This is the second item">
                    <V2_Text.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor&nbsp;
                        <V2_Text.Hyperlink.Default
                            href="https://www.google.com"
                            target="_blank"
                        >
                            see more here
                        </V2_Text.Hyperlink.Default>
                        .
                    </V2_Text.Body>
                </Accordion.Item>
            </Accordion>
        );
    },
};

export const NoExpandCollapseAll: StoryObj<Component> = {
    render: () => {
        return (
            <Accordion title="No expand/collapse all" enableExpandAll={false}>
                <Accordion.Item title="This is the first item">
                    <V2_Text.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </V2_Text.Body>
                </Accordion.Item>
                <Accordion.Item title="This is the second item">
                    <V2_Text.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor&nbsp;
                        <V2_Text.Hyperlink.Default
                            href="https://www.google.com"
                            target="_blank"
                        >
                            see more here
                        </V2_Text.Hyperlink.Default>
                        .
                    </V2_Text.Body>
                </Accordion.Item>
            </Accordion>
        );
    },
};
