"use client";

import { DataTable } from "@lifesg/react-design-system/data-table";

const headers = [
    { fieldKey: "title", label: "Title" },
    { fieldKey: "status", label: "Status" },
    { fieldKey: "time", label: "Time" },
];

const rows = [
    {
        id: "1",
        title: "Title 1",
        status: "Completed",
        time: "07/Aug/2023 9.30pm",
    },
    {
        id: "2",
        title: "Title 2",
        status: "Pending",
        time: "07/Aug/2023 10.30pm",
    },
    {
        id: "3",
        title: "Title 3",
        status: "Pending",
        time: "07/Aug/2023 11.30pm",
    },
    {
        id: "4",
        title: "Title 4",
        status: "Completed",
        time: "08/Aug/2023 9.30pm",
    },
];

export default function Story() {
    return (
        <div className="story-column-container">
            <DataTable
                data-testid="data-table"
                headers={headers}
                rows={rows}
                alternatingRows
            />
        </div>
    );
}
