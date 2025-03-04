import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/button";
import { Tooltip } from "src/tooltip";
import {
    Container,
    Item,
    PositionalTooltips,
    TooltipHOCExample,
} from "./doc-elements";

type Component = typeof Tooltip;

const meta: Meta<Component> = {
    title: "Deprecated/Tooltip",
    component: Tooltip,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return <TooltipHOCExample />;
    },
};

export const UsingAsAComponent: StoryObj<Component> = {
    render: () => {
        const [visible, setVisible] = useState(false);
        return (
            <Container>
                <Item>
                    <Tooltip visible={visible} position="top">
                        I am a top positioned tooltip
                    </Tooltip>
                    <Button.Default onClick={() => setVisible(!visible)}>
                        Click me to interact
                    </Button.Default>
                </Item>
            </Container>
        );
    },
};

export const AvailablePositions: StoryObj<Component> = {
    render: () => {
        return <PositionalTooltips />;
    },
};
