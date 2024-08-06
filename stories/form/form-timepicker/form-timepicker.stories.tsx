import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "src/form";
import { v2_Layout } from "src/v2_layout";
import { Timepicker } from "src/timepicker";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";

type Component = typeof Form.Timepicker;
type StandaloneComponent = typeof Timepicker;

const meta: Meta<Component> = {
    title: "Form/Timepicker",
    component: Form.Timepicker,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [time1, setTime1] = useState("");
        const [time3, setTime3] = useState("");
        return (
            <StoryContainer>
                <Container>
                    <Form.Timepicker
                        label="This is a timepicker"
                        value={time1}
                        onChange={(value) => setTime1(value)}
                    />
                    <Form.Timepicker
                        label="This is the disabled state"
                        disabled
                    />
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
                </Container>
            </StoryContainer>
        );
    },
};

export const TwelveHourFormat: StoryObj<Component> = {
    name: "12 Hour Format",
    render: () => {
        const [time, setTime] = useState("");
        return (
            <StoryContainer>
                <Container>
                    <Form.Timepicker
                        label="This is the 12 hour format timepicker"
                        format="12hr"
                        value={time}
                        onChange={(value) => setTime(value)}
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: () => {
        return (
            <v2_Layout.V2_Content type="grid" style={{ padding: "2rem" }}>
                <Form.Timepicker
                    label="A shorter form input"
                    format="12hr"
                    mobileCols={[1, 5]}
                />
                <Form.Timepicker
                    label="A longer form input"
                    format="12hr"
                    mobileCols={[1, 5]}
                    tabletCols={[1, 9]}
                />
            </v2_Layout.V2_Content>
        );
    },
    parameters: {
        layout: "fullscreen",
    },
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: () => {
        return <Timepicker />;
    },
};
