import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/button";
import { Toast } from "src/toast";
import { Text } from "src/text";
import { Card } from "src/card";
import { Color } from "src/color";

type Component = typeof Toast;

const meta: Meta<Component> = {
    title: "Modules/Toast",
    component: Toast,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const customActionButton = {
            label: "Click me",
            onClick: () => console.log("This function is called"),
        };
        return (
            <>
                <Toast
                    type="success"
                    label="This is a success toast message"
                    fixed={false}
                />
                <br />
                <Toast
                    type="warning"
                    label="This is a warning toast message"
                    fixed={false}
                />
                <br />
                <Toast
                    type="error"
                    label="This is an error toast message"
                    fixed={false}
                />
                <br />
                <Toast
                    type="info"
                    label="This is an info toast message"
                    fixed={false}
                />
            </>
        );
    },
};

export const WithSubLabel: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <Toast
                    type="success"
                    label="Your bookings has been updated and received by the service provider."
                    fixed={false}
                />
                <br />
                <Toast
                    type="success"
                    title="Template successfully updated"
                    label="Your bookings has been updated and received by the service provider."
                    fixed={false}
                />
                <br />
                <br />
                <Toast
                    type="warning"
                    label="The template contains characters that cannot be updated. Please
                remove the characters and try again."
                    fixed={false}
                />
                <br />
                <Toast
                    type="warning"
                    title="Unknown characters"
                    label="The template contains characters that cannot be updated. Please
                remove the characters and try again."
                    fixed={false}
                />
                <br />
                <br />
                <Toast
                    type="error"
                    label="An internal system error had occured. Please log out and try
                again."
                    fixed={false}
                />
                <br />
                <Toast
                    type="error"
                    title="System error"
                    label="An internal system error had occured. Please log out and try
                again."
                    fixed={false}
                />
                <br />
                <br />
                <Toast
                    type="info"
                    label="The calendar will be automatically updated when you have done
                editing the event information."
                    fixed={false}
                />
                <br />
                <Toast
                    type="info"
                    title="Updated automatically"
                    label="The calendar will be automatically updated when you have done
                editing the event information."
                    fixed={false}
                />
            </>
        );
    },
};

export const AutoDismissal: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <Toast
                    type="success"
                    label="Your bookings has been updated and received by the service provider."
                    autoDismiss
                    fixed={false}
                />
                <br />
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
};

export const FixedPositioning: StoryObj<Component> = {
    render: () => {
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

export const WithJSXTitleAndLabel: StoryObj<Component> = {
    render: () => {
        const title = (
            <Text.H4
                weight={"regular"}
                style={{
                    color: "grey",
                    fontSize: "2rem",
                }}
            >
                This is a <strong>JSX Element</strong>
            </Text.H4>
        );

        const label = (
            <Text.Body
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                The
                <a
                    style={{
                        margin: "0 0.25rem",
                        color: "#1C76D5",
                    }}
                >
                    label
                </a>
                and title were passed in as JSX Elements
            </Text.Body>
        );
        return (
            <>
                <Toast
                    type="success"
                    title={title}
                    label={label}
                    fixed={false}
                />
                <br />
                <Toast type="error" title={title} label={label} fixed={false} />
                <br />
                <Toast
                    type="warning"
                    title={title}
                    label={label}
                    fixed={false}
                />
                <br />
                <Toast type="info" label={label} fixed={false} />
            </>
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
                    title="Template successfully updated"
                    label="Your bookings has been updated and received by the service provider."
                    actionButton={customActionButton}
                    fixed={false}
                />
                <br />
                <Toast
                    type="warning"
                    label="Your bookings has been updated and received by the service provider."
                    actionButton={customActionButton}
                    fixed={false}
                />
                <br />
                <Toast
                    type="error"
                    label="An internal system error had occured. Please log out and try
                again."
                    actionButton={customActionButton}
                    fixed={false}
                />
                <br />
                <Toast
                    type="info"
                    title="Updated automatically"
                    label="The calendar will be automatically updated when you have done
                editing the event information."
                    actionButton={customActionButton}
                    fixed={false}
                />
            </>
        );
    },
};
