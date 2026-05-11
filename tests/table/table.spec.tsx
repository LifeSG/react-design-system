import { render, screen } from "@testing-library/react";
import { Table } from "src/table";

// =============================================================================
// UNIT TESTS
// =============================================================================

describe("Table", () => {
    it("should render the table structure", () => {
        render(
            <Table data-testid="table">
                <Table.Head data-testid="table-head">
                    <Table.Row data-testid="header-row">
                        <Table.HeaderCell data-testid="header-cell">
                            Name
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Head>
                <Table.Body data-testid="table-body">
                    <Table.Row data-testid="body-row">
                        <Table.Cell data-testid="body-cell">
                            John Doe
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );

        expect(screen.getByTestId("table")).toBeInTheDocument();
        expect(screen.getByTestId("table-head")).toBeInTheDocument();
        expect(screen.getByTestId("header-row")).toBeInTheDocument();
        expect(screen.getByTestId("header-cell")).toBeInTheDocument();
        expect(screen.getByTestId("table-body")).toBeInTheDocument();
        expect(screen.getByTestId("body-row")).toBeInTheDocument();
        expect(screen.getByTestId("body-cell")).toBeInTheDocument();
    });

    it("should render cell and header content correctly", () => {
        render(
            <Table>
                <Table.Head>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>John Doe</Table.Cell>
                        <Table.Cell>Active</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );

        expect(
            screen.getByRole("columnheader", { name: "Name" })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("columnheader", { name: "Status" })
        ).toBeInTheDocument();
        expect(screen.getByText("John Doe")).toBeInTheDocument();
        expect(screen.getByText("Active")).toBeInTheDocument();
    });

    it("should render multiple rows correctly", () => {
        render(
            <Table>
                <Table.Body>
                    <Table.Row data-testid="row-1">
                        <Table.Cell>Alice</Table.Cell>
                    </Table.Row>
                    <Table.Row data-testid="row-2">
                        <Table.Cell>Bob</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );

        expect(screen.getAllByRole("row")).toHaveLength(2);
        expect(screen.getByTestId("row-1")).toBeInTheDocument();
        expect(screen.getByTestId("row-2")).toBeInTheDocument();
    });

    it("should apply custom classNames to subcomponents", () => {
        render(
            <Table className="custom-table">
                <Table.Body className="custom-body">
                    <Table.Row className="custom-row">
                        <Table.Cell className="custom-cell">content</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );

        expect(screen.getByRole("table").className).toContain("custom-table");
        expect(screen.getByRole("rowgroup").className).toContain("custom-body");
        expect(screen.getByRole("row").className).toContain("custom-row");
        expect(screen.getByRole("cell").className).toContain("custom-cell");
    });
});
