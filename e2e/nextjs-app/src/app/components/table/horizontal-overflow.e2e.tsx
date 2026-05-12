"use client";
import { Table } from "@lifesg/react-design-system/table";
import styles from "./table.module.css";

export default function Story() {
    return (
        <div className={styles["table-overflow"]}>
            <Table data-testid="table">
                <Table.Head>
                    <Table.Row>
                        <Table.HeaderCell>First name</Table.HeaderCell>
                        <Table.HeaderCell>Last name</Table.HeaderCell>
                        <Table.HeaderCell>Email address</Table.HeaderCell>
                        <Table.HeaderCell>Department</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Alice</Table.Cell>
                        <Table.Cell>Tan</Table.Cell>
                        <Table.Cell>alice@example.com</Table.Cell>
                        <Table.Cell>Engineering</Table.Cell>
                        <Table.Cell>Active</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Bob</Table.Cell>
                        <Table.Cell>Lim</Table.Cell>
                        <Table.Cell>bob@example.com</Table.Cell>
                        <Table.Cell>Design</Table.Cell>
                        <Table.Cell>Inactive</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
}
