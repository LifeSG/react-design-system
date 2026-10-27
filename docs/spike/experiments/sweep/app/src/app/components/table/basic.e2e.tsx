"use client";
import { Table } from "@lifesg/react-design-system/table";

export default function Story() {
    return (
        <Table data-testid="table">
            <Table.Head>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Head>
            <Table.Body>
                <Table.Row data-testid="row-1">
                    <Table.Cell>Alice Tan</Table.Cell>
                    <Table.Cell>alice@example.com</Table.Cell>
                    <Table.Cell>Active</Table.Cell>
                </Table.Row>
                <Table.Row data-testid="row-2">
                    <Table.Cell>Bob Lim</Table.Cell>
                    <Table.Cell>bob@example.com</Table.Cell>
                    <Table.Cell>Inactive</Table.Cell>
                </Table.Row>
                <Table.Row data-testid="row-3">
                    <Table.Cell>Carol Wong</Table.Cell>
                    <Table.Cell>carol@example.com</Table.Cell>
                    <Table.Cell>Pending</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
}
