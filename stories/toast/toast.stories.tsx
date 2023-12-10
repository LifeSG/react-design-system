import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/button";
import { Toast } from "src/toast";

type Component = typeof Toast;

const meta: Meta<Component> = {
    title: "Modules/Toast",
    component: Toast,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <Toast
                type="success"
                label="This is a success toast message"
                fixed={false}
            />
        );
    },
};

export const WithSubLabel: StoryObj<Component> = {
    render: () => {
        return (
            <Toast
                type="success"
                label="Your bookings has been updated and received by the service provider."
                fixed={false}
            />
        );
    },
};

export const AutoDismissal: StoryObj<Component> = {
    render: () => {
        return (
            <Toast
                type="success"
                label="Your bookings has been updated and received by the service provider."
                autoDismiss
                fixed={false}
            />
        );
    },
};

export const FixedPositioning: StoryObj<Component> = {
    render: () => {
        const [isVisible, setIsVisible] = useState(false);
        const openToast = () => setIsVisible(true);
        const closeToast = () => setIsVisible(false);
        return (
            <>
                <div>
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
                    <Toast label="Notification" onDismiss={closeToast} />
                )}
            </>
        );
    },
};
