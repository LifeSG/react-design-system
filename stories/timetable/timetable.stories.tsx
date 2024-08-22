import type { Meta, StoryObj } from "@storybook/react";
import { TimeTable } from "../../src/timetable/timetable";
import { mockMapper } from "../../src/timetable/mock-data";

type Component = typeof TimeTable;

const meta: Meta<Component> = {
    title: "Modules/TimeTable",
    component: TimeTable,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            // <div style={{ maxWidth: "1200px", maxHeight: "300px", border: "1px solid black" }}>
            <TimeTable {...mockMapper} />
            // </div>
        );
    },
};
