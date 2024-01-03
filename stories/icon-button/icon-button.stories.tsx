import { LockIcon } from "@lifesg/react-icons/lock";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "src/icon-button";
import { StoryContainer } from "../storybook-common";
import { Grid, Row } from "./doc-elements";

type Component = typeof IconButton;

const meta: Meta<Component> = {
    title: "General/IconButton",
    component: IconButton,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <IconButton>
                <LockIcon />
            </IconButton>
        );
    },
};

export const Variations: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Grid>
                    <Row>
                        <span />
                        <label>Primary</label>
                        <label>Secondary</label>
                        <label>Light</label>
                        <label>Disabled</label>
                    </Row>
                    <Row>
                        <label>Large</label>
                        <IconButton sizeType="large" styleType="primary">
                            <LockIcon />
                        </IconButton>
                        <IconButton sizeType="large" styleType="secondary">
                            <LockIcon />
                        </IconButton>
                        <IconButton sizeType="large" styleType="light">
                            <LockIcon />
                        </IconButton>
                        <IconButton sizeType="large" disabled>
                            <LockIcon />
                        </IconButton>
                    </Row>
                    <Row>
                        <label>Default</label>
                        <IconButton styleType="primary">
                            <LockIcon />
                        </IconButton>
                        <IconButton styleType="secondary">
                            <LockIcon />
                        </IconButton>
                        <IconButton styleType="light">
                            <LockIcon />
                        </IconButton>
                        <IconButton disabled>
                            <LockIcon />
                        </IconButton>
                    </Row>
                    <Row>
                        <label>Small</label>
                        <IconButton sizeType="small" styleType="primary">
                            <LockIcon />
                        </IconButton>
                        <IconButton sizeType="small" styleType="secondary">
                            <LockIcon />
                        </IconButton>
                        <IconButton sizeType="small" styleType="light">
                            <LockIcon />
                        </IconButton>
                        <IconButton sizeType="small" disabled>
                            <LockIcon />
                        </IconButton>
                    </Row>
                </Grid>
            </StoryContainer>
        );
    },
};

export const CustomComponents: StoryObj<Component> = {
    render: () => {
        return (
            <IconButton>
                <img
                    src="https://cdn-icons-png.flaticon.com/128/2171/2171991.png"
                    alt="icon-image"
                />
            </IconButton>
        );
    },
};
