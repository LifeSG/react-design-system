"use client";

import { DataTable } from "@lifesg/react-design-system/data-table";
import { useMemo, useState } from "react";
import styles from "./data-table.module.css";

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

const rows = Array.from({ length: 50 }, (_, index) => {
    const number = index + 1;

    return {
        id: number.toString(),
        title: `Title ${number}`,
        status: number % 2 === 0 ? "Completed" : "Pending",
        time: `07/Aug/2023 ${(number % 12) + 1}.30pm`,
    };
});

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
                enableActionBar
                selectedIds={selectedIds}
                onSelect={handleSelect}
                onSelectAll={handleSelectAll}
                onClearSelectionClick={() => {
                    setSelectedIds([]);
                }}
            />
        </div>
    );
}
