import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import { DateInput } from "src/date-input";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";

type Component = typeof Form.DateInput;
type StandaloneComponent = typeof DateInput;

const meta: Meta<Component> = {
    title: "Form/DateInput",
    component: Form.DateInput,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Form.DateInput label="This is the default date input" />
                <Form.DateInput
                    label="This is hideInputKeyboard set to true"
                    hideInputKeyboard
                />
                <Form.DateInput
                    label="This is the date input without buttons"
                    withButton={false}
                />
                <Form.DateInput label="This is the disabled state" disabled />
                <Form.DateInput label="This is the readonly state" readOnly />
                <Form.DateInput
                    label="This is the error state"
                    errorMessage="Invalid date"
                />
            </StoryContainer>
        );
    },
};

export const WithDisabledDates: StoryObj<Component> = {
    render: () => {
        const [disabledDates] = useState([
            dayjs().date(10).format("YYYY-MM-DD"),
            dayjs().date(15).format("YYYY-MM-DD"),
            dayjs().date(25).format("YYYY-MM-DD"),
        ]);
        return (
            <StoryContainer>
                <Form.DateInput
                    label="This is a date input with disabled dates"
                    disabledDates={disabledDates}
                />
            </StoryContainer>
        );
    },
};

export const MinAndMaxDates: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.DateInput
                        label="This date input has restricted selection"
                        minDate={dayjs()
                            .subtract(2, "days")
                            .format("YYYY-MM-DD")}
                        maxDate={dayjs().add(20, "days").format("YYYY-MM-DD")}
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const AllowDisabledSelection: StoryObj<Component> = {
    render: () => {
        const [disabledDates] = useState([
            dayjs().date(10).format("YYYY-MM-DD"),
            dayjs().date(15).format("YYYY-MM-DD"),
            dayjs().date(25).format("YYYY-MM-DD"),
        ]);
        return (
            <StoryContainer>
                <Container>
                    <Form.DateInput
                        label="This date input allows selection of disabled dates"
                        disabledDates={disabledDates}
                        minDate={dayjs()
                            .subtract(6, "weeks")
                            .format("YYYY-MM-DD")}
                        maxDate={dayjs().add(6, "weeks").format("YYYY-MM-DD")}
                        allowDisabledSelection
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: () => {
        return (
            <Layout.Content type="grid" style={{ padding: "2rem" }}>
                <Form.DateInput
                    label="A shorter form input"
                    mobileCols={[1, 5]}
                />
                <Form.DateInput
                    label="A longer form input"
                    mobileCols={[1, 5]}
                    tabletCols={[1, 9]}
                />
            </Layout.Content>
        );
    },
    parameters: {
        layout: "fullscreen",
    },
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: () => {
        return (
            <StoryContainer>
                <DateInput />
            </StoryContainer>
        );
    },
};
