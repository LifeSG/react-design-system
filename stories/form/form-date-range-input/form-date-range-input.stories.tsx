import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import { DateRangeInput } from "src/date-range-input";
import { Form } from "src/form";
import { Layout } from "src/layout";
import {
    FullWidthStoryDecorator,
    StoryDecorator,
} from "stories/storybook-common";

type Component = typeof Form.DateRangeInput;
type StandaloneComponent = typeof DateRangeInput;

const meta: Meta<Component> = {
    title: "Form/DateRangeInput",
    component: Form.DateRangeInput,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        const [start, setStart] = useState(
            dayjs().subtract(1, "month").date(21).format("YYYY-MM-DD")
        );
        const [end, setEnd] = useState(dayjs().date(7).format("YYYY-MM-DD"));
        return (
            <>
                <Form.DateRangeInput
                    label="This is the date range input"
                    value={start}
                    valueEnd={end}
                    onChange={(s, e) => {
                        setStart(s);
                        setEnd(e);
                    }}
                />
                <Form.DateRangeInput
                    label="This has the input keyboard hidden"
                    hideInputKeyboard
                />
                <Form.DateRangeInput
                    label="This has no action buttons"
                    withButton={false}
                />
                <Form.DateRangeInput
                    label="This is the disabled state"
                    withButton={false}
                    value="2023-04-20"
                    valueEnd="2023-05-01"
                    disabled
                />
                <Form.DateRangeInput
                    label="This is the readonly state"
                    withButton={false}
                    value="2023-04-20"
                    valueEnd="2023-05-01"
                    readOnly
                />
                <Form.DateRangeInput
                    label="This is the error state"
                    withButton={false}
                    errorMessage="Invalid date"
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WeekInput: StoryObj<Component> = {
    render: (_args) => {
        const [start, setStart] = useState(
            dayjs()
                .subtract(1, "month")
                .date(22)
                .startOf("week")
                .format("YYYY-MM-DD")
        );
        const [end, setEnd] = useState(
            dayjs()
                .subtract(1, "month")
                .date(22)
                .endOf("week")
                .format("YYYY-MM-DD")
        );
        const [disabledDates] = useState([
            dayjs().subtract(1, "month").date(10).format("YYYY-MM-DD"),
            dayjs().subtract(1, "month").date(15).format("YYYY-MM-DD"),
            dayjs().subtract(1, "month").date(21).format("YYYY-MM-DD"),
            dayjs().subtract(1, "month").date(25).format("YYYY-MM-DD"),
        ]);
        return (
            <>
                <Form.DateRangeInput
                    label="This is the week selection"
                    variant="week"
                    value={start}
                    valueEnd={end}
                    onChange={(s, e) => {
                        setStart(s);
                        setEnd(e);
                    }}
                />
                <Form.DateRangeInput
                    label="This has no action buttons"
                    variant="week"
                    withButton={false}
                />
                <Form.DateRangeInput
                    label="This has disabled dates"
                    variant="week"
                    value={start}
                    valueEnd={end}
                    disabledDates={disabledDates}
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const FixedRangeInput: StoryObj<Component> = {
    render: (_args) => {
        const [disabledDates] = useState([
            dayjs().date(10).format("YYYY-MM-DD"),
            dayjs().date(15).format("YYYY-MM-DD"),
            dayjs().date(21).format("YYYY-MM-DD"),
            dayjs().date(25).format("YYYY-MM-DD"),
        ]);
        return (
            <>
                <Form.DateRangeInput
                    label="This has fixed range selection (default 7 days)"
                    variant="fixed-range"
                />
                <Form.DateRangeInput
                    label="This has a custom range (14 days)"
                    variant="fixed-range"
                    numberOfDays={14}
                />
                <Form.DateRangeInput
                    label="This has no action buttons"
                    variant="fixed-range"
                    withButton={false}
                />
                <Form.DateRangeInput
                    label="This has disabled dates"
                    variant="fixed-range"
                    disabledDates={disabledDates}
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithDisabledDates: StoryObj<Component> = {
    render: (_args) => {
        const [disabledDates] = useState([
            dayjs().subtract(2, "days").format("YYYY-MM-DD"),
            dayjs().add(2, "days").format("YYYY-MM-DD"),
        ]);
        return (
            <Form.DateRangeInput
                label="This has disabled dates"
                disabledDates={disabledDates}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const MinAndMaxDates: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.DateRangeInput
                label="This has restricted selection"
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
            <>
                <Form.DateRangeInput
                    label="This allows selection of disabled dates"
                    disabledDates={disabledDates}
                    minDate={dayjs().subtract(6, "weeks").format("YYYY-MM-DD")}
                    maxDate={dayjs().add(6, "weeks").format("YYYY-MM-DD")}
                    allowDisabledSelection
                />
                <Form.DateRangeInput
                    label="This allows selection of disabled dates in week selection"
                    variant="week"
                    disabledDates={disabledDates}
                    minDate={dayjs().subtract(6, "weeks").format("YYYY-MM-DD")}
                    maxDate={dayjs().add(6, "weeks").format("YYYY-MM-DD")}
                    allowDisabledSelection
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Layout.Content type="grid">
                <Form.DateRangeInput
                    label="Using grid columns"
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.DateRangeInput
                    label="Using a longer grid layout"
                    xxsCols={[1, 9]}
                />
            </Layout.Content>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: (_args) => {
        return <DateRangeInput />;
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
