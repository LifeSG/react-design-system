import { CalendarEventIcon } from "@lifesg/react-icons/calendar-event";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Alert } from "src/alert";
import { StackDecorator, StoryDecorator } from "stories/storybook-common";

type Component = typeof Alert;

const meta: Meta<Component> = {
    title: "Feedback indicators/Alert",
    component: Alert,
    decorators: [StackDecorator(), StoryDecorator()],
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Alert type="error">
                    This will notify users of an error that has occurred.
                </Alert>
                <Alert type="warning">
                    This serves as a warning or disclaimer to users.
                </Alert>
                <Alert type="success">
                    This serves as an acknowledgement of a successful action.
                </Alert>
                <Alert type="info">
                    This provides non-critical information to users.
                </Alert>
                <Alert type="description">
                    This provides non-critical information to users.
                </Alert>
            </>
        );
    },
};

export const WithIcon: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Alert type="error" showIcon>
                    This will notify users of an error that has occurred.
                </Alert>
                <Alert type="warning" showIcon>
                    This serves as a warning or disclaimer to users.
                </Alert>
                <Alert type="success" showIcon>
                    This serves as an acknowledgement of a successful action.
                </Alert>
                <Alert type="info" showIcon>
                    This provides non-critical information to users.
                </Alert>
                <Alert type="description" showIcon>
                    This provides non-critical information to users.
                </Alert>
            </>
        );
    },
};

export const WithBoldText: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Alert type="success">
                <p>
                    You can add <strong>bold text</strong> to signify or
                    highlight certain information. Or perhaps even add a&nbsp;
                    <a
                        href="https://life.gov.sg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        hyperlink
                    </a>
                    &nbsp;to direct users to some external source.
                </p>
                <br />
                <p>You can list bullet points:</p>
                <ul>
                    <li>List item</li>
                </ul>
                <p>Or display numbered lists:</p>
                <ol>
                    <li>List item</li>
                </ol>
            </Alert>
        );
    },
};

export const WithCustomDisplay: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Alert type="error">
                <ul style={{ display: "flex", listStyle: "none" }}>
                    <li
                        style={{
                            marginRight: "1rem",
                            border: "1px solid red",
                            padding: "1rem",
                            color: "red",
                        }}
                    >
                        First
                    </li>
                    <li
                        style={{
                            marginRight: "1rem",
                            border: "1px solid blue",
                            padding: "1rem",
                            color: "blue",
                        }}
                    >
                        Second
                    </li>
                    <li
                        style={{
                            marginRight: "1rem",
                            border: "1px solid green",
                            padding: "1rem",
                            color: "green",
                        }}
                    >
                        Third
                    </li>
                </ul>
            </Alert>
        );
    },
};

export const WithHyperlink: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Alert
                type="warning"
                actionLink={{
                    children: "Hyperlink",
                    href: "https://www.life.gov.sg/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                }}
            >
                <p>
                    An alert box with an internal hyperlink for redirection to
                    pages within the same product. E.g. LifeSG.
                </p>
            </Alert>
        );
    },
};

export const SmallSize: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Alert type="description" sizeType="small">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Alert>
                <Alert
                    type="description"
                    sizeType="small"
                    actionLink={{
                        children: "Hyperlink",
                        href: "https://www.google.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                    }}
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Alert>
                <Alert type="description" showIcon sizeType="small">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Alert>
                <Alert
                    type="description"
                    showIcon
                    sizeType="small"
                    actionLink={{
                        children: "Hyperlink",
                        href: "https://www.google.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                    }}
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Alert>
                <Alert
                    type="description"
                    showIcon
                    sizeType="small"
                    actionLink={{
                        children: "Hyperlink",
                        href: "https://www.google.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                    }}
                    maxCollapsedHeight={20}
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Alert>
            </>
        );
    },
};

export const WithCustomIcon: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Alert type="warning" showIcon customIcon={<CalendarEventIcon />}>
                An alert box with a custom icon that can be passed in using
                customIcon.
            </Alert>
        );
    },
};

export const WithMaxCollapsedHeight: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Alert
                    type="warning"
                    showIcon
                    maxCollapsedHeight={80}
                    actionLink={{
                        children: "Hyperlink",
                        href: "https://www.life.gov.sg/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                    }}
                >
                    An alert box with a maximum height of content to render,
                    outside the collapsible zone with a text button to expand
                    it. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque lacinia auctor tellus, eget tempor diam finibus
                    vel. Integer non enim vehicula, malesuada lectus a, lobortis
                    magna. Aliquam in sodales enim. Ut id condimentum magna. Ut
                    aliquet tincidunt nunc eu cursus. Vestibulum id maximus
                    nulla. Phasellus lacinia risus neque, eget tincidunt dui
                    maximus sed. Morbi eu vestibulum massa. Suspendisse potenti.
                    Donec faucibus condimentum nibh, non tempus augue bibendum
                    non. Cras in mattis ex.
                </Alert>
                <Alert type="error" showIcon maxCollapsedHeight={50}>
                    <div
                        style={{
                            border: "1px solid red",
                            padding: "1.5rem",
                            color: "red",
                        }}
                    >
                        Custom content
                    </div>
                </Alert>
            </>
        );
    },
};

export const Accessibility: StoryObj<Component> = {
    render: () => {
        const [alertMessage, setAlertMessage] = useState("");
        const [messageId, setMessageId] = useState(0);

        const announceMessage = (message: string) => {
            setMessageId((prev) => prev + 1);
            setAlertMessage(message);
        };

        return (
            <>
                <div
                    id="live-region"
                    aria-live="polite"
                    aria-atomic="true"
                    style={{
                        position: "absolute",
                        left: "-10000px",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                    }}
                >
                    {alertMessage && (
                        <span key={messageId}>{alertMessage}</span>
                    )}
                </div>

                <Alert type="error" showIcon role="alert">
                    This alert uses role=&quot;alert&quot; for immediate
                    announcement.
                </Alert>

                <Alert type="info" showIcon role="status">
                    This alert uses role=&quot;status&quot; for less urgent
                    updates.
                </Alert>

                <button
                    onClick={() =>
                        announceMessage("Success: Your data has been saved!")
                    }
                >
                    Trigger Live Region Announcement
                </button>
            </>
        );
    },
};
