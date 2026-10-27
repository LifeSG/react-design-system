"use client";

import { DataTable } from "@lifesg/react-design-system/data-table";
import { useMemo, useState } from "react";

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
];

export default function Story() {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const allRowIds = useMemo(() => {
        return rows.map(({ id }) => id);
    }, []);

    const handleSelect = (rowId: string, isSelected: boolean) => {
        if (isSelected) {
            setSelectedIds((previous) => [...previous, rowId]);
            return;
        }

        setSelectedIds((previous) => previous.filter((id) => id !== rowId));
    };

    const handleSelectAll = (isAllSelected: boolean) => {
        setSelectedIds(isAllSelected ? [] : allRowIds);
    };

    return (
        <div className="story-column-container">
            <DataTable
                data-testid="data-table"
                headers={headers}
                rows={rows}
                enableMultiSelect
                enableSelectAll
                selectedIds={selectedIds}
                onSelect={handleSelect}
                onSelectAll={handleSelectAll}
            />
        </div>
    );
}
