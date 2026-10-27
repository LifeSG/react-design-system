"use client";

import { DataTable } from "@lifesg/react-design-system/data-table";

const headers = [
    { fieldKey: "title", label: "Title" },
    { fieldKey: "status", label: "Status" },
    { fieldKey: "resource", label: "Resource" },
    { fieldKey: "time", label: "Time" },
];

export default function Story() {
    return (
        <div className="story-column-container">
            <DataTable data-testid="data-table" headers={headers} rows={[]} />
        </div>
    );
}
