import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { Timepicker } from "src/timepicker";
import {
    FullWidthStoryDecorator,
    StoryDecorator,
} from "stories/storybook-common";

type Component = typeof Form.Timepicker;
type StandaloneComponent = typeof Timepicker;

const meta: Meta<Component> = {
    title: "Form/Timepicker",
    component: Form.Timepicker,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        const [time1, setTime1] = useState("");
        const [time3, setTime3] = useState("");
        return (
            <>
                <Form.Timepicker
                    label="This is a timepicker"
                    value={time1}
                    onChange={(value) => setTime1(value)}
                />
                <Form.Timepicker label="This is the disabled state" disabled />
                <Form.Timepicker
                    label="This is the readonly state"
                    readOnly
                    value="01:00"
                />
                <Form.Timepicker
                    label="This is the error state"
                    value={time3}
                    onChange={(value) => setTime3(value)}
                    errorMessage="Time input required"
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const TwelveHourFormat: StoryObj<Component> = {
    name: "12 Hour Format",
    render: (_args) => {
        const [time, setTime] = useState("");
        return (
            <Form.Timepicker
                label="This is the 12 hour format timepicker"
                format="12hr"
                value={time}
                onChange={(value) => setTime(value)}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Layout.Content type="grid">
                <Form.Timepicker
                    label="A shorter form input"
                    format="12hr"
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.Timepicker
                    label="A longer form input"
                    format="12hr"
                    xxsCols={[1, 9]}
                />
            </Layout.Content>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: (_args) => {
        return <Timepicker />;
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
