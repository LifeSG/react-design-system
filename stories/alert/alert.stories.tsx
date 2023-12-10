import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "src/alert";

type Component = typeof Alert;

const meta: Meta<Component> = {
    title: "Modules/Alert",
    component: Alert,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <Alert type="error">
                    This will notify users of an error that has occurred.
                </Alert>
                <br />
                <Alert type="warning">
                    This serves as a warning or disclaimer to users.
                </Alert>
                <br />
                <Alert type="success">
                    This serves as an acknowledgement of a successful action.
                </Alert>
                <br />
                <Alert type="info">
                    This provides non-critical information to users.
                </Alert>
                <br />
                <Alert type="description">
                    This provides non-critical information to users.
                </Alert>
                <br />
            </>
        );
    },
};

export const WithIcon: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <Alert type="error" showIcon>
                    This will notify users of an error that has occurred.
                </Alert>
                <br />
                <Alert type="warning" showIcon>
                    This serves as a warning or disclaimer to users.
                </Alert>
                <br />
                <Alert type="success" showIcon>
                    This serves as an acknowledgement of a successful action.
                </Alert>
                <br />
                <Alert type="info" showIcon>
                    This provides non-critical information to users.
                </Alert>
                <br />
                <Alert type="description" showIcon>
                    This provides non-critical information to users.
                </Alert>
                <br />
            </>
        );
    },
};

export const WithBoldText: StoryObj<Component> = {
    render: () => {
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
            </Alert>
        );
    },
};

export const WithCustomDisplay: StoryObj<Component> = {
    render: () => {
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
    render: () => {
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
    render: () => {
        return (
            <>
                <Alert type="description" sizeType="small">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Alert>
                <br />
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
                <br />
                <Alert type="description" showIcon sizeType="small">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Alert>
                <br />
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
                <br />
            </>
        );
    },
};
