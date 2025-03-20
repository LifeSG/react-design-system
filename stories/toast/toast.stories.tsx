import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/button";
import { Toast } from "src/toast";
import { Typography } from "../../src/typography";
import { StackDecorator } from "../storybook-common";

type Component = typeof Toast;

const meta: Meta<Component> = {
    title: "Feedback indicators/Toast",
    component: Toast,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toast
                    type="success"
                    label="This is a success toast message"
                    fixed={false}
                />
                <Toast
                    type="warning"
                    label="This is a warning toast message"
                    fixed={false}
                />
                <Toast
                    type="error"
                    label="This is an error toast message"
                    fixed={false}
                />
                <Toast
                    type="info"
                    label="This is an info toast message"
                    fixed={false}
                />
            </>
        );
    },
    decorators: [StackDecorator()],
};

export const WithSubLabel: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toast
                    type="success"
                    label="Your bookings have been updated."
                    fixed={false}
                />
                <Toast
                    type="success"
                    title="Booking completed"
                    label="Your bookings have been updated."
                    fixed={false}
                />
                <Toast
                    type="warning"
                    label="The template contains characters that cannot be updated. Please remove the characters and try again."
                    fixed={false}
                />
                <Toast
                    type="warning"
                    title="Unknown characters"
                    label="The template contains characters that cannot be updated. Please remove the characters and try again."
                    fixed={false}
                />
                <Toast
                    type="error"
                    label="An internal system error has occurred. Please log out and try again."
                    fixed={false}
                />
                <Toast
                    type="error"
                    title="System error"
                    label="An internal system error has occurred. Please log out and try again."
                    fixed={false}
                />
                <Toast
                    type="info"
                    label="The calendar will be automatically updated when you are done editing the event information."
                    fixed={false}
                />
                <Toast
                    type="info"
                    title="Updated automatically"
                    label="The calendar will be automatically updated when you are done editing the event information."
                    fixed={false}
                />
            </>
        );
    },
    decorators: [StackDecorator()],
};

export const AutoDismissal: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toast
                    type="success"
                    label="Your bookings has been updated and received by the service provider."
                    autoDismiss
                    fixed={false}
                />
                <Toast
                    type="info"
                    label="This toast has a custom auto dismiss time of 8 seconds."
                    autoDismiss
                    autoDismissTime={8000}
                    fixed={false}
                />
            </>
        );
    },
    decorators: [StackDecorator()],
};

export const FixedPositioning: StoryObj<Component> = {
    render: (_args) => {
        const [isVisible, setIsVisible] = useState(false);
        const openToast = () => setIsVisible(true);
        const closeToast = () => setIsVisible(false);
        return (
            <div style={{ height: "160vh" }}>
                <div style={{ padding: "1rem", marginTop: "5rem" }}>
                    {isVisible ? (
                        <Button.Default onClick={closeToast}>
                            Click to close
                        </Button.Default>
                    ) : (
                        <Button.Default onClick={openToast}>
                            Click to open
                        </Button.Default>
                    )}
                </div>
                {isVisible && (
                    <Toast
                        type="warning"
                        label="Notification"
                        onDismiss={closeToast}
                    />
                )}
            </div>
        );
    },
    parameters: {
        layout: "fullscreen",
        docs: { story: { inline: false, iframeHeight: 300 } },
    },
};

export const WithCustomDisplay: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Toast
                type="warning"
                title={
                    <Typography.HeadingXS weight="regular">
                        This is a <strong>JSX Element</strong>
                    </Typography.HeadingXS>
                }
                label={
                    <Typography.BodyMD>
                        This is a JSX element that contains a{" "}
                        <Typography.LinkMD>link</Typography.LinkMD>
                    </Typography.BodyMD>
                }
                fixed={false}
            />
        );
    },
};

export const WithActionButton: StoryObj<Component> = {
    render: () => {
        const customActionButton = {
            label: "Click me",
            onClick: () => console.log("This function is called"),
        };
        return (
            <>
                <Toast
                    type="success"
                    label="Your bookings have been updated."
                    actionButton={customActionButton}
                    fixed={false}
                />
                <Toast
                    type="warning"
                    title="Unknown characters"
                    label="The template contains characters that cannot be updated. Please remove the characters and try again."
                    actionButton={customActionButton}
                    fixed={false}
                />
                <Toast
                    type="error"
                    label="An internal system error has occurred. Please log out and try again."
                    actionButton={customActionButton}
                    fixed={false}
                />
                <Toast
                    type="info"
                    title="Updated automatically"
                    label="The calendar will be automatically updated when you are done editing the event information."
                    actionButton={customActionButton}
                    fixed={false}
                />
            </>
        );
    },
    decorators: [StackDecorator()],
};
