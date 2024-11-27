import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";
import { GearFillIcon } from "@lifesg/react-icons/gear-fill";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
    NotificationBanner,
    withNotificationBanner,
} from "src/notification-banner";
import { FullWidthStoryDecorator } from "stories/storybook-common";
import { DynamicContent, PageContent } from "./doc-elements";

type Component = typeof NotificationBanner;

const meta: Meta<Component> = {
    title: "Feedback indicators/NotificationBanner",
    component: NotificationBanner,
    decorators: [FullWidthStoryDecorator()],
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <div>
                <NotificationBanner>
                    This is a notification banner that can be dismissed by
                    default.
                </NotificationBanner>
                <PageContent />
            </div>
        );
    },
    parameters: {
        layout: "fullscreen",
        docs: { story: { inline: false, iframeHeight: 250 } },
    },
};

export const NonSticky: StoryObj<Component> = {
    render: (_args) => {
        return (
            <div>
                <NotificationBanner sticky={false}>
                    This is a non sticky banner
                </NotificationBanner>
                <PageContent />
            </div>
        );
    },
    parameters: {
        layout: "fullscreen",
        docs: { story: { inline: false, iframeHeight: 250 } },
    },
};

export const NonDismissible: StoryObj<Component> = {
    render: (_args) => {
        return (
            <NotificationBanner dismissible={false}>
                This is a non dismissible banner
            </NotificationBanner>
        );
    },
};

export const TextStylingOptions: StoryObj<Component> = {
    render: (_args) => {
        return (
            <NotificationBanner>
                <>
                    This is an example of how you can style the contents. You
                    can specify an anchor tag for a normal&nbsp;
                    <a
                        href="https://www.life.gov.sg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        link
                    </a>
                    . An&nbsp;
                    <NotificationBanner.Link
                        href="https://www.tech.gov.sg"
                        target="_blank"
                        external
                    >
                        external link
                    </NotificationBanner.Link>
                    &nbsp;will require the Link component.{" "}
                    <strong>Bold text</strong> or
                    <em>italicised text</em> are also accepted.
                </>
            </NotificationBanner>
        );
    },
};

export const CustomContent: StoryObj<Component> = {
    render: (_args) => {
        return (
            <NotificationBanner>
                <div
                    style={{
                        display: "flex",
                        background: "yellow",
                        color: "black",
                        padding: "1rem",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <GearFillIcon />
                    This is my custom content
                </div>
            </NotificationBanner>
        );
    },
};

export const ClickableBanner: StoryObj<Component> = {
    render: (_args) => {
        const [swapColor, setSwapColor] = useState(true);
        return (
            <div>
                <NotificationBanner onClick={() => setSwapColor(!swapColor)}>
                    This is a notification banner that can be clicked to perform
                    an action.
                </NotificationBanner>
                <DynamicContent color={swapColor ? "green" : "yellow"} />
            </div>
        );
    },
};

export const HandlingLongContent: StoryObj<Component> = {
    args: {
        maxCollapsedHeight: 100,
        actionButton: {
            children: (
                <>
                    View more
                    <ArrowRightIcon />
                </>
            ),
            onClick: (event) => {
                event.preventDefault();
                alert("I got clicked");
            },
        },
    },
    render: (args) => {
        return (
            <NotificationBanner {...args}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </NotificationBanner>
        );
    },
};

export const HigherOrderComponent: StoryObj<Component> = {
    render: () => {
        const HOCElement = withNotificationBanner([
            {
                type: "text",
                content:
                    "This is rendered using the HOC, and it contains a&nbsp;",
            },
            {
                type: "link",
                content: "hyperlink",
                otherAttributes: {
                    href: "https://www.google.com",
                    external: true,
                    target: "_blank",
                },
            },
            {
                type: "text",
                content:
                    "&nbsp;and text with styles like <strong>bold</strong> and <em>italics</em>.",
            },
        ]);

        return <HOCElement dismissible={false} />;
    },
};
