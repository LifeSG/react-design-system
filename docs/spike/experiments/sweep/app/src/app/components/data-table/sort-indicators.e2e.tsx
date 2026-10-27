"use client";

import { DataTable } from "@lifesg/react-design-system/data-table";

const headers = [
    {
        fieldKey: "colA",
        label: "Column A",
    },
    {
        fieldKey: "colB",
        label: "Column B",
    },
    {
        fieldKey: "colC",
        label: "Column C",
    },
];

const rows = [
    {
        id: "1",
        colA: "1",
        colB: "Content 1",
        colC: "Static",
    },
    {
        id: "2",
        colA: "2",
        colB: "Content 2",
        colC: "State",
    },
];

export default function Story() {
    const sortState = {
        colA: "asc",
        colB: "desc",
    } as const;

    return (
        <div className="story-column-container">
            <DataTable
                data-testid="data-table"
                headers={headers}
                rows={rows}
                sortIndicators={sortState}
            />
        </div>
    );
}
