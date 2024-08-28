import type { Meta, StoryObj } from "@storybook/react";
import { TimeTable } from "../../src/timetable/timetable";
import { mockMapper } from "../../src/timetable/mock-data";
import { useState } from "react";
import { set, throttle } from "lodash";

type Component = typeof TimeTable;

const meta: Meta<Component> = {
    title: "Modules/TimeTable",
    component: TimeTable,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [results, setResults] = useState(mockMapper.rowBars);
        const onPage = () => {
            setTimeout(() => {
                setResults((prev) => [...prev, ...mockMapper.rowBars]);
            }, 5000);
        };

        return (
            // <div style={{ maxWidth: "1200px", maxHeight: "300px", border: "1px solid black" }}>
            <TimeTable {...mockMapper} onPage={onPage} rowBars={results} />
            // </div>
        );
    },
};
