import type { Meta, StoryObj } from "@storybook/react";
import {} from "dayjs";
import { DateRangeInput } from "src/date-range-input";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { PropsTable } from "./props-table";

type Component = typeof DateRangeInput;

const meta: Meta<Component> = {
    title: "Form/DateRangeInput",
    component: DateRangeInput,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [start, setStart] = useState(
            dayjs().subtract(1, "month").date(21).format("YYYY-MM-DD")
        );
        const [end, setEnd] = useState(dayjs().date(7).format("YYYY-MM-DD"));
        return (
            <StoryContainer>
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
                    label="This has no action buttons on desktop viewports"
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
            </StoryContainer>
        );
    },
};

export const WeekInput: StoryObj<Component> = {
    render: () => {
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
            <StoryContainer>
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
                    label="This has no action buttons on desktop viewports"
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
            </StoryContainer>
        );
    },
};

export const FixedRangeInput: StoryObj<Component> = {
    render: () => {
        const [disabledDates] = useState([
            dayjs().date(10).format("YYYY-MM-DD"),
            dayjs().date(15).format("YYYY-MM-DD"),
            dayjs().date(21).format("YYYY-MM-DD"),
            dayjs().date(25).format("YYYY-MM-DD"),
        ]);
        return (
            <StoryContainer>
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
                    label="This has no action buttons on desktop viewports"
                    variant="fixed-range"
                    withButton={false}
                />
                <Form.DateRangeInput
                    label="This has disabled dates"
                    variant="fixed-range"
                    disabledDates={disabledDates}
                />
            </StoryContainer>
        );
    },
};

export const WithDisabledDates: StoryObj<Component> = {
    render: () => {
        const [disabledDates] = useState([
            dayjs().subtract(2, "days").format("YYYY-MM-DD"),
            dayjs().add(2, "days").format("YYYY-MM-DD"),
        ]);
        return (
            <StoryContainer>
                <Form.DateRangeInput
                    label="This has disabled dates"
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
                <Form.DateRangeInput
                    label="This has restricted selection"
                    minDate={dayjs().subtract(2, "days").format("YYYY-MM-DD")}
                    maxDate={dayjs().add(20, "days").format("YYYY-MM-DD")}
                />
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
            </StoryContainer>
        );
    },
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: () => {
        return (
            <Layout.Content type="grid" style={{ padding: "2rem" }}>
                <Form.DateRangeInput
                    label="Using grid columns"
                    mobileCols={[1, 5]}
                    tabletCols={[1, 7]}
                />
                <Form.DateRangeInput
                    label="Using a longer grid layout"
                    mobileCols={[1, 5]}
                    tabletCols={[1, 9]}
                />
            </Layout.Content>
        );
    },
};

export const StandaloneUsage: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <DateRangeInput />
            </StoryContainer>
        );
    },
};
