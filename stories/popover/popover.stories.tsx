import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/button";
import { Popover } from "src/popover";
import { Container, Item, PopoverHOCExample } from "./doc-elements";

type Component = typeof Popover;

const meta: Meta<Component> = {
    title: "Modules/Popover",
    component: Popover,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return <PopoverHOCExample />;
    },
};

export const UsingAsAComponent: StoryObj<Component> = {
    render: () => {
        const [visible, setVisible] = useState(false);
        return (
            <Container>
                <Item>
                    <Popover
                        visible={visible}
                        onMobileClose={() => setVisible(false)}
                    >
                        I am the popover content
                    </Popover>
                    <Button.Default onClick={() => setVisible(!visible)}>
                        Click me to interact
                    </Button.Default>
                </Item>
            </Container>
        );
    },
};
