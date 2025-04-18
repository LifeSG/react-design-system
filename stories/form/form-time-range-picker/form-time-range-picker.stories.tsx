import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { TimeRangePicker } from "src/time-range-picker";
import {
    FullWidthStoryDecorator,
    StoryDecorator,
} from "stories/storybook-common";

type Component = typeof Form.TimeRangePicker;
type StandaloneComponent = typeof TimeRangePicker;

const meta: Meta<Component> = {
    title: "Form/TimeRangePicker",
    component: Form.TimeRangePicker,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        const [time1, setTime1] = useState({
            start: "",
            end: "",
        });
        const [time2, setTime2] = useState({
            start: "",
            end: "",
        });
        const [time3] = useState({
            start: "12:00am",
            end: "12:30am",
        });
        return (
            <>
                <Form.TimeRangePicker
                    label="This is a time range picker"
                    value={time1}
                    onChange={(value) => setTime1(value)}
                />
                <Form.TimeRangePicker
                    label="This is the disabled state"
                    disabled={true}
                />
                <Form.TimeRangePicker
                    label="This is the error state"
                    value={time2}
                    onChange={(value) => setTime2(value)}
                    errorMessage="Time input required"
                />
                <Form.TimeRangePicker
                    label="This is read only state for timepicker"
                    value={time3}
                    readOnly
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const TwelveHourFormat: StoryObj<Component> = {
    name: "12 Hour Format",
    render: (_args) => {
        const [time, setTime] = useState({
            start: "12:00am",
            end: "",
        });
        return (
            <Form.TimeRangePicker
                label="This is a time range picker"
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
                <Form.TimeRangePicker
                    label="A shorter form input"
                    format="12hr"
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.TimeRangePicker
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
        return <TimeRangePicker />;
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const ComboboxVariant: StoryObj<Component> = {
    render: (_args) => {
        const emptyTime = { start: "", end: "" };
        const [time1, setTime1] = useState(emptyTime);
        const [time2, setTime2] = useState(emptyTime);
        const [time3, setTime3] = useState({ start: "00:00", end: "" });
        const [time4, setTime4] = useState(emptyTime);
        const [time5, setTime5] = useState({ start: "2:00pm", end: "1:00pm" });

        return (
            <>
                <Form.TimeRangePicker
                    label="Combobox time range picker"
                    value={time1}
                    onChange={(value) => setTime1(value)}
                    variant="combobox"
                />
                <Form.TimeRangePicker
                    label="Interval between each dropdown option"
                    value={time2}
                    onChange={(value) => setTime2(value)}
                    variant="combobox"
                    interval={60}
                />
                <Form.TimeRangePicker
                    label="24hr format"
                    value={time3}
                    onChange={(value) => setTime3(value)}
                    variant="combobox"
                    format="24hr"
                />
                <Form.TimeRangePicker
                    label="Start and end option limits"
                    value={time4}
                    onChange={(value) => setTime4(value)}
                    variant="combobox"
                    startLimit="10:00am"
                    endLimit="2:00pm"
                />
                <Form.TimeRangePicker
                    label="Automatic time range error validation"
                    value={time5}
                    onChange={(value) => setTime5(value)}
                    variant="combobox"
                />
                <Form.TimeRangePicker
                    label="This is the disabled state"
                    variant="combobox"
                    disabled
                />
                <Form.TimeRangePicker
                    label="This is the readonly state"
                    variant="combobox"
                    readOnly
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
