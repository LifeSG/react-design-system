import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "src/data-table";
import { Pill } from "src/pill";
import { DataTableWithCustomHeight } from "./doc-elements";
import { DATA_HEADERS, DATA_ROWS, generateRows } from "./row-data";
import { useMemo, useState } from "react";

type Component = typeof DataTable;

const meta: Meta<Component> = {
    title: "Modules/DataTable",
    component: DataTable,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <DataTable
                headers={[
                    { fieldKey: "title", label: "Title" },
                    { fieldKey: "status", label: "Status" },
                    { fieldKey: "desc", label: "Description" },
                    { fieldKey: "time", label: "Time" },
                ]}
                rows={[
                    {
                        id: "100",
                        title: "Title 1",
                        status: <Pill type="outline">Completed</Pill>,
                        desc: "Test",
                        time: "07/Aug/2023 9.30pm",
                    },
                    {
                        id: "102",
                        title: "Title 2",
                        status: <Pill type="outline">Pending</Pill>,
                        desc: "Cells containing longer data may be truncated so that only a maximum of 2 lines are visible",
                        time: "07/Aug/2023 10.30pm",
                    },
                ]}
            />
        );
    },
};

export const FixedColumnWidths: StoryObj<Component> = {
    render: () => {
        return (
            <DataTable
                headers={[
                    {
                        fieldKey: "title",
                        label: "Title",
                        style: { width: "20%" },
                    },
                    {
                        fieldKey: "status",
                        label: "Status",
                        style: { width: "20%" },
                    },
                    {
                        fieldKey: "desc",
                        label: "Description",
                        style: { width: "40%" },
                    },
                    {
                        fieldKey: "time",
                        label: "Time",
                        style: { width: "20%" },
                    },
                ]}
                rows={[
                    {
                        id: "100",
                        title: "Title 1",
                        status: <Pill>Completed</Pill>,
                        desc: "Test",
                        time: "07/Aug/2023 9.30pm",
                    },
                    {
                        id: "102",
                        title: "Title 2",
                        status: <Pill>Pending</Pill>,
                        desc: "Cells containing longer data may be truncated so that only a maximum of 2 lines are visible",
                        time: "07/Aug/2023 10.30pm",
                    },
                ]}
            />
        );
    },
};

export const SortIndicators: StoryObj<Component> = {
    render: () => {
        const headers = [
            {
                fieldKey: "colA",
                label: "Column A",
                clickable: true,
            },
            {
                fieldKey: "colB",
                label: "Column B",
                clickable: true,
            },
        ];
        const rows = [
            {
                id: 1,
                colA: "1",
                colB: "Content 1",
            },
            {
                id: 2,
                colA: "2",
                colB: "Content 2",
            },
        ];
        const [sortState, setSortState] = useState({
            colA: "asc",
        });
        const sortedRows = useMemo(() => {
            return rows.sort((a, b) => {
                return sortState.colA === "asc"
                    ? a.colA.localeCompare(b.colA)
                    : b.colA.localeCompare(a.colA);
            });
        }, [sortState]);
        const handleHeaderClick = (fieldKey) => {
            if (fieldKey === "colA") {
                setSortState({
                    colA: sortState.colA === "asc" ? "desc" : "asc",
                });
            } else if (fieldKey === "colB") {
                alert("Column B header was clicked!");
            }
        };
        return (
            <DataTable
                headers={headers}
                rows={sortedRows}
                sortIndicators={sortState}
                onHeaderClick={handleHeaderClick}
            />
        );
    },
};

export const MultiSelectionOfRows: StoryObj<Component> = {
    render: () => {
        const [selected, setSelected] = useState([]);
        const handleOnClickSelect = (rowId, isSelected) => {
            if (isSelected) {
                setSelected((selected) => [...selected, rowId]);
            } else {
                setSelected(
                    selected.filter((item) => {
                        return item !== rowId;
                    })
                );
            }
        };
        const handleOnClickSelectAll = (selected) => {
            setSelected(selected ? [] : DATA_ROWS.map(({ id }) => id));
        };
        return (
            <DataTable
                headers={DATA_HEADERS}
                rows={DATA_ROWS}
                selectedIds={selected}
                enableMultiSelect
                enableSelectAll
                onSelect={handleOnClickSelect}
                onSelectAll={handleOnClickSelectAll}
            />
        );
    },
};

export const DisabledCheckboxes: StoryObj<Component> = {
    render: () => {
        const [selected, setSelected] = useState(["1", "3"]);
        const [disabled, setDisabled] = useState(["1", "2"]);
        return (
            <DataTable
                headers={DATA_HEADERS}
                rows={DATA_ROWS}
                selectedIds={selected}
                disabledIds={disabled}
                enableMultiSelect
            />
        );
    },
};

export const AlternatingRows: StoryObj<Component> = {
    render: () => {
        return (
            <DataTable
                headers={DATA_HEADERS}
                rows={DATA_ROWS}
                selectedIds={["1"]}
                enableMultiSelect
                alternatingRows
            />
        );
    },
};

export const ActionBar: StoryObj<Component> = {
    render: () => {
        const [selected, setSelected] = useState(["1"]);
        const [rowCount, setRowCount] = useState(5);
        const [height, setHeight] = useState("default");
        const handleOnClickSelect = (rowId, isSelected) => {
            if (isSelected) {
                setSelected((selected) => [...selected, rowId]);
            } else {
                setSelected(
                    selected.filter((item) => {
                        return item !== rowId;
                    })
                );
            }
        };
        return (
            <DataTableWithCustomHeight
                rowCount={rowCount}
                onRowCountChange={setRowCount}
            >
                <DataTable
                    key={height}
                    headers={DATA_HEADERS}
                    rows={generateRows(rowCount)}
                    alternatingRows
                    enableMultiSelect
                    enableActionBar
                    selectedIds={selected}
                    onSelect={handleOnClickSelect}
                    onClearSelectionClick={() => {
                        setSelected([]);
                    }}
                />
            </DataTableWithCustomHeight>
        );
    },
};

export const NoRows: StoryObj<Component> = {
    render: () => {
        return <DataTable headers={DATA_HEADERS} />;
    },
};

export const LoadingState: StoryObj<Component> = {
    render: () => {
        return <DataTable headers={DATA_HEADERS} loadState="loading" />;
    },
};
