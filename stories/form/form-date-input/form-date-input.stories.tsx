import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import { DateInput } from "src/date-input";
import { Form } from "src/form";
import { Layout } from "src/layout";
import {
    FullWidthStoryDecorator,
    StoryDecorator,
} from "stories/storybook-common";

type Component = typeof Form.DateInput;
type StandaloneComponent = typeof DateInput;

const meta: Meta<Component> = {
    title: "Form/DateInput",
    component: Form.DateInput,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.DateInput label="This is the default date input" />
                <Form.DateInput
                    label="This has the input keyboard hidden"
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
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithDisabledDates: StoryObj<Component> = {
    render: (_args) => {
        const [disabledDates] = useState([
            dayjs().date(10).format("YYYY-MM-DD"),
            dayjs().date(15).format("YYYY-MM-DD"),
            dayjs().date(25).format("YYYY-MM-DD"),
        ]);
        return (
            <Form.DateInput
                label="This is a date input with disabled dates"
                disabledDates={disabledDates}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const MinAndMaxDates: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.DateInput
                label="This date input has restricted selection"
                minDate={dayjs().subtract(2, "days").format("YYYY-MM-DD")}
                maxDate={dayjs().add(20, "days").format("YYYY-MM-DD")}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const AllowDisabledSelection: StoryObj<Component> = {
    render: (_args) => {
        const [disabledDates] = useState([
            dayjs().date(10).format("YYYY-MM-DD"),
            dayjs().date(15).format("YYYY-MM-DD"),
            dayjs().date(25).format("YYYY-MM-DD"),
        ]);
        return (
            <Form.DateInput
                label="This date input allows selection of disabled dates"
                disabledDates={disabledDates}
                minDate={dayjs().subtract(6, "weeks").format("YYYY-MM-DD")}
                maxDate={dayjs().add(6, "weeks").format("YYYY-MM-DD")}
                allowDisabledSelection
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Layout.Content type="grid">
                <Form.DateInput
                    label="A shorter form input"
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.DateInput label="A longer form input" xxsCols={[1, 9]} />
            </Layout.Content>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: (_args) => {
        return <DateInput />;
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
