"use client";

import { DataTable } from "@lifesg/react-design-system/data-table";

const headers = [
    { fieldKey: "title", label: "Title" },
    { fieldKey: "status", label: "Status" },
    { fieldKey: "description", label: "Description" },
    { fieldKey: "time", label: "Time" },
];

const rows = [
    {
        id: "1",
        title: "Title 1",
        status: "Completed",
        description: "Test",
        time: "07/Aug/2023 9.30pm",
    },
    {
        id: "2",
        title: "Title 2",
        status: "Pending",
        description:
            "Cells containing longer data may be truncated so that only a maximum of 2 lines are visible",
        time: "07/Aug/2023 10.30pm",
    },
];

export default function Story() {
    return (
        <div className="story-column-container">
            <DataTable data-testid="data-table" headers={headers} rows={rows} />
        </div>
    );
}
