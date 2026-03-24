import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Pill } from "src/pill";
import { Table } from "src/table";
import { Typography } from "src/typography/typography";

type Component = typeof Table;

const meta: Meta<Component> = {
    title: "Content/Table",
    component: Table,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => (
        <Table>
            <Table.Head>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Head>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>John Doe</Table.Cell>
                    <Table.Cell>
                        <Typography.LinkMD href="mailto:john@example.com">
                            john@example.com
                        </Typography.LinkMD>
                    </Table.Cell>
                    <Table.Cell>
                        <Pill type="outline">Pending</Pill>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    ),
};

export const FixedColumnWidths: StoryObj<Component> = {
    render: (_args) => (
        <Table style={{ tableLayout: "fixed" }}>
            <Table.Head>
                <Table.Row>
                    <Table.HeaderCell style={{ width: "30%" }}>
                        Name
                    </Table.HeaderCell>
                    <Table.HeaderCell style={{ width: "40%" }}>
                        Email
                    </Table.HeaderCell>
                    <Table.HeaderCell style={{ width: "30%" }}>
                        Status
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Head>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>Chris</Table.Cell>
                    <Table.Cell
                        style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                    >
                        chris@example.com
                    </Table.Cell>
                    <Table.Cell>Active</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Sam</Table.Cell>
                    <Table.Cell
                        style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                    >
                        sam@example.com
                    </Table.Cell>
                    <Table.Cell>Inactive</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    ),
};

export const RowAndColSpan: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Table>
                <Table.Head>
                    <Table.Row>
                        <Table.HeaderCell>Group</Table.HeaderCell>
                        <Table.HeaderCell>Item</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell
                            rowSpan={2}
                            style={{ borderBottom: "none" }}
                        >
                            Group A
                        </Table.Cell>
                        <Table.Cell>Product A</Table.Cell>
                        <Table.Cell>Active</Table.Cell>
                        <Table.Cell>100</Table.Cell>
                        <Table.Cell>$2</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Product B</Table.Cell>
                        <Table.Cell>Inactive</Table.Cell>
                        <Table.Cell colSpan={2}>Not applicable</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    },
};

export const ScrollableTable: StoryObj<Component> = {
    render: (_args) => (
        <Table.Container style={{ maxHeight: "300px", overflowY: "auto" }}>
            <Table.Table>
                <Table.Head style={{ position: "sticky", top: 0 }}>
                    <Table.Row>
                        <Table.HeaderCell>No</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {Array.from({ length: 15 }).map((_, i) => (
                        <Table.Row key={i}>
                            <Table.Cell>{i + 1}</Table.Cell>
                            <Table.Cell>user{i + 1}@example.com</Table.Cell>
                            <Table.Cell>
                                {i % 2 === 0 ? "Active" : "Inactive"}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Table>
        </Table.Container>
    ),
};
