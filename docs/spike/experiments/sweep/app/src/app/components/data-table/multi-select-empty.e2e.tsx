"use client";

import { DataTable } from "@lifesg/react-design-system/data-table";

const headers = [
    {
        fieldKey: "title",
        label: "Title",
        keyColumn: true,
    },
    {
        fieldKey: "status",
        label: "Status",
    },
    {
        fieldKey: "time",
        label: "Time",
    },
];
export default function Story() {
    return (
        <div className="story-column-container">
            <DataTable
                data-testid="data-table"
                headers={headers}
                enableMultiSelect
                enableSelectAll
                rows={[]}
            />
        </div>
    );
}
