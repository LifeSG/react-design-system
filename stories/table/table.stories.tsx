import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "src/table";
import { Pill } from "src/pill";
import { Typography } from "src/typography/typography";

type Component = typeof Table;

const meta: Meta<Component> = {
    title: "Content/Table",
    component: Table,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => (
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
                    <Table.Cell>john@example.com</Table.Cell>
                    <Table.Cell>
                        <Pill type="outline">Active</Pill>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Jane Smith</Table.Cell>
                    <Table.Cell>jane@example.com</Table.Cell>
                    <Table.Cell>
                        <Pill type="outline">Pending</Pill>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    ),
};

export const FixedColumnWidths: StoryObj<Component> = {
    render: () => (
        <Table>
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
                    <Table.Cell>chris@example.com</Table.Cell>
                    <Table.Cell>Active</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Sam</Table.Cell>
                    <Table.Cell>sam@example.com</Table.Cell>
                    <Table.Cell>Inactive</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    ),
};

export const CustomCellContent: StoryObj<Component> = {
    render: () => (
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

export const RowAndColSpan: StoryObj<Component> = {
    render: () => (
        <Table>
            <Table.Head>
                <Table.Row>
                    <Table.HeaderCell>Group</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Head>
            <Table.Body>
                <Table.Row>
                    <Table.Cell rowSpan={2}>Group A</Table.Cell>
                    <Table.Cell>alice@example.com</Table.Cell>
                    <Table.Cell>Active</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>bob@example.com</Table.Cell>
                    <Table.Cell>Inactive</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    ),
};
