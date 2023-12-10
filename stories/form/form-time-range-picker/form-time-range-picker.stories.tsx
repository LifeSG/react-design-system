
import type { Meta, StoryObj } from "@storybook/react";
import { TimeRangePicker } from "src/time-range-picker";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { Container } from "../shared-doc-elements";
import { PropsTable } from "./props-table";

type Component = typeof Form.TimeRangePicker;

const meta: Meta<Component> = {
    title: "Form/TimeRangePicker",
    component: Form.TimeRangePicker,
};

export default meta;
        
    export const TimeRangePicker: StoryObj<Component> = {
      render: () => {
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
                <StoryContainer>
                    <Container>
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
                    </Container>
                </StoryContainer>
            );
        }
    };
              
    export const 12HourFormat: StoryObj<Component> = {
      render: () => {
            const [time, setTime] = useState({
                start: "12:00am",
                end: "",
            });
            return (
                <StoryContainer>
                    <Container>
                        <Form.TimeRangePicker
                            label="This is a time range picker"
                            format="12hr"
                            value={time}
                            onChange={(value) => setTime(value)}
                        />
                    </Container>
                </StoryContainer>
            );
        }
    };
              
    export const RenderingInGridLayout: StoryObj<Component> = {
      render: () => {
          return <Layout.Content type="grid" style={{ padding: "2rem" }}>
            <Form.TimeRangePicker
                label="A shorter form input"
                format="12hr"
                mobileCols={[1, 5]}
            />
            <Form.TimeRangePicker
                label="A longer form input"
                format="12hr"
                mobileCols={[1, 5]}
                tabletCols={[1, 9]}
            />
        </Layout.Content>
;
      },
    };
              
    export const StandaloneUsage: StoryObj<Component> = {
      render: () => {
            const [time, setTime] = useState("");
            return (
                <StoryContainer>
                    <Container>
                        <TimeRangePicker
                            value={time}
                            onChange={(value) => setTime(value)}
                        />
                    </Container>
                </StoryContainer>
            );
        }
    };
              