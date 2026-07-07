"use client";
import { Table } from "@lifesg/react-design-system/table";
import styles from "./table.module.css";

export default function Story() {
    return (
        <Table.Container
            data-testid="table-wrapper"
            className={styles["table-vertical-overflow"]}
        >
            <Table.Table data-testid="table">
                <Table.Head>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <Table.Row key={i} data-testid={`row-${i + 1}`}>
                            <Table.Cell>User {i + 1}</Table.Cell>
                            <Table.Cell>user{i + 1}@example.com</Table.Cell>
                            <Table.Cell>
                                {i % 2 === 0 ? "Active" : "Inactive"}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Table>
        </Table.Container>
    );
}
