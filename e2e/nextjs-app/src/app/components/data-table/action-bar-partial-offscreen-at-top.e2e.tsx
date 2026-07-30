"use client";

import { DataTable } from "@lifesg/react-design-system/data-table";
import { buildRows, headers } from "./common";
import styles from "./data-table.module.css";

const rows = buildRows(18);

export default function Story() {
    return (
        <div>
            <DataTable
                className={styles["action-bar-overflow-table"]}
                data-testid="data-table"
                headers={headers}
                rows={rows}
                enableMultiSelect
                enableSelectAll
                enableActionBar
                selectedIds={["1"]}
            />
            <div className={styles["action-bar-overflow-spacer"]} />
        </div>
    );
}
