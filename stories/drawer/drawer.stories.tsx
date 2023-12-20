import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/button";
import { Drawer } from "src/drawer";
import { Text } from "src/text";

type Component = typeof Drawer;

const meta: Meta<Component> = {
    title: "Modules/Drawer",
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
                    <Text.Body style={{ padding: "1rem" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text.Body>
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
                        <Text.Body
                            style={{
                                height: "100vh",
                            }}
                        >
                            Drawer content is scrollable when its height is
                            taller than the current screen. The header remains
                            at the top when scrolling down.
                        </Text.Body>
                        <Text.Body>
                            This line marks the end of content.
                        </Text.Body>
                    </div>
                </Drawer>
            </>
        );
    },
};
