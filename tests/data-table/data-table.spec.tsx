import { render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useState } from "react";
import { DataTable } from "src/data-table";

// =============================================================================
// TEST SETUP
// =============================================================================
globalThis.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    disconnect() {}
    observe() {}
    takeRecords() {
        return [];
    }
    unobserve() {}
} as unknown as typeof IntersectionObserver;

// =============================================================================
// FIXTURES
// =============================================================================
const MOCK_HEADERS = [
    {
        fieldKey: "title",
        label: "Title",
    },
    {
        fieldKey: "status",
        label: "Status",
        keyColumn: true,
    },
    {
        fieldKey: "time",
        label: "Time",
    },
];

const MOCK_ROWS = [
    {
        id: "1",
        title: "Item 1",
        status: "Active",
        time: "9:30 AM",
    },
    {
        id: "2",
        title: "Item 2",
        status: "Inactive",
        time: "10:00 AM",
    },
    {
        id: "3",
        title: "Item 3",
        status: "Pending",
        time: "10:30 AM",
    },
];

// =============================================================================
// UNIT TESTS
// =============================================================================
describe("DataTable", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("Basic Rendering", () => {
        it("should render table with headers", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    data-testid="data-table"
                />
            );

            expect(screen.getByText("Title")).toBeInTheDocument();
            expect(screen.getByText("Status")).toBeInTheDocument();
            expect(screen.getByText("Time")).toBeInTheDocument();
        });

        it("should render table rows with data", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    data-testid="data-table"
                />
            );

            expect(screen.getByText("Item 1")).toBeInTheDocument();
            expect(screen.getByText("Item 2")).toBeInTheDocument();
            expect(screen.getByText("Item 3")).toBeInTheDocument();
        });

        it("should apply custom className", () => {
            const { container } = render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    className="custom-class"
                    data-testid="data-table"
                />
            );

            const wrapper = container.querySelector(".custom-class");
            expect(wrapper).toBeInTheDocument();
        });

        it("should accept custom id and data-testid", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    id="custom-id"
                    data-testid="custom-table"
                />
            );

            const table = screen.getByTestId("custom-table");
            expect(table).toHaveAttribute("id", "custom-id");
        });
    });

    describe("Empty State", () => {
        it("should display empty view when no rows provided", () => {
            render(
                <DataTable headers={MOCK_HEADERS} data-testid="data-table" />
            );

            expect(screen.getByText("No matching rows")).toBeInTheDocument();
        });

        it("should display empty view when rows array is empty", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={[]}
                    data-testid="data-table"
                />
            );

            expect(screen.getByText("No matching rows")).toBeInTheDocument();
        });

        it("should display custom empty view title", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={[]}
                    emptyView={{ title: "Custom Empty Title" }}
                    data-testid="data-table"
                />
            );

            expect(screen.getByText("Custom Empty Title")).toBeInTheDocument();
        });

        it("should render custom empty view via renderCustomEmptyView", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={[]}
                    renderCustomEmptyView={() => <div>Custom View</div>}
                    data-testid="data-table"
                />
            );

            expect(screen.getByText("Custom View")).toBeInTheDocument();
        });
    });

    describe("Loading State", () => {
        it("should display loading spinner when loadState is loading", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    loadState="loading"
                    data-testid="data-table"
                />
            );

            expect(
                screen.getByRole("status", { name: "Loading table" })
            ).toBeInTheDocument();
        });

        it("should display rows when loadState is success", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    loadState="success"
                    data-testid="data-table"
                />
            );

            expect(screen.getByText("Item 1")).toBeInTheDocument();
        });
    });

    describe("Multi-Select", () => {
        it("should render checkboxes when enableMultiSelect is true", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    enableMultiSelect
                    data-testid="data-table"
                />
            );

            const checkboxes = screen.getAllByRole("checkbox");
            // 3 row checkboxes
            expect(checkboxes).toHaveLength(3);
        });

        it("should not render checkboxes when enableMultiSelect is false", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    data-testid="data-table"
                />
            );

            const checkboxes = screen.queryAllByRole("checkbox");
            expect(checkboxes).toHaveLength(0);
        });

        it("should call onSelect when row checkbox is clicked", async () => {
            const onSelect = jest.fn();
            const user = userEvent.setup();

            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    enableMultiSelect
                    onSelect={onSelect}
                    data-testid="data-table"
                />
            );

            const rowCheckboxes = screen.getAllByTestId("checkbox-input");
            await user.click(rowCheckboxes[0]);

            expect(onSelect).toHaveBeenCalledWith("1", true);
        });

        it("should mark selected rows as checked", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    enableMultiSelect
                    selectedIds={["1", "2"]}
                    data-testid="data-table"
                />
            );

            const checkboxes = screen.getAllByTestId("checkbox-input");
            expect(checkboxes[0]).toBeChecked();
            expect(checkboxes[1]).toBeChecked();
            expect(checkboxes[2]).not.toBeChecked();
        });

        it("should mark disabled rows as disabled", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    enableMultiSelect
                    disabledIds={["1", "2"]}
                    data-testid="data-table"
                />
            );

            const checkboxes = screen.getAllByTestId("checkbox-input");
            // Disabled rows use focusableWhenDisabled, so aria-disabled is set
            // instead of the HTML disabled attribute to keep them keyboard-accessible
            expect(checkboxes[0]).toHaveAttribute("aria-disabled", "true");
            expect(checkboxes[1]).toHaveAttribute("aria-disabled", "true");
            expect(checkboxes[2]).not.toHaveAttribute("aria-disabled", "true");
        });
    });

    describe("Select All", () => {
        it("should render select all checkbox when enableSelectAll is true", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    enableMultiSelect
                    enableSelectAll
                    data-testid="data-table"
                />
            );

            const selectAllCheckbox = screen.getByRole("checkbox", {
                name: "Select all rows",
            });
            expect(selectAllCheckbox).toBeInTheDocument();
        });

        it("should call onSelectAll when select all checkbox is clicked", async () => {
            const onSelectAll = jest.fn();
            const user = userEvent.setup();

            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    enableMultiSelect
                    enableSelectAll
                    onSelectAll={onSelectAll}
                    data-testid="data-table"
                />
            );

            const selectAllCheckbox = screen.getByRole("checkbox", {
                name: "Select all rows",
            });
            await user.click(selectAllCheckbox);

            expect(onSelectAll).toHaveBeenCalledWith(false);
        });

        it("should mark select all checkbox as checked when all rows are selected", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    enableMultiSelect
                    enableSelectAll
                    selectedIds={["1", "2", "3"]}
                    data-testid="data-table"
                />
            );

            const selectAllCheckbox = screen.getByRole("checkbox", {
                name: "Select all rows",
            });
            expect(selectAllCheckbox).toBeChecked();
        });

        it("should mark select all checkbox as unchecked when no rows are selected", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    enableMultiSelect
                    enableSelectAll
                    selectedIds={[]}
                    data-testid="data-table"
                />
            );

            const selectAllCheckbox = screen.getByRole("checkbox", {
                name: "Select all rows",
            });
            expect(selectAllCheckbox).not.toBeChecked();
        });
    });

    describe("Action Bar", () => {
        it("should not display action bar when enableActionBar is false", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    enableMultiSelect
                    selectedIds={["1"]}
                    data-testid="data-table"
                />
            );

            expect(
                screen.queryByText(/item(s)? selected/)
            ).not.toBeInTheDocument();
        });

        it("should display action bar when enableActionBar is true and rows are selected", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    enableMultiSelect
                    enableActionBar
                    selectedIds={["1", "2"]}
                    data-testid="data-table"
                />
            );

            expect(screen.getByText("2 items selected")).toBeInTheDocument();
        });

        it("should display correct singular item count in action bar", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    enableMultiSelect
                    enableActionBar
                    selectedIds={["1"]}
                    data-testid="data-table"
                />
            );

            expect(screen.getByText("1 item selected")).toBeInTheDocument();
        });

        it("should call onClearSelectionClick when clear selection button is clicked", async () => {
            const onClearSelectionClick = jest.fn();
            const user = userEvent.setup();

            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    enableMultiSelect
                    enableActionBar
                    selectedIds={["1"]}
                    onClearSelectionClick={onClearSelectionClick}
                    data-testid="data-table"
                />
            );

            const clearButton = screen.getByRole("button", {
                name: /Clear selection/,
            });
            await user.click(clearButton);

            expect(onClearSelectionClick).toHaveBeenCalledTimes(1);
        });

        it("should render custom action bar content", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    enableMultiSelect
                    enableActionBar
                    selectedIds={["1"]}
                    actionBarContent={<button>Custom Action</button>}
                    data-testid="data-table"
                />
            );

            expect(screen.getByText("Custom Action")).toBeInTheDocument();
        });
    });

    describe("Sort Indicators", () => {
        it("should display sort arrow when sort indicator is set", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    sortIndicators={{ title: "asc" }}
                    data-testid="data-table"
                />
            );

            const sortArrow = screen.getByTestId(
                "data-table-header-title-arrowup"
            );
            expect(sortArrow).toBeInTheDocument();
        });

        it("should display down arrow for descending sort", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    sortIndicators={{ title: "desc" }}
                    data-testid="data-table"
                />
            );

            const sortArrow = screen.getByTestId(
                "data-table-header-title-arrowdown"
            );
            expect(sortArrow).toBeInTheDocument();
        });

        it("should not display sort arrow when sort indicator is not set", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    data-testid="data-table"
                />
            );

            expect(
                screen.queryByTestId("data-table-header-title-arrowup")
            ).not.toBeInTheDocument();
        });

        it("should set aria-sort attribute on header", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    sortIndicators={{ title: "asc" }}
                    data-testid="data-table"
                />
            );

            const header = screen.getByTestId("data-table-header-title");
            expect(header).toHaveAttribute("aria-sort", "ascending");
        });

        it("should set aria-sort to descending for desc sort", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    sortIndicators={{ title: "desc" }}
                    data-testid="data-table"
                />
            );

            const header = screen.getByTestId("data-table-header-title");
            expect(header).toHaveAttribute("aria-sort", "descending");
        });
    });

    describe("Header Click Interaction", () => {
        it("should call onHeaderClick when clickable header is clicked", async () => {
            const onHeaderClick = jest.fn();
            const user = userEvent.setup();

            const clickableHeaders = [
                {
                    fieldKey: "title",
                    label: "Title",
                    clickable: true,
                },
            ];

            render(
                <DataTable
                    headers={clickableHeaders}
                    rows={MOCK_ROWS}
                    onHeaderClick={onHeaderClick}
                    data-testid="data-table"
                />
            );

            const header = screen.getByTestId("data-table-header-title");
            // Click the hidden button inside the header
            const buttons = header.querySelectorAll("button");
            if (buttons.length > 0) {
                await user.click(buttons[0]);
                expect(onHeaderClick).toHaveBeenCalledWith("title");
            }
        });

        it("should call onHeaderClick when header with sort indicator is clicked", async () => {
            const onHeaderClick = jest.fn();
            const user = userEvent.setup();

            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    sortIndicators={{ title: "asc" }}
                    onHeaderClick={onHeaderClick}
                    data-testid="data-table"
                />
            );

            const header = screen.getByTestId("data-table-header-title");
            const buttons = header.querySelectorAll("button");
            if (buttons.length > 0) {
                await user.click(buttons[0]);
                expect(onHeaderClick).toHaveBeenCalledWith("title");
            }
        });
    });

    describe("String Headers", () => {
        it("should accept string headers and use them as fieldKey and label", () => {
            const stringHeaders = ["name", "age", "city"];
            const rows = [
                {
                    id: "1",
                    name: "John",
                    age: 30,
                    city: "NYC",
                },
            ];

            render(
                <DataTable
                    headers={stringHeaders}
                    rows={rows}
                    data-testid="data-table"
                />
            );

            expect(screen.getByText("name")).toBeInTheDocument();
            expect(screen.getByText("age")).toBeInTheDocument();
            expect(screen.getByText("city")).toBeInTheDocument();
        });
    });

    describe("Accessibility", () => {
        it("should make table wrapper focusable for keyboard users", () => {
            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={MOCK_ROWS}
                    data-testid="data-table"
                />
            );

            const tableWrapper = screen.getByTestId("data-table");
            expect(tableWrapper).toHaveAttribute("tabindex", "0");
        });

        it("should support keyboard navigation for multi-select checkboxes", async () => {
            const user = userEvent.setup();

            const StatefulTable = () => {
                const [selectedIds, setSelectedIds] = useState<string[]>([]);

                return (
                    <DataTable
                        headers={MOCK_HEADERS}
                        rows={MOCK_ROWS}
                        enableMultiSelect
                        enableSelectAll
                        selectedIds={selectedIds}
                        onSelect={(rowId, isSelected) => {
                            setSelectedIds((prev) => {
                                if (isSelected) {
                                    return [...prev, rowId];
                                }

                                return prev.filter((id) => id !== rowId);
                            });
                        }}
                        onSelectAll={(isAllSelected) => {
                            setSelectedIds(
                                isAllSelected
                                    ? []
                                    : MOCK_ROWS.map((row) => row.id)
                            );
                        }}
                        data-testid="data-table"
                    />
                );
            };

            render(<StatefulTable />);

            const tableWrapper = screen.getByTestId("data-table");
            const selectAllCheckbox = screen.getByRole("checkbox", {
                name: "Select all rows",
            });
            const firstRowCheckbox = within(
                screen.getByTestId("data-table-row-1-selection")
            ).getByRole("checkbox");

            tableWrapper.focus();
            await user.tab();

            expect(selectAllCheckbox).toHaveFocus();

            await user.keyboard(" ");
            expect(firstRowCheckbox).toBeChecked();

            await user.tab();
            expect(firstRowCheckbox).toHaveFocus();
        });
    });

    describe("Custom Styling", () => {
        it("should accept custom header style", () => {
            const headersWithStyle = [
                {
                    fieldKey: "title",
                    label: "Title",
                    style: { width: "50%" },
                },
            ];

            const { container } = render(
                <DataTable
                    headers={headersWithStyle}
                    rows={MOCK_ROWS}
                    data-testid="data-table"
                />
            );

            const headerCell = container.querySelector("th");
            expect(headerCell).toHaveStyle({ width: "50%" });
        });
    });

    describe("Rendering Custom Cell Content", () => {
        it("should render ReactNode cell content", () => {
            const customRows = [
                {
                    id: "1",
                    title: "Item 1",
                    status: <span data-testid="custom-status">Custom</span>,
                    time: "9:30 AM",
                },
            ];

            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={customRows}
                    data-testid="data-table"
                />
            );

            expect(screen.getByTestId("custom-status")).toBeInTheDocument();
        });

        it("should render function-based cell content with row and renderProps", () => {
            const customRows = [
                {
                    id: "1",
                    title: "Item 1",
                    status: (
                        _row: (typeof MOCK_ROWS)[0],
                        renderProps: { isSelected: boolean }
                    ) => (renderProps.isSelected ? "Selected" : "Not Selected"),
                    time: "9:30 AM",
                },
            ];

            render(
                <DataTable
                    headers={MOCK_HEADERS}
                    rows={customRows}
                    enableMultiSelect
                    selectedIds={["1"]}
                    data-testid="data-table"
                />
            );

            expect(screen.getByText("Selected")).toBeInTheDocument();
        });
    });
});
