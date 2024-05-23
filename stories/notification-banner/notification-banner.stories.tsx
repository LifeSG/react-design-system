import type { Meta, StoryObj } from "@storybook/react";
import { NotificationBanner } from "src/notification-banner";
import { Text } from "src/text";
import { StyledContent } from "./doc-elements";
import { useState } from "react";
import { GearFillIcon } from "@lifesg/react-icons/gear-fill";
import { ArrowRightIcon } from "@lifesg/react-icons/arrow-right";

type Component = typeof NotificationBanner;

const meta: Meta<Component> = {
    title: "Modules/NotificationBanner",
    component: NotificationBanner,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <div
                style={{
                    position: "relative",
                    paddingTop: "1.5rem",
                    maxHeight: "21rem",
                }}
            >
                <NotificationBanner>
                    This is a notification banner that can be dismissed by
                    default.
                </NotificationBanner>
                <StyledContent>
                    <Text.Body paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Text.Body>
                    <Text.Body paragraph>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla
                        pariatur?
                    </Text.Body>
                </StyledContent>
            </div>
        );
    },
};

export const NonSticky: StoryObj<Component> = {
    render: () => {
        return (
            <div
                style={{
                    position: "relative",
                    paddingTop: "1.5rem",
                    maxHeight: "21rem",
                }}
            >
                <NotificationBanner sticky={false}>
                    This is a non sticky banner
                </NotificationBanner>
                <StyledContent>
                    <Text.Body paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Text.Body>
                    <Text.Body paragraph>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla
                        pariatur?
                    </Text.Body>
                </StyledContent>
            </div>
        );
    },
};

export const NonDismissible: StoryObj<Component> = {
    render: () => {
        return (
            <div
                style={{
                    position: "relative",
                    paddingTop: "1.5rem",
                    maxHeight: "21rem",
                }}
            >
                <NotificationBanner dismissible={false}>
                    This is a non dismissible banner
                </NotificationBanner>
                <StyledContent>
                    <Text.Body paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Text.Body>
                </StyledContent>
            </div>
        );
    },
};

export const TextStylingOptions: StoryObj<Component> = {
    render: () => {
        return (
            <div style={{ position: "relative", paddingTop: "1.5rem" }}>
                <NotificationBanner>
                    <>
                        This is an example of how you can style the contents.
                        You can specify an anchor tag for a normal&nbsp;
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
                <StyledContent>
                    <Text.Body paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Text.Body>
                </StyledContent>
            </div>
        );
    },
};

export const CustomContent: StoryObj<Component> = {
    render: () => {
        return (
            <div
                style={{
                    position: "relative",
                    paddingTop: "1.5rem",
                    maxHeight: "21rem",
                }}
            >
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
                <StyledContent>
                    <Text.Body paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Text.Body>
                </StyledContent>
            </div>
        );
    },
};

export const ClickableBanner: StoryObj<Component> = {
    render: () => {
        const [swapColor, setSwapColor] = useState(true);
        return (
            <div>
                <NotificationBanner onClick={() => setSwapColor(!swapColor)}>
                    This is a notification banner that can be clicked to perform
                    an action.
                </NotificationBanner>
                <StyledContent $color={swapColor ? "green" : "yellow"}>
                    <Text.Body paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Text.Body>
                </StyledContent>
            </div>
        );
    },
};

export const HandlingLongContent: StoryObj<Component> = {
    render: () => {
        return (
            <div>
                <NotificationBanner maxCollapsedHeight={100}
                actionButton={{
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
                }}>
                    This is a notification banner with maxCollapsedHeight set.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </NotificationBanner>
            </div>
        );
    },
};
