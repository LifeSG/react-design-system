"use client";

import { DataTable } from "@lifesg/react-design-system/data-table";
import { useMemo, useState } from "react";
import { buildRows, headers } from "./common";

const rows = buildRows(50);

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
    );
}
