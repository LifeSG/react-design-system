import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import { Button } from "src/button";
import { Drawer } from "src/drawer";
import { Typography } from "src/typography";

type Component = typeof Drawer;

const meta: Meta<Component> = {
    title: "Overlays/Drawer",
    component: Drawer,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [show, setShow] = useState(false);
        const openDrawer = () => setShow(true);
        const closeDrawer = () => setShow(false);
        return (
            <>
                <Button.Default onClick={openDrawer}>
                    Open drawer
                </Button.Default>
                <Drawer
                    show={show}
                    onClose={closeDrawer}
                    onOverlayClick={closeDrawer}
                    heading="Header text"
                >
                    <div style={{ padding: "1rem" }}>
                        <Typography.BodyBL style={{ marginBottom: "1rem" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Typography.BodyBL>

                        <Button.Default>Some content</Button.Default>
                    </div>
                </Drawer>
            </>
        );
    },
};

export const WithCustomCallToAction: StoryObj<Component> = {
    render: () => {
        const [show, setShow] = useState(false);
        const openDrawer = () => setShow(true);
        const closeDrawer = () => setShow(false);
        return (
            <>
                <Button.Default onClick={openDrawer}>
                    Open drawer
                </Button.Default>
                <Drawer
                    show={show}
                    onClose={closeDrawer}
                    onOverlayClick={closeDrawer}
                    heading="Header text"
                    customCallToAction={
                        <>
                            <Button.Default onClick={closeDrawer}>
                                Confirm
                            </Button.Default>
                            <Button.Default
                                styleType="light"
                                onClick={closeDrawer}
                            >
                                Cancel
                            </Button.Default>
                        </>
                    }
                >
                    <div style={{ padding: "1rem" }}>
                        <Typography.BodyBL>
                            The call-to-action buttons sit beside the heading
                            when the drawer is wide, and wrap onto a new line
                            below the heading when the drawer is narrow. Resize
                            the window to see the layout respond to the drawer
                            width.
                        </Typography.BodyBL>
                    </div>
                </Drawer>
            </>
        );
    },
};

export const HandlingContentOverflow: StoryObj<Component> = {
    render: () => {
        const [show, setShow] = useState(false);
        const openDrawer = () => setShow(true);
        const closeDrawer = () => setShow(false);
        return (
            <>
                <Button.Default onClick={openDrawer}>
                    Open drawer
                </Button.Default>
                <Drawer
                    show={show}
                    onClose={closeDrawer}
                    onOverlayClick={closeDrawer}
                    heading="This title is truncated to a single line when it exceeds the available space"
                >
                    <div
                        style={{
                            padding: "1rem",
                        }}
                    >
                        <Typography.BodyBL
                            style={{
                                height: "100vh",
                            }}
                        >
                            Drawer content is scrollable when its height is
                            taller than the current screen. The header remains
                            at the top when scrolling down.
                        </Typography.BodyBL>
                        <Typography.BodyBL>
                            This line marks the end of content.
                        </Typography.BodyBL>
                    </div>
                </Drawer>
            </>
        );
    },
};
